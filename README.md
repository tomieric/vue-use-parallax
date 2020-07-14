# vue-use-parallax

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
import { ref, onMounted } from 'vue'
// Vue2
// import { ref, onMounted } from 'vue-composition-api'
import useParallax from 'vue-use-parallax'

export default {
  setup () {
    // bg
    const parallaxRef = ref(null)
    const bgRef = ref(null)
    const titleRef = ref(null)
    const sloganRef = ref(null)
    const postRef = ref(null)

    onMounted(() => {
      const { setParallax } = useParallax(parallaxRef.value, [bgRef.value, [titleRef.value, 20]])

      setParallax([
        [sloganRef.value, 30],
        [postRef.value, -20]
      ])
    })

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

## 📄 License

[MIT License](https://github.com/tomieric/vue-use-parallax/blob/master/LICENSE) © 2020-present [tomieric](https://github.com/tomieric)