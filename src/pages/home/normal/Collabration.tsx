import PartnerCarousel from '../../../components/home/PartnerCarousel';

const Collabration = () => {
  return (
    <div className='relative'>
      <div className='w-full h-[25vw] bg-[#333333] mix-blend-overlay px-[15%]'>
        <div className='w-full h-full overBack'></div>
      </div>
      <div className='overView absolute top-[1.8vw] w-full h-full z-10 mix-blend-normal'>
        <div
          className='w-full flex justify-center text-white font-bold text-[3.333vw]'
          style={{ textShadow: '0px 11px 4px rgba(0, 0, 0, 0.85)' }}
        >
          COLLABRATION {'&'} PARTNERS
        </div>
      </div>
      <PartnerCarousel />
    </div>
  );
};

export default Collabration;
