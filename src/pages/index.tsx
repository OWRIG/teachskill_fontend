import styles from './index.less';
import Header from '../components/Header/Header'
import Banner from '../components/Banner/Banner';
export default function IndexPage() {
  return (
    <div className='flex flex-col'>
      <Header />
      <Banner />
    </div>
  );
}
