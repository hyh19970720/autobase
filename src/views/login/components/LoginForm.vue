<template>
    <div class="LoginForm">
        <div :class="{ loginBox: true, moveRight: moveRight }">
            <div :class="{ login: true, showUp: moveRight }">
                <header>Sign Up</header>
                <input type="text" :placeholder="`${faction} ID & ${faction} Name`" v-model="loginForm.username" />
                <input type="password" :placeholder="`${faction} Password`" v-model="loginForm.password" />
                <p>Forget Your Password ?</p>
                <button @click="toLogin()">SIGN UP</button>
            </div>
            <div :class="{ register: true, showUp: !moveRight }">
                <header>Sign In</header>
                <input type="text" :placeholder="`${faction} Name`" v-model="registerForm.username" />
                <input type="password" placeholder="Password" v-model="registerForm.password" />
                <input type="password" placeholder="Confirm Password" v-model="registerForm.confirmPassword" />
                <button @click="toRegister()">SIGN IN</button>
            </div>
        </div>
        <div :class="{ mask: true, moveLeft: moveRight }">
            <svg-icon v-if="faction === 'Autobot'" svgName="avatar-autobots" @click.right="changeFaction('Decepticon')"></svg-icon>
            <svg-icon v-else svgName="avatar-decepticons" @click.right="changeFaction('Autobot')"></svg-icon>
            <button @click="changeStatus()">{{ moveRight ? "SIGN UP" : "SIGN IN" }}</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";

const moveRight = ref(true);
const faction = ref("Autobot");
const loginForm = ref({
    username: "",
    password: "",
});
const registerForm = ref({
    username: "",
    password: "",
    confirmPassword: "",
});

// 切换登录/注册
function changeStatus() {
    moveRight.value = !moveRight.value;
}
// 切换博派/狂派
function changeFaction(fac: string) {
    faction.value = fac;
}
// 登录
function toLogin() {
    alert("登录");
}
// 注册
function toRegister() {
    alert("注册");
}
</script>

<style lang="scss" scoped>
.LoginForm {
    position: absolute;
    top: calc(50% - 193px);
    left: calc(50% - 345px);
    display: flex;
    width: 690px;
    height: 386px;
    margin: 0 auto;
    background-color: var(--black);
    box-shadow: 0px 0px 100px rgb(0 0 0);
    border-radius: var(--button-radius);
    overflow: hidden;
    .loginBox {
        position: absolute;
        left: 0;
        width: 50%;
        height: 100%;
        transition: left 0.4s ease-in-out;
        &.moveRight {
            left: 50%;
        }
        .login,
        .register {
            position: absolute;
            top: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            height: 100%;
            width: 100%;
            padding: 25px 40px 55px;
            z-index: 1;
            color: var(--white);
            background-color: var(--black);
            transition: z-index 0.4s ease-in-out;
            > header {
                font-size: 30px;
                padding: 10px 0;
                margin-bottom: 20px;
            }
            > input {
                width: 100%;
                padding: 10px 15px;
            }
            > p {
                cursor: pointer;
                color: var(--white);
                &:hover {
                    color: var(--dark-white);
                }
                &:active {
                    transform: scale(0.95);
                    transition: transform 0.1s ease;
                }
            }
        }
        .showUp {
            z-index: 2;
        }
    }
    .mask {
        position: absolute;
        left: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 50%;
        height: 100%;
        transition: left 0.4s ease-in-out;
        background: url("@/assets/images/login/login-bg.jpg") no-repeat;
        background-size: cover;
        background-attachment: fixed;
        z-index: 3;
        &.moveLeft {
            left: 0;
        }
        .svg-icon {
            color: var(--white);
            cursor: pointer;
            &:active {
                transform: scale(0.9);
                transition: transform 0.1s ease;
            }
        }
    }
    button {
        margin-top: 30px;
        padding: 10px 50px;
        border: 1px solid var(--white);
        border-radius: var(--button-radius);
        box-shadow: 0px 0px 100px rgb(0 0 0);
        background-color: transparent;
        color: var(--white);
        font-size: 16px;
        font-weight: 550;
        cursor: pointer;
        &:active {
            transform: scale(0.95);
            transition: transform 0.1s ease;
        }
    }
}
</style>
