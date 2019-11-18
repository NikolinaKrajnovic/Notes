import React, {useState} from "react";
import './App.css';

function Modal(props) {
  const { show, closeModal } = props;
  const initialFormState = {id: null, title: '', body: '' , date:new Date(), author:''}
    const [note, setNote] = useState(initialFormState)
  
    const handleInputChange = event => {
      const { name, value } = event.target
  
      setNote({ ...note, [name]: value })
    }

  return (
    <>
      <div className={show ? "modal" : "hide"}>
        <button onClick ={closeModal}>X</button>
        <h1>Add new note</h1>
       <form onSubmit = {event => {
         event.preventDefault()
         if(!note.title || !note.body || !note.author) return
         props.addNote(note)
         setNote(initialFormState)
       }}
       >
         <label>Title:</label>
         <input type="text" name="title" value = {note.title} onChange={handleInputChange} />
         <br/>
         <label>Body:</label>
         <textarea name="body" value = {note.body}  cols="20" rows="10" onChange={handleInputChange}></textarea>
         <br/>
         <label>Author:</label>
         <input type="text" name ="author" value = {note.author} onChange={handleInputChange}/>
         <br/>
         <input type="submit" value ="Submit"/>
         <br/>
       </form>

      </div>
    </>
  );
}

export default Modal;