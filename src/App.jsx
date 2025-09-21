import { useState,useEffect } from 'react'
import Filter from './components/Filter'
import Form from './components/Form'
import Person from './components/Person'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [resultFilter, setResultFilter] = useState('')


  useEffect(() => {
    console.log('effect')
    axios.get('http://localhost:3001/persons').then((response) => {
      console.log('promise fulfilled')
          
      setPersons(response.data)
    })
  }, [])


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
 setResultFilter(persons.concat(personsObject))
 
 

}
setNewName('')
setNewNumber('')
}

  return (
    <div>
      <h2>Phonebook</h2>
<Filter onChange={handlerChangefilter} />

<h2>add a new</h2>
<Form newPersons={newPersons}
 newName={newName}
 handlerChangeName={handlerChangeName}
 newNumber={newNumber}
 handlerChangenumber={handlerChangenumber}
 />
      <h2>Numbers</h2>
     {resultFilter?resultFilter.map(person=><Person  key={person.name} person={person} />):persons.map(person=><Person  key={person.name} person={person} />) }
    </div>
  )
}

export default App