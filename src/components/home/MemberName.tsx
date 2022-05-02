import miniWorld from '../../images/home/partner/miniWorld.svg';

const Name = ({ name, subname }: any) => {
  //TODO TEXT SHADOW text-shadow: 0px 11px 4px rgba(0, 0, 0, 0.85);
  return (
    <div
      style={{ textShadow: '0px 0.57vw 0.21vw rgba(0, 0, 0, 0.85)' }}
      className='relative -ml-[3.5vw] sm:-ml-0 w-full mt-[0.7vw] text-[#C4C4C4] text-[3.275vw] sm:text-[1.875vw] font-bold text-center'
    >
      {name}
      <img
        className='absolute top-[0.5vw] -right-[5vw] sm:right-0 w-[4vw] sm:w-[2vw]'
        alt='mini'
        src={miniWorld}
      />
      <div className='text-[#FF9900] text-[2vw] sm:text-[1.25vw] pl-[4vw] sm:pl-0'>
        {subname}
      </div>
    </div>
  );
};
export default Name;
