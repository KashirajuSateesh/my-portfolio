import React from 'react'
import { FiPhoneCall } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Contact() {
  return (
    <div className="bg-white/30 backdrop-blur-md p-4 rounded-2xl">
      <h2 className='text-4xl font-bold p-4'>Contact</h2>
      <div className='text-lg text-gray-800 flex flex-row justify-evenly'>
        <p className='flex items-center space-x-2'>
          <FiPhoneCall />
          <span>contact</span>
        </p>
        <a href='linkedin.com/in/sateeshkashiraju' className='flex items-center space-x-2'>          
          <FaLinkedin />
          <span>linkedin</span>
        </a>
        <p>
          <FaGithub />
          <span>git</span>
        </p>
        <p className='flex items-center space-x-2'>
          <span>leetcode profile</span>
          <SiLeetcode />
        </p>
      </div>
      

    </div>
  )
}

export default Contact