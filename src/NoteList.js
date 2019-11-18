import React,  { useState, useEffect }from 'react';
import axios from 'axios';
import App from './App';
import './NoteList.css'
 


export default () => {
  
   const[notes, setNote] = useState([]);

  


   useEffect(() => {
       axios
       .get(" http://localhost:8000/notes")
       .then(res => {
           console.log(res)
           setNote(res.data)
       })
     .catch (err => {
         console.log(err)
     })
   },[]);

   const deleteNote = id => {
    setNote(notes.filter(note => note.id !== id))
  }

/*
  const deleteNote = index => {
    const newNotes = [...this.state.notes];
    newNotes.splice(index,1);
    this.setState({notes:newNotes})
  }*/
  
   return(
    <div className="flex-container">
        <div className="flex-col">
        {notes.map((note) => (
          <div key = {note.id} className="card">
            <div className="card-body">
              <h5 className="card-title">{note.title}</h5>
              <h6 className="card-subtitle">{note.body}</h6>
              <p>{note.date}</p>
              <p>{note.author}</p>
              <button className="btn-delete" onClick={() => deleteNote(note.id)}>Delete</button>
            </div>
          </div>
        ))}
        
        </div>
       </div>
)

}