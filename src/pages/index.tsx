import { useModel } from 'umi';
import './index.less';
export default function IndexPage() {
  const props=useModel('@@initialState');
  console.log(props)
  // 做一个全局的provider，存放profile信息，如果没有就跳转到登录页面
  return null
}
