<script>
    import {BASE_OPERATORS} from './stores.js';

    export let node;
    export let parent;
    export let index;

    let kind,
        fields;

    if (node.all) kind = 'all';
    else if (node.any) kind = 'any';
    else if (node.none) kind = 'none';

    if (!node[kind]) node[kind] = [];

    fields = node[kind];

    function handleAddRule(e){
        let newField = {name: null, operator: null, value: null};
        fields = [...fields, newField];
    }

    function handleAddCondition(e){
        let newField = {all: [{
                name: null,
                operator: null,
                value: null
            }]};
        fields = [...fields, newField];
    }

    function handleRemove(e){
        fields = fields.filter(f => f !== node);
    }

</script>

{#if kind}
<div class="conditional {kind}">
    <div class="all-any-wrapper">
        When 
        <select class="all-any">
            {#each $BASE_OPERATORS as operator}
            {@const option = operator.toLowerCase()}
            <option value={option} selected={option === kind}>{operator}</option>
            {/each}
        </select>
        of the following conditions:
    </div>
    <a href="#addRule" class="add-rule" on:click|preventDefault={handleAddRule}>Add Condition</a>
    <a href="#addCondition" class="add-condition" on:click|preventDefault={handleAddCondition}>Add Sub Condition</a>
    <a href="#remove" class="remove" on:click|preventDefault={handleRemove}>Remove This Sub Condition</a>

    {#each node[kind] as rule, i}
    <Rule node={rule} parent={node} index={i} />
    {/each}
</div>
{/if}