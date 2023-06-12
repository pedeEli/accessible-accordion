<script lang="ts">
  import {page} from '$app/stores'
  import {goto} from '$app/navigation'
  
  export let buttonId: string
  export let panelId: string
  export let name = buttonId

  let ref: HTMLDivElement

  const handleKey = () => {
    const sibling = ref.nextElementSibling
    if (!sibling) {
      return
    }
    const button = sibling.querySelector('button[name="toggle"]')
    if (button instanceof HTMLButtonElement) {
      button.focus()
    }
  }
</script>

<div data-panel={name} bind:this={ref}>
  <button id={buttonId}
          aria-controls={panelId}
          name="toggle"
          value={name}
          on:click|preventDefault={() => {
            const newUrl = new URL($page.url)
            if (newUrl.searchParams.has(name)) {
              newUrl.searchParams.delete(name)
            } else {
              newUrl.searchParams.set(name, '')
            }
            goto(newUrl, {replaceState: true})
          }}
          on:keydown={handleKey}>
    <slot name="title"/>
  </button>
  <section id={panelId}
           aria-labelledby={buttonId}
           hidden={!$page.url.searchParams.has(name)}>
    <slot/>
  </section>
</div>