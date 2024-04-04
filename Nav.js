import React from 'react'
import { Link } from 'react-scroll'
import './Nav.css';

export default function Nav() {
    // const [isMobile, setIsMobile] = useState(false);
    return (
        <div className='header'>
            <div className='navBar-left'>
                <h1>KAVINKUMAR</h1>
            </div>
            <div className='navBar-right'>
                <Link to='home' className='home' smooth={true} duration={500}><h4>Home</h4></Link>
                <Link to='about' className='about' smooth={true} duration={500}><h4>About</h4></Link>
                <Link to='skill' className='skill' smooth={true} duration={500}><h4>Skill</h4></Link>
                <Link to='project' className='project' smooth={true} duration={500}><h4>Project</h4></Link>
                <Link to='contact' className='contact' smooth={true} duration={500}><h4>Contact</h4></Link>
                <button><Link to='home' className='get' smooth={true} duration={500}></Link><h4>Get Start</h4></button>
            </div>


        </div>

    )
}
