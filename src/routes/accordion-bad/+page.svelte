<script lang="ts">
  import Accordion from 'accordion-bad/Accordion.svelte'
  import Panel from 'accordion-bad/Panel.svelte'

  import panels from '$lib/panels'
</script>

<h1 class="text-4xl">Bad Accordion</h1>
<div class="p-2"/>
<Accordion>
  {#each panels as {title, content} (title)}
    <Panel name={title}>
      <svelte:fragment let:open slot="title">
        <div class="flex">
          <div>{title}</div>
          <div class="ml-auto">{open ? 'Hide' : 'Reveal'}</div>
        </div>
      </svelte:fragment>
      {content}
    </Panel>
  {/each}
</Accordion>