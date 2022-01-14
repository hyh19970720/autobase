import axios, { AxiosRequestConfig } from "axios";

/**
 * @description get请求
 * @param url
 * @param params
 * @param config
 * @returns
 */
export const $get = (url: string, params?: any, config?: AxiosRequestConfig<any> | undefined) => {
    return axios.get(url, { params, ...config }).then(({ data }) => data);
};

/**
 * @description post请求
 * @param url
 * @param data
 * @param config
 * @returns
 */
export const $post = (url: string, data?: any, config?: AxiosRequestConfig<any> | undefined) => {
    return axios.post(url, data, { ...config }).then(({ data }) => data);
};
