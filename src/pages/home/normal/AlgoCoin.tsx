import getD from '../../../helpers/getD';
import getPoints from '../../../helpers/getPoints';
import algoCoin from '../../../images/home/alc/algoCoin.svg';

const NormalAlgo = ({ width }: any) => {
  // <path d='M0 0 L0 50 L200 50 L220 75 L1180 75 L1200 50 L1200 0 Z' />;
  const T = [
    { x: 10, y: 0 },
    { x: 10, y: width * 0.296 },
    { x: width * 0.386, y: width * 0.296 },
    { x: width * 0.446, y: width * 0.32 },
    { x: width * 0.93875, y: width * 0.32 },
    { x: width - 10, y: width * 0.266 },
    { x: width - 10, y: 10 },
    { x: 10, y: 10 },
  ];

  const linear = [
    {
      color: '#FFE6B1',
      at: 0,
    },
    {
      color: '#FFF1CC',
      at: 6,
    },
    {
      color: '#FCF8DD',
      at: 12,
    },
    {
      color: '#F6EAC2',
      at: 15,
    },
    {
      color: '#EBD498',
      at: 18,
    },
    {
      color: '#DDB65D',
      at: 22,
    },
    {
      color: '#D09B27',
      at: 25,
    },
    {
      color: '#D19D28',
      at: 30,
    },
    {
      color: '#D4A52E',
      at: 33,
    },
    {
      color: '#DBB438',
      at: 35,
    },
    {
      color: '#E4C846',
      at: 38,
    },
    {
      color: '#797563',
      at: 65,
    },
    {
      color: '#6F7D64',
      at: 70,
    },
    {
      color: '#216771',
      at: 79,
    },
    {
      color: '#0E5D75',
      at: 82,
    },
    {
      color: '#035777',
      at: 84,
    },
    {
      color: '#015779',
      at: 87,
    },
    {
      color: '#3685B5',
      at: 90,
    },
    {
      color: '#9AC6E9',
      at: 96,
    },
    {
      color: '#ADD0EE',
      at: 98,
    },
    {
      color: '#B8D6F1',
      at: 99,
    },
    {
      color: '#BCD9F2',
      at: 100,
    },
  ];
  var points = getPoints(T);
  var d = getD(T);
  return (
    <div className='flex justify-center mt-[10vw] lg:mt-[20vw]'>
      <div className='w-5/6 relative flex'>
        <div className='left leftBack' />
        <div className='left leftBackOver' />
        <svg
          width={width}
          height={width * 0.365}
          style={{ mixBlendMode: 'soft-light', opacity: 1 }}
          className='absolute top-0'
        >
          <path d={d} fill='white' />
        </svg>
        <svg width={width} height={width * 0.365} className='absolute top-0'>
          <defs>
            <linearGradient id='gradient'>
              {linear.map((one) => {
                return <stop offset={one.at + '%'} stop-color={one.color} />;
              })}
            </linearGradient>
          </defs>
          <polyline
            points={points}
            fill='transparent'
            style={{
              opacity: '0.8',
              // border: 'radial-gradient(red, green, blue)',
              strokeWidth: '20',
              stroke: 'url(#gradient)',
            }}
          />
        </svg>
        <img
          src={algoCoin}
          alt='algoCoin'
          className='absolute left-[4.5vw] w-[28.725%] top-[0.5vw]'
        />

        <div className='absolute left-[31.5625vw]  w-[49.2vw] h-[25.4375vw] top-[0.8vw] flex items-center justify-center'>
          <p className='w-[80%] leading-[2.1vw] text-white font-bold text-[1.5625vw]'>
            $ALC is our ecosystem utility token which players can earn through
            both PvE and PvP game modes, as well through staking. The token can
            be traded through a traditional CEX/DEX and on Aurory's in-game
            marketplace. In the future, it will act as the governance token of
            Aurory, allowing holders to vote on important game-development
            decisions.
          </p>
        </div>
      </div>
    </div>
  );
};
export default NormalAlgo;
