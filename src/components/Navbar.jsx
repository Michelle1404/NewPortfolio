import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from "../styles";
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-2 fixed top-0 z-20 bg-primary`}>
       <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className='flex items-center gap-2' onClick={() => {
          setActive("");
          Window.scrollTo(0,0);
        }}>
          <img src={logo} alt="logo" className='w-24 h-22 object-contain' />
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li key={link.id}
              className={`${active === link.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium`}
              onClick={() => setActive(link.title)}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center '>
          <img src={toggle ? close : menu} alt="menu" className='w-[28] h-[28] object-contain' onClick={() => setToggle(!toggle)} />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-primary absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl border-2 border-cyan-400`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((link) => (
            <li key={link.id}
              className={`${active === link.title ? "text-white" : "text-secondary"} font-poppins font-medium text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle) 
                    setActive(link.title)
                  }}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
          </div>
        </div>
      </div> 
    </nav>
  )
}

export default Navbar