import React from 'react'
import './TopContent.css'
import { Link } from 'react-scroll'
export default function TopContent() {
    return (
        <div className='TopContent'>

            <div className='TopContent__Container'>
                <h1>Mr.Kavinkumar v</h1>
                <p>A professinol web developer</p>
                <a href='#'><button className='TopContent__ResumeButton'>Resume</button></a>
                <Link to="project" smooth={true} duration={500}><button className='TopContent__WebsitButton'>My websit</button></Link>
            </div>

        </div>
    )
}
