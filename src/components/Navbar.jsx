import React from 'react';
import logo from '../assets/logo.png';
import avatar from '../assets/image-avatar.jpg';
import sun from '../assets/icon-sun.svg';

const Navbar = () => {
  return (
    <div>
 <div className='hidden md:block'>
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




      {/* Mobile View */}\

      <div className='flex justify-between md:hidden md:rounded-e-3xl md:bg-slate-600'>
        <div className='md:mt-8 md:mb-auto md:text-center'>
          <img src={logo} alt="Logo" />
        </div>
        <div className='justify-between md:absolute md:flex md:flex-col md:items-center md:justify-center md:gap-4 md:bottom-3'>
          <div className='md:items'>
            <img src={sun} alt="Sun Icon" />
          </div>
          {/* <div className='md:relative md:block md:w-4 md:h-[1.5px] md:bg-slate-400'></div> */}
          <div>
            <img src={avatar} alt="Avatar" className='md:w-2 md:h-12 md:rounded-full' />
          </div>
        </div> 
      </div>
      </div>
  )
}

export default Navbar;

{/* <div className='flex md:hidden'>
<div className='m'>
  <img src={logo} alt="Logo" />
</div>
<div className=''>
  <div className='md:items'>
    <img src={sun} alt="Sun Icon" />
  </div>
  <div className=''></div>
  <div>
    <img src={avatar} alt="Avatar" className='' />
  </div>
</div>
</div> */}