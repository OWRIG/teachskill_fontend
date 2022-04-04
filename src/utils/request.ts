import request, { extend } from 'umi-request';

import { message } from 'antd';
import { RES } from '@/constant/request';

const token = window.localStorage?.token || null

const interceptor = (res: RES)=>{
  console.log('here')
  const { code, message: msg } = res;
  if(code!==200){
    message.error(msg);
  }
}

request.interceptors.response.use(async (response: any)=>{
  const res = await response?.clone().json();
  const { code, message: msg } = res;
  if(code!==200){
    message.error(msg);
  }
  return res;
})


const _request = extend({
  timeout: 30000,
  headers: {
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    'Access-Control-Allow-Origin': '*',
    'Authorization': token
},
 requestInterceptors: [interceptor]
});

export default _request;
