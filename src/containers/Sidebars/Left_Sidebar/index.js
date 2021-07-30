import React from 'react'
import { useState} from 'react'
import NewNote from './Components/NewNote'
import Note from './Components/Note'
import { NoteDiv,Buttons } from '../../../styles'


const NoteList = () => {
  const [Notes,setNote]=useState(['Example Note'])
  const [newItem,setNewItem]=useState('')

  const addNote=()=>{
    let newItems=Notes.slice()
    newItems.push(newItem)
    setNote(newItems)
  }

  return(
    <NoteDiv>
      {Notes.map((item, idx) => <Note key={idx} idx={idx} item={item} Notes={Notes} setNote={setNote}/>)}<br/>
      <NewNote type="text" placeholder="Enter a Note" value={newItem} setValue={setNewItem}/>
      <br/>
      <Buttons width='80px' height='2px' onClick={addNote}>New Note</Buttons>
    </NoteDiv>
    //use key to keep react from giving errors in the browser console
  )
}

export default NoteList