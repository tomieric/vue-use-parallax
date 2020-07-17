# vue-use-parallax

<a href="https://travis-ci.org/tomieric/vue-use-parallax"><img alt="Travis (.org) branch" src="https://img.shields.io/travis/tomieric/vue-use-parallax/master.svg?logoColor=%23666666&style=flat-square"></a>
<a href="https://unpkg.com/vue-use-parallax/dist/vue-use-parallax.esm-browser.js"><img src="https://img.badgesize.io/https://unpkg.com/vue-use-parallax/dist/vue-use-parallax.esm-browser.js?compression=gzip&style=flat-square" alt="Gzip Size" /></a>
<a href="https://www.npmjs.com/package/vue-use-parallax"><img src="https://img.shields.io/npm/v/vue-use-parallax.svg?colorB=brightgreen&style=flat-square"></a>
<a href="https://github.com/tomieric/vue-use-parallax/tree/master/tests/unit"><img src="https://img.shields.io/badge/tested_with-jest-99424f.svg?style=flat-square"></a>
<a href="http://hits.dwyl.io/tomieric/vue-use-parallax" alt="hit count"><img src="http://hits.dwyl.io/tomieric/vue-use-parallax.svg" /></a>
<a href="http://hits.dwyl.io/tomieric/vue-use-parallax" alt="downloads"><img src="https://img.shields.io/npm/tomieric/vue-use-parallax.svg?style=flat-square" /></a>

EN | [中文](./README-zh.MD)

The parallax are a common way for users to interact, implemented using Vue hooks. Support both `vue3` and `vue2`，You need to install plug-ins `vue-composition-api` in `vue2` 。

inspired by[Github挂了，它错误页的Parallax效果研究一下？](https://www.bilibili.com/video/BV1Lf4y1R779)

* [demo](https://tomieric.github.io/vue-use-parallax/)
* [vue2 demo](https://tomieric.github.io/vue-use-parallax/vue2-demo/)

## Install

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

## USAGE

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

## Attributes

`useParallax(elRef: Ref<HTMLElement>, options: Array<[Ref<HTMLElement>, number] | Ref<HTMLElement>>)`

* `elRef` Wrap the ref object
* `options` move child elements and offset values

### Hooks gets the behavior state

```js
  const { startParallax, setParallax, resetParallax } = useParallax(wrapperRef.value)
```

* `startParallax()` Register to start listening for mouse movement visual biases. Default initialization calls. If manually 'resetParallax()' can be manually start monitoring.
* `setParallax(options)` Add new move children
* `resetParallax()` stop parallax event

### Options

Receive an array，Each item in the array can be a `ref object` in the DOM, with a default offset of 10px，`eg. setParallax([bannerRef])`

If you want to configure the offset value of the DOM separately, you pass in an array where the first item is the REF object of the DOM, the second is the value of the offset value, and the reverse is the negative value. `eg. setParallax([bannerRef, [titleRef, 100], [descriptionRef, -50]])`

## 📄 License

[MIT License](https://github.com/tomieric/vue-use-parallax/blob/master/LICENSE) © 2020-present [tomieric](https://github.com/tomieric)