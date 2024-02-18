import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import fixedId from "fixed-id";
import './App.css'
import NotesList from './components/NotesList'
import Search from './components/Search'
import Header from './components/Header'

function App() {

  const [notes,setNotes] = useState([
  {
    id:fixedId(),
    text:"first note",
    date:"17/02/2024"
  },
  {
    id:fixedId(),
    text:"second note",
    date:"18/02/2024"
  },
  {
    id:fixedId(),
    text:"third note",
    date:"19/02/2024"
  },
  {
    id:fixedId(),
    text:"new note",
    date:"20/02/2024"
  }
])

const [searchText,setSearchText] = useState('')
const [darkMode,setDarkMode] = useState(false)

useEffect(
  () => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-data'))

    if(savedNotes){
      setNotes(savedNotes)
    }

  },[])

useEffect(
() => {
  if(notes){
    localStorage.setItem(
      'react-notes-data',
    JSON.stringify(notes)) 
  }
}
,[notes])


const addNote = (text) => {
  const date = new Date();
  const newNote = {
    id:fixedId(),
    text: text,
    date: date.toLocaleDateString()
  }
  const newNotes = [...notes,newNote]
  setNotes(newNotes)
}

const deleteNote = (id) => {
  const newNotes = notes.filter((note) => note.id !== id)
  setNotes(newNotes)
}

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
        <div className='container'>
        <Header handleDarkMode={setDarkMode}/>
        <Search handleSearchNotes={setSearchText}/>
        <NotesList notes={notes.filter(
          (note) => note.text.toLowerCase().includes(searchText)
        )} handleAddNote = {addNote} handleDeleteNote={deleteNote}/>
      </div>
    </div>
    
  )
}

export default App
