/**
 *
 * vue hooks for parallax
 * @param {HTMLElement} el An area container that the mouse moves
 * @param {(Array<[] | HTMLElement>)} Scrolling elements
 */

import { onMounted, onUnmounted, isRef, Ref } from 'vue'

type tupleChildren = [Ref<HTMLElement>, number]
type TypeChildren = Array<tupleChildren | Ref<HTMLElement>>

const useParallax = (el: Ref<HTMLElement>, children: Array<TypeChildren> = []) => {
  const queue: Array<TypeChildren> = [...children]

  const parallx = (elem: Ref<HTMLElement>, x: number, y: number, offset: number = 10) => {
    elem && isRef(elem) && (elem.value.style.transform = `translate(${x * offset / 0.5}px, ${ y * offset / 0.5}px)`);
  }

  const publish = (offsetX: number, offsetY: number) => {
    queue.forEach((children: any[] | Ref<HTMLElement>) => {
      if (Array.isArray(children)) {
        parallx(children[0], offsetX, offsetY, children[1])
      } else {
        parallx(children, offsetX, offsetY)
      }
    })
  }

  const setParallax = (children: Array<TypeChildren> = []) => {
    queue.push(...children)
  }
  
  const scrollParallax = (e: MouseEvent) => {
    if (!isRef(el)) return
    const offsetX: number = e.clientX / el.value.clientWidth
    const offsetY: number = e.clientY / el.value.clientHeight
    requestAnimationFrame(() => publish(offsetX, offsetY))
  }

  // remove eventListener
  const resetParallax = () => el && isRef(el) && el.value.removeEventListener('mousemove', scrollParallax, false)
  onUnmounted(() => resetParallax())
  
  // mousemove
  const startParallax = () => {
    resetParallax()
    el && isRef(el) && el.value.addEventListener('mousemove', scrollParallax,false)
  }
  onMounted(() => startParallax())

  return {
    startParallax,
    setParallax,
    resetParallax
  }
}

export default useParallax
