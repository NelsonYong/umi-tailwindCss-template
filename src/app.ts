import type { RequestConfig } from 'umi';
import { history } from 'umi';
import type { ResponseError } from 'umi-request';
import { notification } from 'antd';
import { PageLoading } from '@ant-design/pro-layout';

const codeMessage: any = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  405: '请求方法不被允许。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};
/** 获取用户信息比较慢的时候会展示一个 loading */
export const initialStateConfig = {
  //   loading: <PageLoading />,
};

const errorHandler = (error: ResponseError) => {
  const { response } = error;
  if (response && response.status && response.status != 401) {
    const errorText = codeMessage[response.status] || response.statusText;
    const { status, url } = response;

    notification.error({
      message: `请求错误 ${status}: ${url}`,
      description: errorText,
    });
  }
  if (response.status === 401) {
  }
  if (!response) {
    notification.error({
      description: '您的网络发生异常，无法连接服务器',
      message: '网络异常',
    });
  }
  throw error;
};
export const request: RequestConfig = {
  prefix: '/api-bscreen/store',
  // (NODE_ENV === 'production' ? req_basic_url : '') +
  // '/api-bscreen/store',
  requestInterceptors: [
    // (url, options) => {
    //   const token = sessionStorage.getItem('token')
    //     ? `${sessionStorage.getItem('token') || ''}`
    //     : null;
    //   return {
    //     options: {
    //       ...options,
    //       headers: { ...options.headers, Authorization: `Bearer ${token}` },
    //     },
    //   };
    // },
  ],
  responseInterceptors: [
    (response: Response) => {
      if (response.status === 401) {
        history.push('/login');
        window.location.reload();
      }
      return response;
    },
  ],
  errorConfig: {
    adaptor: (resData) => {
      return {
        ...resData,
        success: resData.code === 0,
        errorMessage: resData.msg,
      };
    },
  },
  // errorHandler,
};
