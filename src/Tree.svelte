<script>
	import Box from './Box.svelte';
	import {activeNode} from './stores.js';
	
	export let node = {};
	export let parent= null;
	export let isRoot = false;
	
	function addNewBranch(branch){
		if (node.type) {
			parent = node;
			node = {};
		}
		node.type = 'new';
		node.appendOnBranch = branch;
	}
	
	function addNewAction(){		
		node.type = 'action';
		node.icon = 'square';
		
		parent[node.appendOnBranch] = node;
		delete node.appendOnBranch;
	}
	
	function addNewDecision(){
		node.type = 'decision';
		node.icon = null;
		node.title = null;
		parent.next = node;
		
		parent[node.appendOnBranch] = node;
		delete node.appendOnBranch;
	}
	
	function onNodeClick({detail}){
		$activeNode = detail;
	}
	
</script>

<ul class:tree={isRoot} class:horizontal={isRoot}>
	{#if ["action", "decision", "new"].includes(node.type)}
	<li>
		<Box {node} on:click={onNodeClick}></Box>
		{#if node.type === "action" && node.next}
		<svelte:self node={node.next} parent={node} isRoot={false} />
		{:else if node.type === "new"}
		<ul class="to-new">
			<li>
				<Box node={{type: 'new-action', title: 'New Action', icon: 'square-plus'}} on:click={addNewAction} />
			</li>
			<li>
				<Box node={{type: 'new-decision', title: 'New Decision', icon: 'square-plus'}} on:click={addNewDecision} />
			</li>
		</ul>
		{:else if node.type === "decision"}
		<ul class="to-decision">
			{#if node.branchYes}
			<li>
				<svelte:self node={node.branchYes}  parent={node} isRoot={false} />
			</li>
			{:else}
			<li>
				<svelte:self node={{}} parent={node} isRoot={false} />
			</li>
			{/if}
			{#if node.branchNo}
			<li>
				<svelte:self node={node.branchNo} parent={node} isRoot={false} />
			</li>
			{:else}
			<li>
				<svelte:self node={{}} parent={node} isRoot={false} />
			</li>
			{/if}
		</ul>
		{:else}
			<svelte:self node={{}} parent={node} isRoot={false} />
		{/if}
	</li>
	{:else}
	<li>
		<a href="#addNode" on:click|preventDefault={() => addNewBranch("next")}>
			<i class="ti ti-circle-plus"></i>
		</a>
	</li>
	{/if}
</ul> 

<style>

ul {
	padding: 0px;
}

.to-decision {
	margin-left: -32px !important;
}

.tree {
  margin: 18px;
}

.tree:not(:empty):before, .tree:not(:empty):after,
.tree ul:not(:empty):before, .tree ul:not(:empty):after,
.tree li:not(:empty):before, .tree li:not(:empty):after {
  display: block;
  position: absolute;
  content: "";
	z-index: -1;
}

.tree ul, .tree li {
  position: relative;
  margin: 0;
  padding: 0;
}

.tree li {
  list-style: none;
}

.tree.horizontal li {
  display: flex;
  align-items: center;
  margin-left: 24px;
	min-height: 100px;
}
	
.tree.horizontal li:before {
  border-left: 1px solid #ddd;
  height: 100%;
  width: 0;
  top: 0;
  left: -12px;
}
	
.tree.horizontal li:first-child:before {
  height: 50%;
  top: 50%;
}

	
.tree.horizontal li:last-child:before {
  height: 50%;
  bottom: 50%;
  top: auto;
}
	
.tree.horizontal li:after, .tree.horizontal li ul:after {
  border-top: 1px solid #ddd;
  height: 0;
  width: 20px;
  top: 50%;
  left: -12px;
}

.tree.horizontal li ul.to-new:after {
	width: 12px;
}
	
.tree.horizontal li:only-child:before {
  content: none;
}
	
.tree.horizontal li ul:after {
  left: 0;
}
	
.tree.horizontal > li:only-child {
  margin-left: 0;
}

.tree.horizontal > li:only-child:before, .tree.horizontal > li:only-child:after {
  content: none;
}
</style>