<template>
    <ul>
        <li>
            <ULink href="home">
                <UButton content="home" />
            </ULink>
            <ULink href="about">
                <UButton content="about" />
            </ULink>
        </li>
    </ul>
</template>

<script>
import { ULink, UButton } from "@/components/unit";

export default {
    name: "SNavbar",
    components: {
        ULink,
        UButton
    }
};
</script>

<style lang="scss" scoped>
@import "SNavBar";
</style>
