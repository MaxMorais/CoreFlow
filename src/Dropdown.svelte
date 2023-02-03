<script>
	import {createEventDispatcher} from 'svelte';
	
	export let options = [];
	export let selectedOption;
	
	const dispatch = createEventDispatcher();
	
	function handleChange({target}){
		dispatch('dropdown-change', target.value);
	}
	
</script>

<select value={selectedOption}>
	{#each options as option}
	<option value={option} selected={selectedOption === option}>{option}</option>
	{/each}
</select>