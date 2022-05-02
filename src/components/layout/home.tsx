import Footer from '../home/Footer';
import Navbar from '../home/Navbar';

import background from '../../images/home/background.svg';

const HomeLayout = (props: propData) => {
  console.log('layout width', props.width);
  return (
    <div
      className='min-h-[100vh] relative overflow-x-hidden'
      style={{ background }}
    >
      <div className='absolute top-0'>
        <Navbar width={props.width} />
        <div className='pt-[20px] pb-[82px]'>{props.children}</div>
        <Footer width={props.width} />
      </div>
    </div>
  );
};

interface propData {
  children: any;
  width: number;
}

export default HomeLayout;
