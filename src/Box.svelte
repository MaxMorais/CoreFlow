<script>
	import { createEventDispatcher } from 'svelte';
	import {activeNode} from './stores.js';
	
	export let node;

	let isActive = false;
	
	const dispatch = createEventDispatcher();

	$: isActive = $activeNode === node;
	
	function handleClick(e){
		dispatch('click', node);
	}
</script>

<div class="box" class:active={isActive} title={node.title} on:click={handleClick}>
	<div class={node.type}>
		{#if node.icon}
		<i class="ti ti-{node.icon}" />
		{/if}
	</div>
	{#if node.title && !['new', 'new-action', 'new-decision'].includes(node.type)}
	<small class="{node.type}-title">{node.title}</small>
	{/if}
	{#if node.type === 'decision'}
	<i class="ti ti-question-mark" />
	{/if}
</div>

<style>
i {
		font-size: 39px;
	  color: #bbb;
}
	
.box {
	display: flex;
	margin-top: 20px !important;
	margin-bottom: 20px !important;
	min-height: 60px;
	cursor: pointer;
	user-select: none;
}
	
.box i.ti.ti-question-mark {
    position: absolute;
    margin-top: 10px;
	  color: green;
}
	
i.ti.ti-circle-plus {
	font-size: 24px;
	color: blue;
}
	
.action, .action-new {
	width: 40px;
	height: 40px;
	background-color: #eee;
	padding: 5px;
	border-radius: 5px;
	border: 1px solid #ddd;
}

.active .action, .active .action-new {
	border: 1px solid;
}

.active .action i {
	color: pink;	
}
	
.decision, .new-decision {
	width: 28px;
	height: 28px;
	transform: rotate(45deg);
	background-color: lightgreen;
	padding: 5px;
	margin-top: 12px !important;
}

.new-action {
	padding-top: 9.5px;
}
	
.new-decision i {
	color: green;
	position: absolute;
	top: -2px;
	left: 0px;
}
	
.decision::before {
	content: "Yes";
	position: absolute;
	transform: rotate(-45deg) !important;
	top: -15px;
	left: -20px;
	font-size: 10px;
}
	
.decision::after {
	content: "No";
	position: absolute;
	transform: rotate(-45deg) !important;
	left: 40px;
	top: 40px;
	font-size: 10px;
}

.action-title {
  position: absolute;
  width: 40px;
	font-size: 10px;
	margin-top: 55px;
}
</style>