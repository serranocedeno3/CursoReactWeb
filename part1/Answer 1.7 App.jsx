import { useState } from 'react'

import viteLogo from '/vite.svg'





const Button=(props)=>{

  return(
    <div>

<button onClick={props.handlerClick}>{props.name}</button>
    </div>
  )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  



  return (
    <div>
      <h1>give feedback</h1>

<div style={{display:'flex', gap:'1%'}}>
<Button name='good' handlerClick={()=>setGood(good+1)}  />
<Button name='neutral' handlerClick={()=>setNeutral(neutral+1)} />
<Button name='bad' handlerClick={()=>setBad(bad+1)} />
</div>

<br />

<h1>statistics</h1>
<br />
<p>good {good}</p>
<p>neutral  {neutral}</p>
<p>bad  {bad}</p>
<p>all  {good+neutral+bad} </p>
<p>average {good*1+neutral*0+bad*(-1)/good+neutral+bad}</p>
<p>positive  {good/(good+neutral+bad)*100 } %</p>
    </div>
  )
}

export default App   
