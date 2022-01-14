<template>
    <div class="Login">
        <!-- <LoginPie :showLogin="showLogin" /> -->
        <!-- <svg-icon @click="show" svgName="default-avatar" :class="{ show: showLogin }"></svg-icon> -->
        <LoginForm />
    </div>
</template>

<script setup lang="ts">
import { login, register } from "@/api/login";
import LoginForm from "./components/LoginForm.vue";
import { useRouter } from "vue-router";
import { ref } from "@vue/reactivity";

const router = useRouter();

const showLogin = ref(false);

function show() {
    showLogin.value = true;
    console.log("show");
}
</script>

<style lang="scss" scoped>
.Login {
    position: relative;
    height: 100vh;
    background: url("@/assets/images/login/login-bg.jpg") no-repeat;
    background-size: cover;

    .svg-icon {
        position: absolute;
        left: 0;
        top: 0;
        width: calc(100vh * 0.1);
        height: calc(100vh * 0.1);
        color: rgb(23, 60, 94);
        cursor: pointer;
        animation: blink 2s infinite;
    }
}
</style>
