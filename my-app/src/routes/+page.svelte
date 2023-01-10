<script>
    export let data;

</script>


<h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

{#each data.posts as {title, slug} }
    <p>{title}</p>
{/each}

<style>
   
    h1 {
        @apply text-3xl font-bold ;
    }
</style>