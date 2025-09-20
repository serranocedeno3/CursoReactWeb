import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const [resultFilter, setResultFilter] = useState('')

const handlerChangeName=(event)=>{
setNewName(event.target.value)
}

const handlerChangenumber=(event)=>{
setNewNumber(event.target.value)
}

const handlerChangefilter=(event)=>{
const filter=event.target.value

if(filter==""){
setResultFilter(persons)
}else{setResultFilter(persons.filter(person=>person.name.toLowerCase().includes(filter.toLowerCase())))}


}

const newPersons=(event)=>{
   event.preventDefault()

const personsObject={
name: newName,
number:newNumber
}

const existe= persons.some(person=>person.name===newName)

if (existe) {  
   alert(`${newName} is already added to phonebook`)
} else {
 setPersons(persons.concat(personsObject))
 

}
setNewName('')
setNewNumber('')
}


const Person =({person})=>{


  return(
<div>
<p>{person.name} {person.number}</p>


</div>
  )
}


  return (
    <div>
      <h2>Phonebook</h2>
<label>filter shown with</label>
<input type="text" onChange={handlerChangefilter} />

      <form onSubmit={newPersons}>
        <h2>add a new</h2>
       
        <div>
          name: <input value={newName}  onChange={handlerChangeName} />
          <br />
            number: <input value={newNumber}  onChange={handlerChangenumber} />
        </div>
        <div>
          <br />
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
     {resultFilter?resultFilter.map(person=><Person  key={person.name} person={person} />):persons.map(person=><Person  key={person.name} person={person} />) }
    </div>
  )
}

export default App

