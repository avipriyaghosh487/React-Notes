import React from 'react'

const Header = ({handleDarkMode}) => {


  return (
    <div className='header'>
        <h1>Notes</h1>
        <button className='save' onClick={() => handleDarkMode((prevDarkMode) => !prevDarkMode)}>Dark Mode</button>
    </div>
  )
}

export default Header