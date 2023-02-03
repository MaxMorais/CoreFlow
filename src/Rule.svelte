<script>
    import { NORMALIZED_TYPE_OPERATORS } from "./stores";
    
    export let node;
    export let fields = [];
    export let parent;
    export let index;

    let fieldOperators;

    $: fieldOperators = (fields.filter(f => f.name === node.name) || [{'operators': []}])[0].operators;

</script>

<div class="rule">
    <select class="field" bind:value={node.name}>
        {#each fields as field}
        <option value={field.name} selected={field.name === node.name}>{field.label}</option>
        {/each}
    </select>
    <select class="operator" bind:value={node.operator}>
        {#each fieldOperators as operator }
        <option value={operator.name} selected={operator.name === node.operator}>{operator.label}</option> 
        {/each}
    </select>
</div>