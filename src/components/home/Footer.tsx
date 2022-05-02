import getD from '../../helpers/getD';

//import social images
import discord from '../../images/home/footer/discord.svg';
import twitter from '../../images/home/footer/twitter.svg';
import facebook from '../../images/home/footer/facebook.svg';

const Footer = ({ width }: any) => {
  // const width = window.innerWidth;
  // const height = window.innerWidth * 0.0423;

  const T = [
    { x: 0, y: 0 },
    { x: (width * 0.24).toFixed(3), y: 0 },
    { x: (width * 0.278).toFixed(3), y: width * 0.0423 * 0.5 },
    { x: width, y: width * 0.0423 * 0.5 },
    { x: width, y: width * 0.0423 },
    { x: 0, y: width * 0.0423 },
  ];
  var d = getD(T);

  const socials = [discord, twitter, facebook];
  return (
    <div className='fixed bottom-0'>
      <div className='relative w-[100vw] h-full'>
        <svg width={width} height={width * 0.0423}>
          <defs>
            <radialGradient
              id='grad2'
              cx='50%'
              cy='50%'
              fx='50%'
              fy='50%'
              r='40%'
            >
              <stop
                offset='0%'
                style={{ stopColor: '#FFFBCC', stopOpacity: 0 }}
              />
              <stop offset='12%' style={{ stopColor: '#FAF1BA' }} />
              <stop offset='34%' style={{ stopColor: '#EFD98E' }} />
              <stop offset='37%' style={{ stopColor: '#EED688' }} />
              <stop offset='69%' style={{ stopColor: '#EBBB10' }} />
              <stop
                offset='100%'
                style={{ stopColor: 'rgb(195, 146, 46)' }}
                stopOpacity='0.79'
              />
            </radialGradient>
          </defs>
          <path d={d} fill='url(#grad2)' />
        </svg>
        <div className='absolute top-0 left-0 w-[24%] h-full flex justify-center items-center gap-[50px]'>
          {socials.map((social, index) => {
            return (
              <img
                key={index}
                src={social}
                alt=''
                className={
                  index === socials.length - 1 ? 'w-[4.5%]  ' : 'w-[8.79%]'
                }
              />
            );
          })}
        </div>
        <div className='absolute top-[50%] w-full h-[50%] flex'>
          <div className='w-full flex justify-center items-center text-[#041733] leading-[30px] text-[18px] font-bold'>
            COPYRIGHT {new Date().getFullYear()} ANTITY, LLC
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
