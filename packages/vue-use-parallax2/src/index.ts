/**
 *
 * vue hooks for parallax
 * @param {HTMLElement} el An area container that the mouse moves
 * @param {(Array<[] | HTMLElement>)} Scrolling elements
 */

// import { onUnmounted } from '@vue/composition-api'

type tupleChildren = [HTMLElement, number]
type TypeChildren = Array<tupleChildren | HTMLElement>

const useParallax = (el: HTMLElement, children: Array<TypeChildren> = []) => {
  const queue: Array<TypeChildren> = [...children]

  const parallx = (elem: HTMLElement, x: number, y: number, offset: number = 10) => {
    elem && (elem.style.transform = `translate(${x * offset / 0.5}px, ${ y * offset / 0.5}px)`);
  }

  const publish = (offsetX: number, offsetY: number) => {
    queue.forEach((children: any[] | HTMLElement) => {
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
    const offsetX: number = e.clientX / el.clientWidth
    const offsetY: number = e.clientY / el.clientHeight
    requestAnimationFrame(() => publish(offsetX, offsetY))
  }

  // remove eventListener
  const resetParallax = () => el && el.removeEventListener('mousemove', scrollParallax, false)
  // onUnmounted(resetParallax)
  
  // mousemove
  const startParallax = () => {
    resetParallax()
    el && el.addEventListener('mousemove', scrollParallax,false)
  }
  startParallax()

  return {
    startParallax,
    setParallax,
    resetParallax
  }
}

export default useParallax
