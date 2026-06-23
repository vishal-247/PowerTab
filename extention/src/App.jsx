import Add_note from "./components/Add_note.jsx";
import Note from "./components/note.jsx"
import { useState } from "react";


function App() {

  const [notes, setNotes] = useState([]);
  const handleAddNote = () => {
    const newNote = {
      id: Date.now(),
      text: "New Note Added!"
    };
    setNotes([...notes, newNote]);
  }


  const handleDeleteEvent = (id) => {
    const updatedNotes = notes.filter((note) => note.id != id);
    setNotes(updatedNotes);
  }

  return (
    < >
      <Add_note onAdd={handleAddNote} />
      <div className="flex gap-6 flex-wrap mt-15">
        {
          notes.map((note) => {
            return <Note 
            key={note.id} 
            id={note.id}
            text={note.text} 
            onDelete={handleDeleteEvent} 
            />
          })
        }

      </div>
    </>

  );
}

export default App