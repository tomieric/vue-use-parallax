# vue-use-parallax

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
      const { setParallax } = useParallax(parallaxRef.$el, [bgRef, [titleRef, 20]])

      setParallax(callback => {
        // mousemove
        callback(sloganRef, 30)
        callback(postRef, -20)
      })
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