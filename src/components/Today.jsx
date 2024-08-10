import {useState} from 'react'
import trashIcon from '../assets/images/delete.png'
import doneIcon from '../assets/images/check.png'
import raiseIcon from '../assets/images/up-arrow.png'
import lowerIcon from '../assets/images/down-arrow.png'

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
      <div className='header-bar'>
        <input type='text' placeholder=' Buy milk' value={newTask} onChange={handleInputChange} className='input-bar'/>
        <button onClick={addTask} className='add-button'>+</button>
      </div>

      <ul className='list-items'>
        {task.map((taskItem, index) => {
          console.log('Index:', index, 'Task length:', task.length, 'Task:', taskItem);
          return (
        <li key={index}>
          <span className='list-text'>{taskItem}</span>
          <button className='delete-button task-button' onClick={() => deleteTask(index)}><img src={trashIcon} alt='delete' className='icons'/></button>
          <button className='done-button task-button' onClick={() => finishedTask(index)}><img src={doneIcon} alt='done' className='icons'/></button>
          {/* hide button if at the end of the array */}
          {index > 0 && (<button className='raise-button task-button' onClick={() => raise(index)}><img src={raiseIcon} alt='raise' className='icons'/></button>)} 
          {/* hide button if at the start of the array */}
          {index < task.length-1 && (<button className='lower-button task-button' onClick={() => lower(index)}><img src={lowerIcon} alt='lower' className='icons'/></button>)}
        </li>
        )
        })}
      </ul>
    </div>
    </>
  )
}

export default today