import React from 'react'
import "./ActionButton.css"

type ActionButtonProps = {
    title: string
}

const ActionButton = ( {title}: ActionButtonProps) => {
  return (
     <button className='action-btn'>{title}</button>
  )
}

export default ActionButton