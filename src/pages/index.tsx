import cn from 'classnames'
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import VideoContent from '@/components/VideoContent/VideoContent';
import { useModel, history } from 'umi';
import s from './index.less';
export default function IndexPage() {
  const { initialState, loading }=useModel('@@initialState');

  if (loading) {
    return <div>loading</div>
  }

  if (!initialState?.profile) {
    history.push('/login');
  }


  // 做一个全局的provider，存放profile信息，如果没有就跳转到登录页面
  return (
    <div className={cn(s.container, 'flex flex-col')}>
      <Header />
      <VideoContent />
      <Footer />
    </div>
  )
}
