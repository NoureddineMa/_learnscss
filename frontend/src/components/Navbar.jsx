import React from 'react'
import '../styles/_navbar.scss'
import CustomButton from './CustomButton'

const Navbar = () => {
  return (
    <header>
        <span><span className='__second_span'>Tech</span>TalesToday</span>
        <CustomButton className="primary" content="Contact us"  />
    </header>
  )
}

export default Navbar
