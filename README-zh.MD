# vue-use-parallax

<a href="https://travis-ci.org/tomieric/vue-use-parallax"><img alt="Travis (.org) branch" src="https://img.shields.io/travis/tomieric/vue-use-parallax/master.svg?logoColor=%23666666&style=flat-square"></a>
<a href="https://unpkg.com/vue-use-parallax/dist/vue-use-parallax.esm-browser.js"><img src="https://img.badgesize.io/https://unpkg.com/vue-use-parallax/dist/vue-use-parallax.esm-browser.js?compression=gzip&style=flat-square" alt="Gzip Size" /></a>
<a href="https://www.npmjs.com/package/vue-use-parallax"><img src="https://img.shields.io/npm/v/vue-use-parallax.svg?colorB=brightgreen&style=flat-square"></a>
<a href="https://github.com/tomieric/vue-use-parallax/tree/master/tests/unit"><img src="https://img.shields.io/badge/tested_with-jest-99424f.svg?style=flat-square"></a>
<a href="http://hits.dwyl.io/tomieric/vue-use-parallax" alt="hit count"><img src="http://hits.dwyl.io/tomieric/vue-use-parallax.svg" /></a>
<a href="http://hits.dwyl.io/tomieric/vue-use-parallax" alt="downloads"><img src="https://img.shields.io/npm/tomieric/vue-use-parallax.svg?style=flat-square" /></a>

视觉滚动差异是一种常用的用户交互方式，这里使用 vue hooks 去实现。同时支持 vue3 和 vue2，vue2 需要安装插件 `vue-composition-api`

灵感来源于[Github挂了，它错误页的Parallax效果研究一下？](https://www.bilibili.com/video/BV1Lf4y1R779)

* [demo](https://tomieric.github.io/vue-use-parallax/)
* [vue2 demo](https://tomieric.github.io/vue-use-parallax/vue2-demo/)

## 安装

### Yarn

```bash
yarn add vue-use-parallax
```

### Npm

```bash
npm install vue-use-parallax --save
```

### vue2

```bash
yarn add vue-composition-api vue-use-parallax-v2
```

## 用法

```vue
<template>
  <div class="container">
    <div class="banner" ref="parallaxRef">
      <div class="bg" ref="bgRef"></bg>
      <div class="title" ref="titleRef">Title</div>
      <div class="slogan" ref="sloganRef">Slogan</div>
      <div class="post" ref="postRef"><img src="//img.domain.com/post.jpg" /></div>
    </div>
  </div>
</template>

<script>
// Vue3
import { ref } from 'vue'
import useParallax from 'vue-use-parallax'

export default {
  setup () {
    // bg
    const parallaxRef = ref(null)
    const bgRef = ref(null)
    const titleRef = ref(null)
    const sloganRef = ref(null)
    const postRef = ref(null)

    const { setParallax } = useParallax(parallaxRef, [bgRef, [titleRef, 20]])

    setParallax([
      [sloganRef, 30],
      [postRef, -20]
    ])

    return {
      parallaxRef,
      bgRef,
      titleRef,
      sloganRef,
      postRef
    }
  }
}
</script>
```

### vue2 & composition-api

```vue
<template>
  <div class="container">
    <div class="banner" ref="parallaxRef">
      <div class="bg" ref="bgRef"></bg>
      <div class="title" ref="titleRef">Title</div>
      <div class="slogan" ref="sloganRef">Slogan</div>
      <div class="post" ref="postRef"><img src="//img.domain.com/post.jpg" /></div>
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, ref } from '@vue/composition-api'
import useParallax from 'vue-use-parallax2'


export default {
  setup () {
    const wrapperRef = ref(null)
    const bgRef = ref(null)
    const titleRef = ref(null)
    const heroRef = ref(null)
    const buttonRef = ref(null)

    // onMounted
    onMounted(() => {
      const { setParallax, resetParallax } = useParallax(wrapperRef.value, [bgRef.value, [titleRef.value, 20]])

      setParallax([
        [heroRef.value, 50],
        [buttonRef.value, -20]
      ])
      
      // destoryed
      onUnmounted(() => {
        resetParallax()
      })
    })

    return {
      wrapperRef,
      bgRef,
      titleRef,
      heroRef,
      buttonRef
    }
  }
}
</script>
```

## 📄 License

[MIT License](https://github.com/tomieric/vue-use-parallax/blob/master/LICENSE) © 2020-present [tomieric](https://github.com/tomieric)