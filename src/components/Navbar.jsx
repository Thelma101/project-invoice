import React, { useContext } from 'react';
import logo from '../assets/logo.png';
import avatar from '../assets/image-avatar.jpg';
import sun from '../assets/icon-sun.svg';
import moon from '../assets/icon-moon.svg';
import { ThemeContext } from './context/ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <div>
      <div className='hidden md:block'>
        <div className='fixed flex flex-col h-[100%] mx-auto rounded-e-3xl w-18 bg-slate-600'>
          <div>
            <img src={logo} />
          </div>
          <div className='absolute flex flex-col items-center justify-center gap-4 bottom-3'>
            <div className='items-center'>
              <button onClick={toggleTheme}>
                {theme === "dark" ? <img src={sun} alt="Sun Icon" /> : <img src={moon} alt="Moon Icon" />
                }
              </button>
            </div>
            <div className='relative block w-24 h-[1.5px] bg-slate-400'></div>
            <div>
              <img src={avatar} className='w-12 h-12 rounded-full' />
            </div>
          </div>
        </div>
      </div>


      {/* Mobile View */}

      <div className='flex justify-between md:hidden bg-slate-600'>
        <div className='md:mt-8 md:mb-auto md:text-center'>
          <img src={logo} alt="Logo" />
        </div>
        <div className='flex items-center justify-center gap-4 mr-4'>
          <div className='items-center'>
            <button onClick={toggleTheme}>
              {theme === "dark" ? <img src={sun} alt="Sun Icon" /> : <img src={moon} alt="Moon Icon" />
              }
            </button>
          </div>
          <div className='relative block w-[0.9px] h-20 bg-slate-400'></div>
          <div className='h-[80px] items-center flex'>
            <img src={avatar} alt="Avatar" className='w-16 h-16 rounded-full' />
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