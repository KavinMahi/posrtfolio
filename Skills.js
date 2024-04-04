import React from 'react'
import './Skills.css'
import { Element } from 'react-scroll'
import { FaBootstrap, FaCss3, FaHtml5, FaJs, FaNode, FaReact, } from "react-icons/fa"


export default function Skills() {
    return (

        <div className='Skills'>
            <Element className='SkillContainer' name='skill'>
                <h1>Skills</h1>
                <div className='SkillIcon'>
                    <div className='html'>
                        <h2><FaHtml5 /></h2>
                        <p>Html5</p>
                    </div>
                    <div className='css'>
                        <h2><FaCss3 /></h2>
                        <p>Css3</p>
                    </div>
                    <div className='js'>
                        <h2 ><FaJs /></h2>
                        <p>Javascript</p>
                    </div>
                </div>
                <div className='SkillIconTwo'>
                    <div className='bs'>
                        <h2><FaBootstrap /></h2>
                        <p>Bootstrap5</p>
                    </div>
                    <div className='rj'>
                        <h2><FaReact /></h2>
                        <p>React Js</p>
                    </div>
                    <div className='nj'>
                        <h2><FaNode /></h2>
                        <p>Node Js</p>
                    </div>
                </div>
            </Element >


        </div >

    )
}
