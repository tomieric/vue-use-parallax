import path from 'path'
import ts from 'rollup-plugin-typescript2'
import replace from 'rollup-plugin-replace'
import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'

const target = process.env.TARGET
const pkg =
  target === 'src'
    ? require('./package.json')
    : {
        name: process.env.TARGET
      }
const resolve = p => path.resolve(__dirname, p)
const options = {
  name: 'VueUseParallax',
  formats: ['esm', 'cjs', 'global', 'esm-browser']
}

const name = pkg.name.split('/').pop()

const banner =
`/*!
 * ${pkg.name} ${pkg.version}
 * Copyright 2020-preset tomieric<https://github.com/tomieric> All Rights Reserved
 * Licensed under MIT
 */
`
const external = [
  'vue'
]
const globals = {
  'vue': 'Vue'
}

// ensure TS checks only once for each build
let hasTSChecked = false

const configs = {
  esm: {
    file: resolve(
      `${target === 'src' ? '' : target + '/'}dist/${name}.esm-bundler.js`
    ),
    format: `es`
  },
  cjs: {
    file: resolve(
      `${target === 'src' ? '' : target + '/'}dist/${name}.common.js`
    ),
    format: `cjs`
  },
  global: {
    file: resolve(
      `${target === 'src' ? '' : target + '/'}dist/${name}.global.js`
    ),
    format: `iife`
  },
  'esm-browser': {
    file: resolve(
      `${target === 'src' ? '' : target + '/'}dist/${name}.esm-browser.js`
    ),
    format: `es`
  }
}

const defaultFormats = ['esm', 'cjs']
const inlineFormats = process.env.FORMATS && process.env.FORMATS.split(',')
const finallyFormats = inlineFormats || options.formats || defaultFormats
const rollupConfig = process.env.PROD_ONLY
  ? []
  : finallyFormats.map(format => createConfig(configs[format]))

if (process.env.NODE_ENV === 'production') {
  finallyFormats.forEach(format => {
    if (format === 'cjs') {
      rollupConfig.push(createProductionConfig(format))
    }
    if (format === 'global' || format === 'esm-browser') {
      rollupConfig.push(createMinifiedConfig(format))
    }
  })
}

export default rollupConfig

function createConfig(output, plugins = []) {
  const isProductionBuild =
    process.env.__DEV__ === 'false' || /\.prod\.js$/.test(output.file)
  const isGlobalBuild = /\.global(\.prod)?\.js$/.test(output.file)
  const isBundlerESMBuild = /\.esm-bundler\.js$/.test(output.file)
  const isBrowserESMBuild = /esm-browser(\.prod)?\.js$/.test(output.file)
  // const isRuntimeCompileBuild = /vue\./.test(output.file)

  if (isGlobalBuild) {
    output.name = options.name
    // output.globals = {
    //   '@vue/runtime-dom': 'VueDOMRuntime'
    // }
  }
  // banner
  output.banner = banner
  output.globals = globals

  const shouldEmitDeclarations =
    process.env.TYPES != null &&
    process.env.NODE_ENV === 'production' &&
    !hasTSChecked

  const tsPlugin = ts({
    check: process.env.NODE_ENV === 'production' && !hasTSChecked,
    tsconfig: path.resolve(__dirname, 'tsconfig.json'),
    cacheRoot: path.resolve(__dirname, 'node_modules/.rts2_cache'),
    tsconfigOverride: {
      compilerOptions: {
        declaration: shouldEmitDeclarations,
        declarationMap: shouldEmitDeclarations
      },
      exclude: ['**/__tests__']
    },
    objectHashIgnoreUnknownHack: true
  })
  // we only need to check TS and generate declarations once for each build.
  // it also seems to run into weird issues when checking multiple times
  // during a single build.
  hasTSChecked = true

  return {
    external,
    input: resolve(`${target}/index.ts`),
    // Global and Browser ESM builds inlines everything so that they can be
    // used alone.
    // external:
    //   isGlobalBuild || isBrowserESMBuild
    //     ? ['@vue/runtime-dom']
    //     : ['@vue/runtime-dom', 'lodash.throttle'],
    plugins: [
      nodeResolve(),
      commonjs(),
      tsPlugin,
      createReplacePlugin(
        isProductionBuild,
        isBundlerESMBuild,
        (isGlobalBuild || isBrowserESMBuild) &&
          !options.enableNonBrowserBranches
        // ,
        // isRuntimeCompileBuild
      ),
      ...plugins
    ],
    output,
    onwarn: (msg, warn) => {
      if (!/Circular/.test(msg)) {
        warn(msg)
      }
    }
  }
}

function createReplacePlugin(isProduction, isBundlerESMBuild, isBrowserBuild) {
  return replace({
    __VERSION__: `"${pkg.version}"`,
    __DEV__: isBundlerESMBuild
      ? // preserve to be handled by bundlers
        `process.env.NODE_ENV !== 'production'`
      : // hard coded dev/prod builds
        !isProduction,
    'process.env.NODE_ENV': JSON.stringify(
      isProduction ? 'production' : 'development'
    ),
    // If the build is expected to run directly in the browser (global / esm-browser builds)
    __BROWSER__: isBrowserBuild,
    // this is only used during tests
    __JSDOM__: false
  })
}

function createProductionConfig(format) {
  return createConfig({
    file: resolve(`dist/${name}.${format}.prod.js`),
    format: configs[format].format
  })
}

function createMinifiedConfig(format) {
  const { terser } = require('rollup-plugin-terser')
  return createConfig(
    {
      file: resolve(`dist/${name}.${format}.prod.js`),
      format: configs[format].format
    },
    [
      terser({
        module: /^esm/.test(format),
        compress: {
          // drop_console: true,
          drop_debugger: true
        }
      })
    ]
  )
}
