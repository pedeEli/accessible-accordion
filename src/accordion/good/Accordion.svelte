<script lang="ts">
  import type {HTMLFormAttributes} from 'svelte/elements'
  import type {AccordionContext} from './types'
  
  import {setContext} from 'svelte'
  import {enhance} from '$app/forms'

  import {contextKey} from './keys'
  
  export let action: HTMLFormAttributes['action'] = undefined

  let ref: HTMLFormElement
  setContext<AccordionContext>(contextKey, {
    next: name => {
      const button = (ref.children.namedItem(name)?.nextElementSibling ?? ref.firstElementChild)?.
        children.namedItem('toggle')
      if (button instanceof HTMLButtonElement) {
        button.focus()
      }
    },
    previous: name => {
      const button = (ref.children.namedItem(name)?.previousElementSibling ?? ref.lastElementChild)?.
        children.namedItem('toggle')
      if (button instanceof HTMLButtonElement) {
        button.focus()
      }
    },
    first: () => {
      const button = ref.firstElementChild?.children.namedItem('toggle')
      if (button instanceof HTMLButtonElement) {
        button.focus()
      }
    },
    last: () => {
      const button = ref.lastElementChild?.children.namedItem('toggle')
      if (button instanceof HTMLButtonElement) {
        button.focus()
      }
    }
  })
</script>

<form bind:this={ref} class="accordion" {action} method="POST" use:enhance>
  <slot/>
</form>