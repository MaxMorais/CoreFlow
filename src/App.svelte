<script>
	import {activeNode, FLOWCHART} from './stores.js';
	import Tree from './Tree.svelte';	
	
	let node = $FLOWCHART;
	$activeNode = node;

</script>

<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons@latest/iconfont/tabler-icons.min.css">
</svelte:head>

<main>
	<Tree {node} isRoot></Tree>
</main>

<style>
main {
  display:flex;
  flex-wrap:wrap;
  font-family: Arial;
}
</style>