const Form=(props)=>{

 return(

  <div>

      <form onSubmit={props.newPersons}>
        
       
        <div>
          name: <input value={props.newName}  onChange={props.handlerChangeName} />
          <br />
            number: <input value={props.newNumber}  onChange={props.handlerChangenumber} />
        </div>
        <div>
          <br />
          <button type="submit">add</button>
        </div>
      </form>
  </div>
 ) 


}

export default Form
