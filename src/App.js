import React, {useState} from 'react';
import './App.css';
import NoteList from './NoteList';

import Modal from "./modal";
import axios from 'axios';


function App() {
  const [show, setShow] = useState(false);
  const[notes, setNote] = useState([]);

  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);
  
  const addNote = note => {
    axios
    .post("http://localhost:8000/notes",{id: note.id,
    title: note.title,
    body: note.body,
    author: note.author,
    date: new Date().toDateString() })
    .then(response=>{
      console.log(response)
    })
    .catch(error=>{console.error(error.message)})
    setNote([...notes, note])
  }

  return (
    <div>

    <div className="App">
      {!show && <button className="button-secondary" onClick={openModal}>Add new note</button>}
      <Modal closeModal={closeModal} show={show}  addNote={addNote}/>
    </div>

    <div><NoteList/></div>

    </div>
  );
}

export default App;