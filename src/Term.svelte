<script>
	import Atom from './Atom.svelte';
	import TermList from './TermList.svelte';
	
	export let term = [];
	export let parent = [];
	export let index = 0;
	
</script>

{#if term.type === 'check'}
<Atom {term} {parent} {index} />
{:else}
<TermList {term} {parent} {index} />
{/if}