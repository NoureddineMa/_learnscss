import React from 'react'
import '../styles/CustomButton.scss'

const CustomButton = ({content,onClick,className}) => {
  return (
    <button className={className} onClick={onClick}>
        {content}
    </button>
  )
}

export default CustomButton
