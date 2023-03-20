import React, { useEffect } from "react";
import { connect } from "react-redux";
import fetchTodos from "../../actions";


const Cards = ({fetchTodos, todos})=>{

    useEffect(()=>{

        fetchTodos()

    },[])


    // console.log(todos);

    return(
        <div className="cards_container">{

        todos.map((el)=>{
            return(
                <div className="todo_internal_container" key={el._id}>
        
                <div className="main_container">
                    <div className="title_container">
                        <h2>{el.title}</h2>
                    </div>
                    <div className="tasks_and_checks_container">
                        {el.tasks.map((e)=>{
                            if(e.finished){ return(
                                    <div className="task_check" key={e._id}>
                                    
                                    <h3>{e.task}</h3>
                                </div>
                            )
                        }else{
                            return(
                                <div className="task_check" key={e._id}>
                                
                                <h3>{e.task}</h3>
                                <button className="check_task">✅</button>
                            </div>
                        )
                        }
                        })}
                    </div>
                    <div className="summary_button_container">
        
                        <button>Summary</button>
        
                    </div>
        
                </div>
                <div className="summary_details_container">
        
        
                </div>
        
                </div>
            )
        })

    }
        </div>
        
        )

}

const mapStateToProps = (state)=>{

    return {todos: state.todos}

}


export default connect(mapStateToProps,{
    fetchTodos
})(Cards);