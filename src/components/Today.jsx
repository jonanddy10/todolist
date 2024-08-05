import {useState} from 'react'

function today() {
  // Active reminders:
  const [task, setTask] = useState([]); // (stored in an array)

  // Create new reminder:
  const [newTask, setNewTask] = useState('');
  

  // Textbox to type something:
  function handleInputChange(event){
    setNewTask(event.target.value)
  }
  function addTask(){

  }
  function deleteTask(index){

  }
  function raise(index){

  }
  function lower(index){
    
  }

  return (
    <>
    <div className='to-do-list'>
      <h1>Today</h1>
      <div>
        <input type='text' placeholder='Buy milk' value={newTask} onChange={handleInputChange}/>
      </div>
    </div>
    </>
  )
}

export default today