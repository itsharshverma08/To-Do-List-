import React ,{useState, UseState} from 'react';
function ToDoList(){
       
    const [tasks,setTasks]=useState([]);
    const [newTask,setNewTask]=useState("");

    function handleInputChange(event){
            setNewTask(event.target.value);
            
    }
    function addTask(){
        if(newTask.trim()!==""){
            setTasks(t=>[...t,newTask]);
            setNewTask("");
        }
    }
    function deleteTask(index){
        setTasks(tasks.filter((_,i)=>
                         i!==index
        ))
    }
    function moveTaskUp(index){
        if(index > 0){
            const updatedTask =[...tasks];
            [updatedTask[index] ,updatedTask[index-1]]=
            [updatedTask[index-1],updatedTask[index]]
            setTasks(updatedTask);

        }
    }
    function moveTaskDown(index){
        if(index < tasks.length-1 ){
            const updatedTask =[...tasks];
            [updatedTask[index] ,updatedTask[index+1]]=
            [updatedTask[index+1],updatedTask[index]]
            setTasks(updatedTask);
        }
    }
    return(
        <div className="to-do-list">
                <h1>To Do List</h1>

                <div>
                    <input type="text"
                     placeholder="Enter New Task" 
                     onChange={handleInputChange} 
                     value={newTask}/>
                    <button className="add-task-button" 
                    onClick={addTask}>Add</button>
                </div>
                <ol>
                    {tasks.map((task,index)=>
                           <li key={index}>
                               <span className="text">{task}</span>
                               <button className="delete-button" 
                               onClick={()=> deleteTask(index)}
                               >🗑️</button>
                               <button className="move-button" 
                               onClick={()=> moveTaskUp(index)}
                               >👆</button>
                               <button className="move-button" 
                               onClick={()=> moveTaskDown(index)}
                               >👇</button>
                           </li>
                    )}
                </ol>
                <footer> Made by Harsh Verma </footer>
        </div>
    );

}
export default ToDoList