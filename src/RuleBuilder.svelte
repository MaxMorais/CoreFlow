<script>
	import {createEventDispatcher} from 'svelte';
	
	import Term from './Term.svelte';
	
	export let node;
	export let fields;
	
	const dispatch = createEventDispatcher(),
				handleNodeChange = e => {
					node = [...node];
					dispatch('change', node);
				}
	
</script>

<Term bind:node {fields} on:change={handleNodeChange} />

<svelte:head>
<style>
h3 {
    color: #303030;
    font-family: Courier, serif;
}

.rule-rule {
    color: #505050;
    font-size: 13px;
    font-family: Verdana, sans-serif;
}

.rule-rule input,
.rule-rule select {
    color: #303030;
    font-size: 13px;
    font-family: Verdana, sans-serif;
}

.rule-rule input,
.rule-rule select {
		padding: 0px 5px;
		margin-bottom: 0px;
    box-sizing: border-box;
    height: 22px;
    max-height: 22px;
}

.rule-atom {
    margin-top: 5px;
}

.rule-list .rule-list {
    margin-top: 5px;
}

.rule-list,
.rule-atom {
    padding: 5px;
    border-radius: 3px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    background: hsl(0, 0%, 97%);
}

.rule-list .rule-list,
.rule-list .rule-atom {
    background: hsl(0, 0%, 95%);
}

.rule-list .rule-list .rule-list,
.rule-list .rule-list .rule-atom {
    background: hsl(0, 0%, 92%);
}

.rule-list .rule-list .rule-list .rule-list,
.rule-list .rule-list .rule-list .rule-atom {
    background: hsl(0, 0%, 89%);
}

.rule-operands {
    margin: 5px 5px 5px 15px;
}

.rule-buttons button {
    cursor: pointer;
		margin-bottom: 0px;
}

.rule-buttons button:not(:hover),
.rule-buttons button[disabled] {
    opacity: 0.50;
}

.rule-buttons {
    visibility: hidden;
}
	
.rule-atom:hover .rule-buttons,
.rule-group:hover .rule-buttons {
    visibility: visible;
}
</style>
</svelte:head>