import React, { useState } from 'react';
import Whitelogo from "../assets/ZWYWhiteLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { DiGithubBadge } from "react-icons/di";
import { IoIosMail } from 'react-icons/io';

const Navbar = () => {

    return (
        <nav className='flex items-center justify-between pb-6'>
            <div className='flex flex-shrink-0 items-center'>
                <img className='mx-2 w-10' src={Whitelogo} alt='logo' />
            </div>
            <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
                <a href="https://linkedin.com/in/mrzwewaiyan"><FaLinkedin /></a>
                <a href="https://github.com/ZweWaiYan"><DiGithubBadge /></a>
                <a href="mailto:zwe.wai.yan@u.nus.edu"><IoIosMail /></a>
            </div>
        </nav>
    )
}

export default Navbar;
