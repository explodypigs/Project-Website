import React from 'react'
import { Buttons } from '../../../../styles'

const Note = ({item,Notes,setNote,idx}) => {

  const delNote=()=>{
    let newNote = Notes.slice()
    newNote.splice(idx,1)
    Notes=newNote.slice()
    setNote(Notes)
}

  return(
    <div>
      <div style={{color:'white',width:'200px',overflow:'hidden',textOverflow:'ellipsis'}}>{idx+1}. {item}</div>
      <Buttons width='55px' height='2px' onClick={delNote}>Delete?</Buttons>
    </div>
  )
}

export default Note