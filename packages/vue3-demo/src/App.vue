<template>
  <pageHeader />
  <div id="wrapper" ref="wrapperRef">
    <div class="bg" ref="bgRef"></div>
    <div class="text-a" ref="titleRef">Unapologetically Replaceable</div>
    <div class="text-b" ref="heroRef">Unapologetically Replaceable</div>
    <div class="text-c" ref="buttonRef">button</div>
  </div>

  <div class="source">
    <pre>
      <code>
/*
* How to use it?
*
*/

import { onMounted, ref } from 'vue'
import useParallax from 'vue-use-parallax'

export default {
  name: 'App',
  
  setup () {
    const wrapperRef = ref(null)
    const bgRef = ref(null)
    const titleRef = ref(null)
    const heroRef = ref(null)
    const buttonRef = ref(null)

    onMounted(() => {
      console.log(wrapperRef);
      
      const { setParallax } = useParallax(wrapperRef, [bgRef, [titleRef, 20]])

      setParallax([
        [heroRef, 50],
        [buttonRef, -20]
      ])
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
      </code>
    </pre>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import useParallax from 'vue-use-parallax'
import pageHeader from './components/Header.vue'

export default {
  name: 'App',

  components: {
    pageHeader
  },
  
  setup () {
    const wrapperRef = ref(null)
    const bgRef = ref(null)
    const titleRef = ref(null)
    const heroRef = ref(null)
    const buttonRef = ref(null)

    const { setParallax } = useParallax(wrapperRef, [bgRef, [titleRef, 20]])

    setParallax([
      [heroRef, 50],
      [buttonRef, -20]
    ])

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
