import { history } from "umi";
import { getProfile } from './service/login';

export async function getInitialState() {
  const profile = await getProfile().then(res=>res.data);
  if(!profile){
    history.push('/login');
    return null
  }else{
    return {profile}
  }
}
