import React from 'react';
import logo from '../assets/logo.png';
import avatar from '../assets/image-avatar.jpg';
import sun from '../assets/icon-sun.svg';

const Navbar = () => {
  return (
    <div className=''>
      <div className='fixed flex flex-col h-[100%] mx-auto rounded-e-3xl w-18 bg-slate-600'>
        <div>
          <img src={logo} />
        </div>
        <div className='absolute flex flex-col items-center justify-center gap-4 bottom-3'>
          <div className='items'>
            <img src={sun} />
          </div>
          <div className='relative block w-24 h-[1.5px] bg-slate-400'></div>
          <div>
            <img src={avatar} className='w-12 h-12 rounded-full' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;