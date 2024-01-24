import React from 'react'
import {BsTwitter, BsInstagram} from 'react-icons/bs'
import { FaGithub } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
        <a href="https://github.com/Srikant114" target='_blank' rel='noreferrer'><BsTwitter/> </a>
        </div>
        <div>
          <a href="https://github.com/Srikant114" target='_blank' rel='noreferrer'><FaGithub/> </a>
          
        </div>
        <div>
        <a href="https://github.com/Srikant114" target='_blank' rel='noreferrer'><BsInstagram/> </a>
        </div>
    </div>
  )
}

export default SocialMedia