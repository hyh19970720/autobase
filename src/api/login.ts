import { $get, $post } from "../utils/request";

interface loginForm {
    username: string;
    password: string;
}
// 登录
export const login = (data: loginForm) => $post(`/login`, data);

// 注册
export const register = (data: loginForm) => $post(`/register`, data);
