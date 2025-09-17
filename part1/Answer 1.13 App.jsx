import { useState } from 'react'





const App = () => {



function getRamdomAnecdota(max){

 return  Math.floor(Math.random() * max);




}



function votar(){

const votosActualizados=[...voto];

votosActualizados[selected]+=1;

setVoto(votosActualizados);
  
}

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [voto,setVoto]=useState(new Array(anecdotes.length).fill(0))



  return (
    <div>



      {anecdotes[selected]}
      <p>has {voto[selected]} votes</p>
<br />
<div style={{display:'flex', gap:'1%'}}>

  <button onClick={votar}>vote</button>
  <button onClick={()=>setSelected(getRamdomAnecdota(7))}>next anecdote</button>
</div>
      

    </div>
  )
}

export default App
