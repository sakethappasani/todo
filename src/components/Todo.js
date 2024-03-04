import React, { useState } from 'react'
import './todo.css'

export default function Todo()
{
    const [task,setTask] = useState("")
    const [taskList,setTaskList] = useState([])

    const handleTask = (event) =>{
        setTask(event.target.value)
        document.getElementById("inputerror").innerHTML = ""
    }

    const addToList = () =>{
        if(task.length>0)
        {
            setTaskList([...taskList,task])
            setTask("")
        }
        else
        {
            document.getElementById("taskname").focus()
            document.getElementById("inputerror").innerHTML="**Please Enter the Task**"
        }
    }

    const deleteTask = (index) => {
        const newTaskList = [...taskList]
        newTaskList.splice(index, 1)
        setTaskList(newTaskList)
      }
    
    const clearList = () =>{
        setTaskList("")
      }
  return (
    <div align="center">
        <h3>My TODO List</h3>
        <input type='text' placeholder='Enter the Task' onChange={handleTask} value={task} id='taskname'/><br/>
        <i style={{color:"red"}} id='inputerror'></i><br/>
        <button onClick={addToList} className='sbtn'>Submit</button><br/>
        <table>
        {
            taskList.length>0?
            taskList.map((task,index)=>
            (
                <tr key={index} align="center">
                <td>{index+1}</td>
                <td>{task}</td>
                <td><button onClick={deleteTask} className='cbtn'>Delete</button></td>
            </tr>
            )):
            <h2 align="center">No Tasks</h2>
        }
        </table><br/>
        {
            taskList.length>0 && 
            (<button onClick={clearList} className='cbtn'>Clear All</button>)
        }
    </div>
  )
}