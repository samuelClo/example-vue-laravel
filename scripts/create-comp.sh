#!/bin/bash
roots_path=$HOME/Documents/work/projet-final/final-sneaker-x-2020
file_name=$1
type_comp=""

if [ ! "$file_name" ]; then
    echo "❌  - [error] Must specify at least one argument"
    exit 1
fi

firstCharacter=${file_name:0:1}

if [ "$firstCharacter" = "S" ]; then
    type_comp="structural"
elif [ "$firstCharacter" = "U" ]; then
    type_comp="unit"
else
    echo "❌  - [error] argument must be S or U for structural or unit component"
    exit 1
fi

cd $roots_path

directory_path="resources/vue/components/$type_comp/$file_name"

mkdir "$directory_path"


echo "<template>

</template>

<script>
    export default {
        data: function () {
            return {

            }
        },
        methods: {}
    }
</script>

<style  lang=\"scss\" scoped>
    @import \"$file_name\";
</style>" > "$directory_path"/"$file_name".vue

touch "$directory_path"/"$file_name".scss

echo "export { default as $file_name } from './$file_name/$file_name'" >> "resources/vue/components/$type_comp/index.js"

