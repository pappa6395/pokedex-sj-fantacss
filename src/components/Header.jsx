import React from 'react'
import { FaBars } from "react-icons/fa";

function Header(props) {

    const { handleToggleMenu } = props

  return (
    <header>
        <button onClick={handleToggleMenu} className='open-nav-button'>
            <FaBars />
        </button>
        <h1 className='text-gradient'>Pokédex</h1>
    </header>
  )
}

export default Header