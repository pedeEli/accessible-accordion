<script lang="ts">
  import '../app.css'
</script>

<div class="grid justify-center">
  <nav class="grid grid-cols-3 w-fit border-b-2">
    <a href="/">Home</a>
    <a href="/accordion-good">Good</a>
    <a href="/accordion-bad">Bad</a>
  </nav>
</div>

<main class="m-10 max-w-4xl mx-auto">
  <slot/>
</main>

<style lang="postcss">
  a {
    @apply border-l-2 p-4 text-center;
  }
  a:last-child {
    @apply border-r-2;
  }
</style>