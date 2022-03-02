import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsBag } from 'react-icons/bs'

import './Header.css'
export default function Header() {
  return (
    <div className="gnb_wrap">
      <div className="gnb_menu">
        <GiHamburgerMenu size="31" className="icon_btn left_btn" />
        <FiSearch size="31" className="icon_btn" />
      </div>
      <a href="/" className="logo">
        <span className="blind_text">logo</span>
        <img
          className="img"
          src="https://i.balaan.io/mobile/img/icon/ico_logo.png"
          alt="logo"
        ></img>
      </a>
      <div className="gnb_util">
        <AiOutlineHeart size="31" className="icon_btn left_btn" />
        <BsBag size="31" className="icon_btn" />
      </div>
    </div>
  )
}
