import React, { Component } from 'react'
import './ContactContainer.css'
import { Element } from 'react-scroll'
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
export default function ContactContainer() {

    return (
        <div className='Contact' >
            <Element className='Contact_Head' name='contact'>
                <form className='form'>
                    <h1>Contact Us</h1>
                    <div className='text_filed'>
                        <h3>Mobile Number</h3>
                        <p>+91-7339451207</p>
                    </div>
                    <div className='text_filed'>
                        <h3>Gmail</h3>
                        <p>kavinmahi.cs@gmail.com</p>
                    </div>
                </form>
                <div className='Contact_icons'>
                    <a href='http://github.com//KavinMahi' target='blank'><FaGithub className='github' /></a>
                    <a href='https://www.linkedin.com/in/kavinkumar-v-753705233' target='blank'><FaLinkedinIn className='linkdin' /></a>
                    <a href='http://www.instagram.com/_kaveen__offl' target='blank'><FaInstagram className='instagram' /></a>
                </div>
            </Element>


        </div>
    )
}
