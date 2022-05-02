import algoBack1 from '../../../images/home/algoLeague/back1.svg';
import algoBack2 from '../../../images/home/algoLeague/back2.svg';
import algoBack3 from '../../../images/home/algoLeague/back3.svg';
import Acoin from '../../../images/home/alc/algoCoin.svg';

const AlgoBack = () => {
  return (
    <div className='w-[100vw] mb-[7vw] xl:mb-[18.75vw] relative'>
      <img
        src={algoBack1}
        alt=''
        className='h-[37.5vw]  bg-blend-color-dodge mix-blend-color-dodge'
      />
      <img
        src={algoBack2}
        alt=''
        className='absolute top-0 h-[37.5vw] ml-[8vw] bg-blend-color-dodge mix-blend-color-dodge'
      />
      <img
        src={algoBack3}
        alt=''
        className='absolute top-0 h-[37.5vw] ml-[14vw] bg-blend-color-dodge mix-blend-color-dodge'
      />
      <img
        src={Acoin}
        alt=''
        className='w-[37.5vw] absolute top-0 left-[31.5vw] opacity-20'
      />
      {/* width: 37.5vw; position: absolute; top: 0px; left: 31.5vw; */}
    </div>
  );
};

export default AlgoBack;
