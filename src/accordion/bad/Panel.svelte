<script lang="ts">
  import {smoothCollapse} from '$lib/action'
  
  export let name: string
  export let buttonId = `${name}-button`
  export let panelId = `${name}-panel`

  let open = false
</script>

<div class="panel" data-panel-open={open} id={name}>
  <button id={buttonId}
          aria-controls={panelId}
          aria-expanded={open}
          on:click={() => open = !open}>
    <slot {open} name="title"/>
  </button>
  <section id={panelId}
           aria-labelledby={buttonId}
           use:smoothCollapse={{open}}
           hidden={true}>
    <div>
      <slot/>
    </div>
  </section>
</div>