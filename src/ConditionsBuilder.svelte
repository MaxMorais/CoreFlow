<script>
    import NORMALIZED_TYPE_OPERATORS from './stores.js';

    export let options = {};

    let fields = denormalizeOperators(
            options.variables,
            NORMALIZED_TYPE_OPERATORS),
        data = options.data || {'all': {}};

    function denormalizeOperators(variables, operators){
        return variables.map(variable => {
            variable.operators = operators[variable.type];
        });
    }

</script>