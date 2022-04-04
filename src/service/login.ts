import request from '@/utils/request';
import { LoginParams, RegisterParams } from '../constant/login';
import { loginUrl, profileUrl, registerUrl,signOutUrl } from './api';


export function getProfile(){
  return request.get(profileUrl);
}
export function login(params: LoginParams) {
  return request.post(loginUrl,{data:params})
}

export function register(params: RegisterParams) {
  return request.post(registerUrl,{data:params})
}

export function signOut(stu_id: string) {
  return request.post(signOutUrl,{data: stu_id})
}
