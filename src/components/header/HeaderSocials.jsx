import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiLeetcode} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/pridhi-virmani-12054b205/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/pridhivirmani" target="_blank"><FaGithub/></a>
        <a href="https://leetcode.com/pridhivirmani/" target="_blank"><SiLeetcode/></a>
    </div>
  )
}

export default HeaderSocials