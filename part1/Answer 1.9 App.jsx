import { useState } from 'react'

import viteLogo from '/vite.svg'





const Button=(props)=>{

  return(
    <div>

<button onClick={props.handlerClick}>{props.name}</button>
    </div>
  )
}


const Statistics=(props)=>{

if(props.good ||props.neutral|| props.bad){

 return(

<div>

<h1>statistics</h1>
<br />
<p>good {props.good}</p>
<p>neutral  {props.neutral}</p>
<p>bad  {props.bad}</p>
<p>all  {props.good+props.neutral+props.bad} </p>
<p>average {props.good*1+props.neutral*0+props.bad*(-1)/props.good+props.neutral+props.bad}</p>
<p>positive  {props.good/(props.good+props.neutral+props.bad)*100 } %</p>

</div>

  )

}else{

return(

<div>

<h3>No feedback give</h3>

</div>

)

}
 
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

<Statistics  good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App   
