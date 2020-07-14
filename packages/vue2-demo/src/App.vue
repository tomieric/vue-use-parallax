<template>
  <div id="app">
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

  import { onMounted, onUnmounted, ref } from '@vue/composition-api'
  import useParallax from 'vue-use-parallax-v2'

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
        
        const { setParallax } = useParallax(wrapperRef.value, [bgRef.value, [titleRef.value, 20]])

        setParallax([
          [heroRef.value, 50],
          [buttonRef.value, -20]
        ])

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
        </code>
      </pre>
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, ref } from '@vue/composition-api'
// eslint-disable-next-line
import useParallax from 'vue-use-parallax-v2'
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

    onMounted(() => {
      const { setParallax, resetParallax } = useParallax(wrapperRef.value, [bgRef.value, [titleRef.value, 20]])

      setParallax([
        [heroRef.value, 50],
        [buttonRef.value, -20]
      ])

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