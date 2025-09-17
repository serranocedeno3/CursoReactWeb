import { useState } from 'react'

//cree un componente Button que devuelve un boton con el nombre que se le pase y la funcion que se le pase por props
const Button=(props)=>{

return(
 <button onClick={props.onClick}>{props.name}</button>  
)


}

const StatisticLine =(props)=>{

return(

      <>   
    <td>{props.name}</td><td>{props.estadistic}</td> 
      </>
)

}

//cree u componente Result que devuelve el tipo de comentario y la cantidad de comentarios que han hecho
const Statistics=(props)=>{

if (props.good || props.bad || props.neutral) {
  return(
  <div>

 <h3>Statistics</h3>
     <br/>
    <table>
<tbody>
    <tr><StatisticLine name={'good'} estadistic={props.good}/></tr> 
    <tr><StatisticLine  name={'neutral'} estadistic={props.neutral} /></tr>
    <tr><StatisticLine  name={'bad'} estadistic={props.bad} /></tr> 
   
<tr><td>all</td><td>{props.good+props.neutral+props.bad}</td></tr>

<tr><td>average</td><td>{(props.good*1+props.neutral*0+props.bad*(-1))/props.good+props.neutral+props.bad}</td></tr>

</tbody>
    </table>

 
  </div>

)
}else{
return(
<div>

<h2> No feedback given </h2>

</div>
)
}



}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  //cree una funcion contador  para cada estado 

 
  
  return (
    <div>
     

  <h1>give feedback</h1>
     <br />
    {/* le paso al componente button la funcion contador de cada estado y su nombre para que el componente buton la ejecute  */}
<Button onClick={ () => setGood(good + 1)} good={good} name='good'/>
<Button onClick={ () => setNeutral(neutral + 1)} neutral={neutral}  name='neutral'/>
<Button onClick={ () => setBad(bad + 1) } bad={bad} name='bad'/>
     <br />
    <Statistics good={good} bad={bad} neutral={neutral}/>
   
  
   
    </div>
  )
}

export default App
