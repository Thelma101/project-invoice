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
      <div className='gap-8'>
        <div className>
          <img src={sun} />
        </div>
        <div>
          <img src={avatar} />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Navbar