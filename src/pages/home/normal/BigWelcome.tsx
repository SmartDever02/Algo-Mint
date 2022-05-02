import WelcomeItem from '../../../components/home/welcome';
import back from '../../../images/home/bigWelcome/back.png';
import overLeft from '../../../images/home/bigWelcome/overLeft.png';
import overRight from '../../../images/home/bigWelcome/overRight.png';

const BigWelcome = () => {
  return (
    <div className='p-[8%] relative my-[10vw] md:mt-[40vw] lg:mt-[42vw]'>
      <div className='relative'>
        <img
          src={back}
          alt=''
          className='block h-[125vw] sm:h-[116vw] md:h-[91vw]'
        />
        <img
          src={overLeft}
          alt=''
          className='absolute mix-blend-soft-light h-[121vw] sm:h-[112.5vw] md:h-[86vw] top-[2vw] scale-x-[0.92] scale-y-[0.92]'
        />
        <img
          src={overRight}
          alt=''
          className='absolute h-[121vw] sm:h-[112.5vw] md:h-[86vw] top-[2vw] scale-x-[0.92] scale-y-[0.92] mix-blend-color-dodge'
        />
      </div>
      <div className='absolute top-[8%] w-[82%] pt-[5%]'>
        <WelcomeItem dir='ltr' />
        <WelcomeItem dir='rtl' />
        <WelcomeItem dir='ltr' />
      </div>
    </div>
  );
};
export default BigWelcome;
