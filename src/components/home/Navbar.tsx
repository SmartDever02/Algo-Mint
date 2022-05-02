import { useEffect, useState } from 'react';
import logo from '../../images/home/navbar/logo.svg';
import line from '../../images/home/navbar/menuLine.svg';
import connectWallet from '../../images/home/navbar/connectWallet.svg';
import getD from '../../helpers/getD';

import menuNames from '../../helpers/getMenuNames';

const Navbar = ({ width }: any) => {
  const T = [
    { x: 0, y: 0 },
    { x: 0, y: width * 0.0911 },
    { x: width * 0.305, y: width * 0.0911 },
    { x: width * 0.325, y: width * 0.0911 * 0.5 },
    { x: width * 0.885, y: width * 0.0911 * 0.5 },
    { x: width * 0.895, y: width * 0.0911 * 0.75 },
    { x: width, y: width * 0.0911 * 0.75 },
    { x: width, y: 0 },
  ];

  var d = getD(T);

  return (
    <div className='z-100 relative'>
      <div
        className='w-full linearBlueFamliy absolute top-0 opacity-50'
        style={{ height: width * 0.0911 }}
      />
      <svg width={width} height={width * 0.0911} className='absolute top-0'>
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
      <div style={{ height: width * 0.0911 }}>
        <img
          src={logo}
          alt='logo'
          className='absolute left-[13.6%] top-[20%] w-[8.585%] h-[60.46%]'
        />
        <img
          src={line}
          alt=''
          className='absolute block w-[4.138%] h-[36.57%] top-[17.142%] right-[3.125%] hover:drop-shadow-lg'
        />

        <div className='absolute top-[5%] w-[40%] h-[40%] left-[30%] cursor-pointer hover:drop-shadow-lg'>
          <div className='relative w-full h-full flex justify-center'>
            <img src={connectWallet} alt='' />
            <span className='hover:animate-pulse absolute font-bold text-white xl:text-[1.625vw]'>
              ...CONNECT WALLET...
            </span>
          </div>
        </div>

        {window.innerWidth > 768 && (
          <div className='menu absolute top-[50%] h-[50%] left-[35%] w-[52%] flex justify-around items-center'>
            {menuNames.map((name, index) => {
              return (
                <span key={index} className='text-white font-bold text-[1.5vw]'>
                  {name}
                </span>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
