<template>
    <svg :class="iconClass" aria-hidden="true">
        <use :xlink:href="iconName" />
    </svg>
</template>

<script setup lang="ts">
import { computed } from "@vue/reactivity";

const props = defineProps({
    svgName: {
        type: String,
        required: true,
    },
    svgClass: {
        type: String,
    },
});
const iconName = computed(() => `#icon-${props.svgName}`);
const iconClass = computed(() => `icon svg-icon ${props.svgClass || ""}`);
</script>

<style lang="scss" scoped>
.svg-icon {
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
</style>
