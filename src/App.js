import './App.css';
import React from 'react';
import { useState } from 'react'
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

const App = () =>  {
  const [showAddTask, setShowAddTask] = useState(true)
  const [tasks, setTasks] = useState(
    [
        {
            id:1,
            text: 'Task 1 : Homework',
            day:'Monday',
            reminder: true,
        },
        {
            id:2,
            text: 'Task 2 : Project',
            day:'Wednesday',
            reminder: true,
        },
        {
            id:3,
            text: 'Task 3 : Event Scheduling',
            day:'Friday',
            reminder: false,
        }
    ]
)

  //AddTask
  const addTask = (task)=> {
    const id = Math.floor(Math.random() * 1000) + 1
    const newtask = {id, ...task}
  }

  //Delete task
  const deleteTask = (id) =>{
    setTasks(
      tasks.filter((task)=> 
      task.id !==id))
  }

  //Toggle ID
  const toggleReminder = (id) =>{
    setTasks(tasks.map((task)=> task.id === id
    ? {...task, reminder:!task.reminder} : task))
  }



  return (
    <div className='container'>
      <Header onAdd={()=> 
        setShowAddTask(!showAddTask)} showAdd={showAddTask}/>

      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? 
      
      <Tasks 
      tasks={tasks} 
      onDelete={deleteTask} 
      onToggle={toggleReminder}/> : <b>Nothing to Show</b>}
    
    </div>
  )
}


export default App;
