<script>
	import {createEventDispatcher} from 'svelte';
	import {classPrefix, defaultField, baseOperators, listOperators, listText} from './stores';
	
	import Buttons from './Buttons.svelte';
	import Term from './Term.svelte';
	
	export let fields;
	export let node;
	export let parent = null;
	export let index = 0;

	let operator,
		terms,
		options = [$defaultField, ...$listOperators];
	
	if (parent) {
		options = [...options, ...Object.keys(fields).map(key => {
				return {label: key, value: key}
		})];
	}
	
	$: operator = node[0];
	$: terms = Array.isArray(node[1]) ? node[1] : [];

	const dispatch = createEventDispatcher(), 
		valueSetter = value => {
		if($baseOperators.includes(value)) {
			console.log(`AtomList:1`)
      if(node[0] == 'check' || node[1] == '') { node.length = 0; node.push(value); node.push([['check', $defaultField.value]]); }
      else node[0] = value;
    } else {
			console.log(`AtomList:2`)
      if(node[0] != 'check') { node.length = 0; node.push('check'); node.push(value); }
      else node[1] = value;
    }
		console.log(node);
		node = [...node]; 
	},
	handleChange = e => {
		valueSetter(e.target.value);
	},
	handleNodeChange = e => {
		if (e.detail === node) {
			node = [...node];
			dispatch('change', node);
		} else if (e.detail === parent) {
			parent = [...parent];
			dispatch('change', parent)
		}
	};
</script>
<div class='{$classPrefix}list {$classPrefix}rule'>
	<div class='{$classPrefix}group'>
		<select on:change={handleChange} class="{$classPrefix}select" value={operator}>
			{#each options as option}
			<option value={option.value} selected={option.value === operator}>{option.label}</option>
			{/each}
		</select>
		&nbsp;{$listText}
		{#if parent}
		<Buttons bind:node bind:parent index={index} on:change={handleNodeChange} />
		{/if}
		<div class="{$classPrefix}operands">
			{#each terms as operand, i}
				<Term bind:node={operand} bind:parent={node} index={i} {fields} on:change={handleNodeChange} />
			{/each}
		</div>
	</div>
</div>