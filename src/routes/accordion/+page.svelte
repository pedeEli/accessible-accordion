<script lang="ts">
  import Accordion from '$lib/Accordion.svelte'
  import Panel from '$lib/Panel.svelte'
</script>

<h1>Accordion</h1>
<Accordion>
  <Panel buttonId="lorem1-button" panelId="lorem1-panel" name="lorem1">
    <svelte:fragment slot="title">toggle lorem1</svelte:fragment>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sed magni ad assumenda iure explicabo exercitationem blanditiis iusto, aut magnam, fugiat, libero vitae commodi qui modi dolor optio natus ab?
  </Panel>
  <Panel buttonId="lorem2-button" panelId="lorem2-panel" name="lorem2">
    <svelte:fragment slot="title">toggle lorem2</svelte:fragment>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, facilis.
  </Panel>
</Accordion>