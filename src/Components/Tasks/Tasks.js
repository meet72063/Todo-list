import React from 'react'
import "../Tasks/Tasks.css"
export default function Tasks(props) {
  
  return (
<div className='Tasks'>
      <li className="list-group-item">
        <input className="form-check-input me-1" type="checkbox" id={props.id} onClick={(e) => { props.completeHandler(e.target.id) }} defaultChecked={props.completed} value="" />
        <label className="form-check-label" htmlFor="firstCheckbox">{props.name}</label>

      </li> <button type="button" className="btn btn-outline-info btn-sm mx-2 btn-width">Edit Task</button>
      <button type="button" className="btn btn-outline-info btn-sm mx-2 btn-width" id={props.id} onClick={(e)=>{ props.deleteTask(e.target.id)}}>Delete Task</button>
</div>
     

  )
}
