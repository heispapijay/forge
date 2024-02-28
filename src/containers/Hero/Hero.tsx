import React from 'react'
import { Banner } from '../../components/Banner/Banner'
import { Carousel } from '../../components/Carousel/Carousel'

export const Hero = () => {
  return (
    <div>
        <div className='hero-section'>
            <Banner />
            <Carousel />        
        </div>
    </div>
  )
}
