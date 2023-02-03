<script>
	export let term;
	export let parent;
	export let index;
	
	let btnUpDisabled = index === 0;
	let btnDownDisabled = parent[1].length - 1 === index;
	
	function onBtnRemoveClicked(e){
		parent[1].splice(index, 1);
		if (parent[1].length === 0) parent = [...parent, ['Check']];
		else parent = [...parent];
	}
	
	function onBtnAddClicked(e){
		parent[1].splice(index + 1, 0, ['Check']);
		parent = [...parent];
	}
	
	function onBtnUpClicked(e){
		parent[1][index] = parent[1][index - 1];
		parent[1][index - 1] = term;
		parent = [...parent];
	}
	
	function onBtnDownClicked(e){
		parent[1][index] = parent[1][index + 1];
		parent[1][index + 1] = term;
		parent = [...parent];
	}
</script>

{#if parent}
<button class='btn-remove' on:click={onBtnRemoveClicked} >-</button>
<button class='btn-add' on:click={onBtnAddClicked} >+</button>
<button class='btn-up' on:click={onBtnUpClicked} disabled={btnUpDisabled} >‘</button>
<button class='btn-down' on:click={onBtnDownClicked} disabled={btnDownDisabled} >“</button>
{/if}