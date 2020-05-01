<template>
    <button @click="handleClick" id="wrapper">
        {{ content }}
    </button>
</template>

<script>
export default {
    props: {
        content: {
            required: true
        }
    },
    methods: {
        handleClick() {
            this.$emit("onClick");
        }
    }
};
</script>

<style lang="scss" scoped>
@import "UButton";
</style>
