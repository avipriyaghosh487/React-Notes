import React from 'react'
import { MdSearch } from 'react-icons/md'

const Search = ({handleSearchNotes}) => {
  return (
    <div className='search'>
        <MdSearch size="1.3rem" className='search-icon' />
        <input onChange={(e) => handleSearchNotes(e.target.value)} type='text' placeholder='Search notes...'/>
    </div>
  )
}

export default Search