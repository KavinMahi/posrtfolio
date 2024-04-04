import React from 'react'
import './TopContainer.css'
import { Element } from 'react-scroll'
import TopContent from '../TopContent/TopContent'

export default function TopContainer() {
  return (
    <div>
      <Element name='home' className='homeContent'>
        <TopContent />
      </Element>
    </div>
  )
}
