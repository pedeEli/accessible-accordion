<script lang="ts">
  import type {HTMLFormAttributes} from 'svelte/elements'
  
  import {enhance} from '$app/forms'
  
  export let action: HTMLFormAttributes['action'] = undefined
</script>

<form {action} method="POST" use:enhance>
  <slot/>
</form>