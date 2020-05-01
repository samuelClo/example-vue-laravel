<template>
    <div class="container">
        <header>
            <SNavBar />
        </header>
        <slot></slot>
    </div>
</template>

<script>
import { SNavBar } from "@/components/structural";

export default {
    components: {
        SNavBar
    }
};
</script>
