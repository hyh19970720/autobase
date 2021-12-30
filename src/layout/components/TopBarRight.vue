<template>
    <div class="header-bar-right-part" @mouseover="showPop(true)" @mouseout="showPop(false)">
        <div class="avatar">
            <img v-if="avatar" :src="avatar" />
            <svg-icon v-else svgName="default-avatar"></svg-icon>
        </div>
        <div class="name">{{ userName }}</div>
        <svg-icon svgName="flashing" svgClass="flashing"></svg-icon>
        <Options />
    </div>
</template>

<script setup lang="ts">
import Options from "./TopBarRightOptions.vue";
import { computed, ComputedRef, Ref, ref } from "@vue/reactivity";
import { useStore } from "vuex";

const userInfo = useStore().state.globalStore.userInfo;
const userName: ComputedRef<string> = computed(() => userInfo.userName || "AutoBot");
const avatar: ComputedRef<string> = computed(() => userInfo.avatar);
const popFlag: Ref<boolean> = ref(true);

const showPop = (bool: boolean) => (popFlag.value = bool);
</script>

<style lang="scss" scoped></style>
