import {useState}from 'react'

import Header from './components/header'
import Tasks from './components/tasks'
import AddTask from './components/addTask'
import './index.css';

function App() {
  const [tasks, setTasks]= useState([{
    id:1,
    text:"hello 1",
    day:"08/08/2021",
    reminder:true,
},
{
    id:1,
    text:"hello 2",
    day:"09/07/2021",
    reminder:true,
},
{
    id:1,
    text:"hello 3",
    day:"12/10/2021",
    reminder:true,
},])

//toggle reminder
const toggleRemainder= (id) =>{
  setTasks(
   tasks.map((task) =>
  task.id === id ? { ...task, reminder: !task.reminder}:task
  )
)
}

//delete task

const deleteTask= (id) =>{
  setTasks(tasks.filter((task) => task.id !== id))
}
  return (
    <div className="container">
      <Header />
      <AddTask />
      {tasks.length > 0 ?(
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleRemainder}/>)
      :("no task to show")
}
    </div>
  );
}

export default App;
