import { request } from 'umi';

/**
 * 公共请求的GET方法
 * @param url 请求地址
 * @param params 传入的参数
 * @param props request配置
 * @returns
 */
export async function requestInstanceGET<T extends object>(
  url: string,
  params?: T,
  props?: RequestInit & any,
) {
  return request(url, {
    method: 'GET',
    params,
    ...props,
  });
}

/**
 * 公共请求POST方法
 * @param url 请求地址
 * @param data post方法参数
 * @param props requst请求配置
 * @returns
 */
export async function requestInstancePOST<T extends object>(
  url: string,
  data?: T,
  props?: RequestInit & any,
) {
  return request(url, {
    method: 'POST',
    data,
    ...props,
  });
}
