
import { useState } from 'react';
import './App.css';
import Form from './Components/Form/Form';
import TaskRmains from './Components/TaskRemainingNo/TaskRmains';
import Tasks from './Components/Tasks/Tasks';
import Title from './Components/Todo-Title/Title';


function App(props) {
  const [task, setTask] = useState(props.tasks);
  const [remainTask, setremaintask] = useState(3)

  const completeHandler = (id) => {
    const updatedTask = task.map((task) => {
      if (id === task.id) {
        console.log(task.id)
        return { ...task, state: !task.state };

      }

      return task;
    })

    console.log('updated task', updatedTask);
    setTask(updatedTask)

  }

  const deleteTask = (id) => {
    console.log('id', id, typeof id)
    const filterdTask = task.filter((t) => { return t.id !== id })
    console.log('deleting task', filterdTask)
    setTask(filterdTask)

  }


  const newtodo = (todo) => {
    const newtodotyped = { name: todo, id: new Date().getTime().toString(), state: false }
    setTask([...task, newtodotyped])
    setremaintask(task.length + 1)
  }



  return (
    <>
      <Title />
      <Form newtodo={newtodo} />
      <TaskRmains remainTask={remainTask} />

      {task.map((task) => {
        return <Tasks
          name={task.name}
          key={task.id}
          id={task.id}
          completed={task.state}
          completeHandler={completeHandler}
          deleteTask={deleteTask} />
      })}

      {/* <h1>completed tasks name</h1> */}




    </>


  );
}

export default App;

