import React from 'react';
import { Link } from 'react-router-dom';

import { styles } from "../styles";

const Footer = () => {
  return (
    <footer className={`${styles.paddingX} w-full flex items-center py-2 bg-primary`}>
          <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
              <Link to="/" className='flex items-center gap-2' onClick={() => {
          Window.scrollTo(0,0);
        }}>
          <span className='font-thin'>©Michelle`s 2023</span>
        </Link>
              
          </div> 
    </footer>
  )
}

export default Footer