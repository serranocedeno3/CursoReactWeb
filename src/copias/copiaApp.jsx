import { useState } from 'react'
import Note from './components/Note'


const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const[newNote,setNewNote]=useState('New note ....')
  const[showAll,setShowAll]=useState(true)

  const addNote = (event) => {
    event.preventDefault()
const noteObject = {
    id: notes.length + 1,
    content: newNote,
    important: Math.random()< 0.5,
                  }

setNotes(notes.concat(noteObject))
setNewNote('')
  
  }

  const handlerChangeNewNote=(event)=>{

setNewNote(event.target.value)

  }

 const noteShow =showAll?notes:notes.filter(note=>note.important===true)



  return (
    <div>
      <h1>{showAll?'Show all Notes':'Important Notes'}</h1>
      <ul>
        {noteShow.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>

       <button onClick={()=>setShowAll(!showAll)}>
          show {showAll?'important':'all'}
        </button>
       <form onSubmit={addNote}>
        <input value={newNote}
        onChange={handlerChangeNewNote}
        />
       
        <button type="submit">save</button>
      </form>  

    </div>
  )
}

export default App 