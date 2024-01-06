import React from 'react';
//import logo benku white
import logoWhiteBenku from '../img/logo-benku-white.svg'
const Footer = () => {
  return (
    <footer className='bg-primary py-12'>
      <div className='container mx-auto '>
        <div className='flex flex-col justify-center items-center text-center '>
       
        <img src={logoWhiteBenku} className='w-[300px] '/>
        <p className='text-white mt-[10px]'>Copyright &copy; Benku | happy shopping 2024.All rights reserved.</p>
        </div>

      </div>

    </footer>
  );
};

export default Footer;
