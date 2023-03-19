import React, { useState } from 'react';
import '../Form/Form.css'

export default function Form(props) {
const [newTodo,setnewTodo]=useState("");
const clickHandler=()=>{
  
  {newTodo?props.newtodo(newTodo): alert("please write something to do")}
 
  
  setnewTodo("")
}
const addHandler=(e)=>{
 
 setnewTodo(e.target.value);
 
}
  return (
    <div>
<div className="input-group ">
  <input type="text" className="form-control" placeholder="Add task here..." value={newTodo} onChange={addHandler} aria-label="Recipient's username" aria-describedby="button-addon2"/>
  <button className="btn btn-outline-secondary btn-extra" type="button" id="button-addon2"   onClick={clickHandler}  >Add </button>
</div>

<button type="button" className="btn btn-outline-info btn-sm mx-2">Show all tasks</button>
<button type="button" className="btn btn-outline-info btn-sm  mx-2 my-1">Show active tasks</button>
<button type="button" className="btn btn-outline-info btn-sm  mx-2 my-1">Show completed tasks</button>
    </div>
  )
}
