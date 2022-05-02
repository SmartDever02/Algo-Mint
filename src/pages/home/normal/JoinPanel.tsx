import ShiningPanel from '../../../components/home/ShiningPanel';
import getD from '../../../helpers/getD';
import getPoints from '../../../helpers/getPoints';
import joinBorder from '../../../images/home/joinBorder.svg';
const Join = ({ width }: any) => {
  const T = [
    { x: 10, y: 10 },
    { x: 10, y: width * 0.296 },
    { x: width * 0.316, y: width * 0.296 },
    { x: width * 0.375, y: width * 0.33 },
    { x: width * 0.93875, y: width * 0.33 },
    { x: width - 5, y: width * 0.276 },
    { x: width - 5, y: 10 },
    { x: 0, y: 10 },
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
    <div className='relative mt-[68vw] sm:mt-[25vw] mb-[5vw] sm:mb-[6vw] md:-[7vw]'>
      <div className='absolute right-0' style={{ width: width }}>
        <svg
          width={width}
          height={width * 0.35}
          style={{ mixBlendMode: 'saturation', opacity: 0.4 }}
          className='absolute top-0'
        >
          <path d={d} fill='white' />
        </svg>
        <svg
          width={width}
          height={width * 0.35}
          style={{
            mixBlendMode: 'soft-light',
            opacity: 1,
          }}
          className='absolute top-0 scale-x-[0.97] scale-y-[0.92]'
        >
          <path d={d} fill='white' />
        </svg>
        <svg width={width} height={width * 0.35} className='absolute top-0'>
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
      </div>

      <div className='relative ml-[15vw]'>
        <div className='pl-[1.6vw] mt-[1vw] relative'>
          <ShiningPanel
            width={window.innerWidth * 0.24}
            ratio={0.88}
            mode='MD_LAST'
          />
        </div>
        <div className='absolute w-[25.1vw] h-[21.2vw] top-[2.8vw] left-[1.4vw]'>
          <div className='bg-white mix-blend-overlay w-full h-full' />
        </div>
        <div className='absolute w-[26vw] h-[22vw] top-[2.3vw] left-[1vw]'>
          <div className='bg-white mix-blend-overlay w-full h-full' />
        </div>
        <div className='font-bold text-[3.6vw] leading-[4.4vw] w-[27vw] h-[26vw] text-white text-center flex items-center'>
          JOIN THE COMUNITY TODAY ON DISCORD
        </div>
      </div>
    </div>
  );
};

export default Join;
