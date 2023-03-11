import React from 'react'
import './Facility.css'

type FacilityProps = {
    image: string
    title: string
}

const Facility = ({image, title}:FacilityProps) => {
  return (
    <div className='facility'>
        <div className="facility-img"><img src= {image} alt="facility" /></div>
        <h4 className="facility-title">{title}</h4>
    </div>
  )
}

export default Facility