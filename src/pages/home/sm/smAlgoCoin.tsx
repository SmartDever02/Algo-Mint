import algoCoin from '../../../images/home/alc/algoCoin.svg';

const SmAlgo = () => {
  return (
    <div className='w-5/6 mx-auto radialBorder'>
      <div className='p-[15px]'>
        <div className='bg-white'>
          <div className='smAlcoBack'>
            <img
              src={algoCoin}
              alt='algoCoin'
              className='w-[28.725%] mx-auto'
            />
          </div>
          <div className='py-[15px] px-[30px] font-bold top-[0.8vw] flex items-center justify-center text-center'>
            $ALC is our ecosystem utility token which players can earn through
            both PvE and PvP game modes, as well through staking. The token can
            be traded through a traditional CEX/DEX and on Aurory's in-game
            marketplace. In the future, it will act as the governance token of
            Aurory, allowing holders to vote on important game-development
            decisions.
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmAlgo;
