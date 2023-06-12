import type {ActionReturn} from 'svelte/action'

type SmoothCollapse = {
  open: boolean
}
export const smoothCollapse = (node: HTMLElement, state: SmoothCollapse): ActionReturn<SmoothCollapse> => {
  if (state.open) {
    node.hidden = false
    node.style.height = 'auto'
    const {height} = node.getBoundingClientRect()
    node.style.height = `${height}px`
  } else {
    node.style.height = '0'
    node.hidden = true
  }
  node.style.transition = 'height 300ms ease'

  let current = state.open
  return {
    update: state => {
      if (state.open === current) {
        return
      }
      if (state.open) {
        node.hidden = false
        node.style.height = 'auto'
        const {height} = node.getBoundingClientRect()
        node.style.height = '0'
        node.getBoundingClientRect()
        node.style.height = `${height}px`
      } else {
        node.style.height = '0'
        node.addEventListener('transitionend', () => {
          node.hidden = true
        }, {once: true})
      }
      current = state.open
    }
  }
}