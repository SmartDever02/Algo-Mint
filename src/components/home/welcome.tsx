import { dir } from 'console';
import algoCoin from '../../images/home/alc/algoCoin.svg';

const WelcomeItem = (props: any) => {
  const dirCol = {
    ltr: 'order-1 md:order-2',
    rtl: 'order-1',
  };
  const className1 = ' w-full md:w-[30%] flex justify-center';
  const className2 =
    ' w-full md:w-[60%] px-[3vw] px-[8vw] md:px-0 text-center md:px-0 md:text-left';
  return (
    <div className='pt-[3%] md:pt-[5%] px-[4%] w-full text-white'>
      <div className='flex px-[3%] md:px-[9%] xl:px-[14%] justify-between flex-col md:flex-row'>
        <div
          className={
            props.dir === 'ltr'
              ? dirCol.ltr + className1
              : dirCol.rtl + className1
          }
        >
          <img src={algoCoin} alt='' className='w-[15vw] md:w-[20.573vw]' />
        </div>
        <div
          className={
            props.dir === 'ltr'
              ? dirCol.rtl + className2
              : dirCol.ltr + className2
          }
        >
          <div className='uppercase font-bold text-[4.2vw] md:text-[3.7vw]'>
            welcome to the
          </div>
          <div className='text-[1.8vw] md:text-[1.4625vw] leading-[2.317vw]'>
            Join us on epic battle NFT game built on the Algorand Blockchain.
            Where you choose to be a hero or a villain. Players get to play the
            role of any one of the Legends in the making. Where you fight to
            solve the blockworlds finacial crisis and game trilemma. As you
            discover the story that unfoldes.
          </div>
        </div>
      </div>
    </div>
  );
};
export default WelcomeItem;
