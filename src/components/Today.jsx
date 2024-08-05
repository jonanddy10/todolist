import {useState} from 'react'

function today() {
  // Active reminders:
  const [task, setTask] = useState(['eat breakfast', 'shower', 'walk the dog']); // (stored in an array)

  // Create new reminder:
  const [newTask, setNewTask] = useState('');
  

  // Textbox to type something:
  function handleInputChange(event){
    setNewTask(event.target.value)
  }
  function addTask(){
    if(newTask.trim() !== ''){
      setTask(t => [...t, newTask])
      setNewTask('')
    }
  }
  function deleteTask(index){
    const updatedTasks = task.filter((_, i) => i !== index)
    setTask(updatedTasks)
  }
  function raise(index){
    if(index > 0){
      const updatedTasks = [...task];
      // swap two elements within an array
      [updatedTasks[index], updatedTasks[index -1]] = 
      [updatedTasks[index - 1], updatedTasks[index]];
      setTask(updatedTasks);
    }
  }
  function lower(index){
    if(index < task.length - 1){
      const updatedTasks = [...task];
      // swap two elements within an array
      [updatedTasks[index], updatedTasks[index + 1]] =
      [updatedTasks[index + 1], updatedTasks[index]];
      setTask(updatedTasks);
    }
  }

  return (
    <>
    <div className='to-do-list'>
      <h1>Today</h1>
      <div>
        <input type='text' placeholder='Buy milk' value={newTask} onChange={handleInputChange}/>
        <button onClick={addTask}>+</button>
      </div>

      <ul className='list-items'>
        {task.map((task, index) =>
        <li key={index}>
          <span className='list-text'>{task}</span>
          <button className='delete-button' onClick={() => deleteTask(index)}>delete</button>
          <button className='raise-button' onClick={() => raise(index)}>raise</button>
          <button className='lower-button' onClick={() => lower(index)}>lower</button>
        </li>
        )}
      </ul>
    </div>
    </>
  )
}

export default today