<template>
    <router-link :to="{ name: href, params }">
        <slot></slot>
    </router-link>
</template>

<script>
    export default {
        props: {
            href: {
                type: String,
                required: true
            },
            params: {
                type: Object,
                required: false
            }
        },
    }
</script>

<style lang="scss" scoped>
    @use "ULink";
</style>
