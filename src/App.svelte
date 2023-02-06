<script>
	import {activeNode, FLOWCHART} from './stores.js';
	import Tree from './Tree.svelte';
	import RuleBuilder from './RuleBuilder.svelte';
	
	let node = $FLOWCHART;
	$activeNode = node;
	
	let fields = {
		Did: {
			visit: [
				{value: '*', label: '(any action)'}, 
				{value: '/store', label: '/store'}
			]
		},
		'Last Name': {
			is: 'text',
			'begins with': 'text'
		},
		Updated: {
			at: 'date',
			'at or before': 'date',
			'at or after': 'date',
			'at some time': null
		},
		Country: {
			'is': [
				{value: 'BR', label: 'Brazil'}, 
				{value: 'CA', label: 'Canada'}, 
				{value: 'US', label: 'United States'}
			]
		}
	},
	ruleNode = ['check'],
	updated;
	
	const handleChange = ({detail}) => {
		updated = detail;
	}

</script>

<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/iconfont/tabler-icons.min.css">
</svelte:head>

<main>
	<Tree {node} isRoot></Tree>

	<RuleBuilder bind:node={ruleNode} {fields} on:change={handleChange} />

	{#if updated}
	<pre>
	{JSON.stringify(updated, null, 2)}
	</pre>
	{/if}
</main>

<style>
main {
  display:flex;
  flex-wrap:wrap;
  font-family: Arial;
}
</style>