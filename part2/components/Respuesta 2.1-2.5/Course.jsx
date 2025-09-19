
const Header=({name})=>{

  return(
<div>

<h1>{name}</h1>
</div>

  )
}
///////////////////////
const Content=(content)=>{

const partes=content.content

const total= partes.reduce((acumulador,part)=>acumulador + part.exercises,0)


  return(

    <div>

{/* <h1>{content.titulo}</h1> */}

<Header name={content.titulo} />

{partes.map(part=><Part key={part.id} name={part.name} exercises={part.exercises}/>)} 

<h3>total of {total} exercises</h3>

<br />

    </div>
  )
}
/////////////////////
const Part=(props)=>{


  return(

<div>
<p>{props.name}  {props.exercises}</p>

</div>

  )
}
///////////////////
const Course = ({ course }) => {

  console.log(course)
 return(
<div>

{course.map(curs=><Content titulo={curs.name} key={curs.id} content={curs.parts}/>)}


</div>
  )

}


export default Course
