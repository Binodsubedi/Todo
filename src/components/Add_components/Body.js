import React, { useRef, useState } from "react";

const Body = ()=>{

    const [tasks, setTask] = useState(["hello there man", "ok that's done and done"])
    const current_task = useRef("")
    


    const task_adder = (e)=>{
        e.preventDefault();

        setTask([...tasks, current_task.current.value])

        current_task.current.value = ""
        
    
    }



    return(
        <div className="addBody">
            <div className="internals_holder">

            <div className="label_input_holder">

            <div className="label_holder">
                <label id="project_label">Project:</label>
                <label id="task_label">Task:</label>
            </div>
            <div className="input_holder">
                <input type="text" id="project_input"/>
                <input type="text" id="task_input"  ref={current_task}/>
            </div>
            </div>
            <div className="finalize_add_holder">
                <button id="finalize_button">Finalize</button>
                <button id="add_button" onClick={(e)=>task_adder(e)}>Add</button>
            </div>
            </div>

            <div className="tasks_holder">
                {tasks.map((el,i)=>{
                    return <h2 key={el}>{`(${i+1}.) ${el}`}</h2>
                })}

            </div>

        </div>
    )
}


export default Body;