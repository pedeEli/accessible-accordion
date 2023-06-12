<script lang="ts">
  import type {AccordionContext} from './types'
  import type {KeyboardEventHandler} from 'svelte/elements'
  
  import {page} from '$app/stores'
  import {goto} from '$app/navigation'
  import {getContext} from 'svelte'

  import {smoothCollapse} from '$lib/action'
  import {contextKey} from './keys'
  
  export let name: string
  export let buttonId = `${name}-button`
  export let panelId = `${name}-panel`

  const context = getContext<AccordionContext>(contextKey)
  if (!context) {
    throw new Error('Panel has to be in a Accordion')
  }
    
  let ref: HTMLButtonElement
  const handleKey: KeyboardEventHandler<HTMLButtonElement> = event => {
    if (event.key === 'ArrowDown' || event.key === 's') {
      context.next(name)
    } else if (event.key === 'ArrowUp' || event.key === 'w') {
      context.previous(name)
    } else if (event.key === 'Home') {
      context.first()
    } else if (event.key === 'End') {
      context.last()
    }
  }

  $: open = $page.url.searchParams.has(name)
  const initialHidden = !$page.url.searchParams.has(name)
</script>

<div class="panel" data-panel-open={open} id={name}>
  <button id={buttonId}
          aria-controls={panelId}
          name="toggle"
          value={name}
          aria-expanded={$page.url.searchParams.has(name)}
          bind:this={ref}
          on:click|preventDefault={async () => {
            const newUrl = new URL($page.url)
            if (newUrl.searchParams.has(name)) {
              newUrl.searchParams.delete(name)
            } else {
              newUrl.searchParams.set(name, '')
            }
            await goto(newUrl, {replaceState: true})
            console.log('focus')
            ref.focus()
          }}
          on:keydown={handleKey}>
    <slot {open} name="title"/>
  </button>
  <section id={panelId}
           aria-labelledby={buttonId}
           use:smoothCollapse={{open}}
           hidden={initialHidden}>
    <div>
      <slot/>
    </div>
  </section>
</div>