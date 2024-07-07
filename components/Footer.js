import React from 'react'
import { FaInstagram, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <div className=' bg-gray-500 mt-10 bottom-0'>
    <div className='flex justify-center' >
      <div className='text-4xl p-5 gap-5 grid grid-cols-4'>
      <a href="https://www.instagram.com/shreyash_3226/" target="_blank" rel="noreferrer"><FaInstagram className='hover:text-orange-500 '/></a>
        <a href="mailto:shreyash.22010178@viit.ac.in" target="_blank" rel="noreferrer"><FaEnvelope className='hover:text-white' /></a>
        <a href="https://github.com/Shreyash2118" target="_blank" rel="noreferrer"><FaGithub className='hover:text-white'/></a>
        <a href="https://www.linkedin.com/in/shreyash-gaikwad-349b39209/" target="_blank" rel="noreferrer"><FaLinkedin className='hover:text-blue-500'/></a>
      </div>
      
      </div>
      <div className="text-[20px] text-center pb-5">
      Shreyash_Gaikwad | All Rights Reserved
    </div>
      </div>
  )
}

export default Footer