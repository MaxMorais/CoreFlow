<script>
	import Dropdown from './Dropdown.svelte';
	import Buttons from './Buttons.svelte';
	import {BASE_OPERATORS} from './stores.js';
	import Term from './Term.svelte';
	
	export let term;
	export let parent;
	export let index;
	
	let operator = term[0],
			terms = term[1],
			options = ['', ...$BASE_OPERATORS];
	
	function setField({detail}){
		if ($BASE_OPERATORS.includes(detail)){
			if (operator == 'check') term = [value, ''];
			else {
				term[0] = value;
				term = [...term];
			}
		}
	}
	
</script>

<div class='rule-list rule-rule'>
	<div class='rule-group'>
		<Dropdown {options} selectedOption={operator} on:dropdown-change={setField} />
		<Buttons {term} {parent} {index} />
	</div>
	<div class='rule-operands'>
		{#each terms as operandTerm, i}
		<Term term={operandTerm} parent={term} index={i} />
		{/each}
	</div>
</div>