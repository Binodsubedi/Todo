import React, { useEffect } from "react";
import { connect } from "react-redux";
import fetchTodos from "../../actions";
import backend from "../../apis/backend";


const Cards = ({fetchTodos, todos})=>{

    useEffect(()=>{

        fetchTodos()

    },[])


    

    const check_it = async (e,parent_id,id)=>{
        e.preventDefault();
        
        const response = await backend.patch('/setfinished',{parent_id,id})
        // console.log(response.data.status)
        if(response.data.status == 'success'){
            fetchTodos()
        }

    }

    const Summary_processor =({todos})=>{

        let finished_date_year = [];
        let finished_date_month = [];
        let finished_date_day = [];
        const total_tasks = todos.tasks.length
        // console.log(total_tasks)

        todos.tasks.map((el)=>{
            if(el.finished){
            const splitter = el.finished_date.split("-")

            // console.log(splitter)

            finished_date_year.push(splitter[0])

            finished_date_month.push(splitter[1])

            finished_date_day.push(splitter[2].slice(0,2))
            
            }
        })

        if(finished_date_year[0] != undefined){

        const combined_date = finished_date_year.map((el,index)=>{

            return `${el}-${finished_date_month[index]}-${finished_date_day[index]}`

        })

        // console.log(combined_date)

        const dates_to_id = combined_date.map(el=>{
            const split_in = el.split("-")
            return split_in.join("")
         })
    
        //  const work_combine = []
    
        // //  work_combine[10] = 'hello'
    
        // console.log(dates_to_id)

        const work_combine = {}

        dates_to_id.map((el)=>{
            // console.log(el)
            if(work_combine[`${el}`] != undefined){
                work_combine[`${el}`] = work_combine[`${el}`] + (1/total_tasks)*100
            }else{
                work_combine[`${el}`] = (1/total_tasks)*100;
            }
        })

        
        let order_arranged = bubbleSort(dates_to_id)
        const unique_all = new Set(order_arranged)
        order_arranged = [...unique_all]

        
       

        for(let i=1; i< order_arranged.length; i++){

            for(let j=0; j < i; j++){

                work_combine[`${order_arranged[i]}`] += work_combine[`${order_arranged[j]}`]


            }
        }

    return(
        <div className="summary_details_container">

            {order_arranged.map((el,index)=>{

                return <h2>{`${el.slice(0,4)}-${el.slice(4,6)}-${el.slice(6)} => ${work_combine[`${el}`]}`}</h2>

            })}

        </div>
    )

       


     }

    

    }


    const bubbleSort = (arr)=>{

        for(let i=0; i< arr.length; i++){
            for(let j=0; j< arr.length; j++){
                
                    if(parseInt(arr[i])<parseInt(arr[j])){

                        const buffer = arr[j];
                        // console.log(buffer)
                        arr[j] = arr[i];
                        arr[i] = buffer;
                    }
                }
            }

            return arr;
        }


    


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
                                <button className="check_task" onClick={(event)=>check_it(event,el._id,e._id)}>✅</button>
                            </div>
                        )
                        }
                        })}
                    </div>
                    <div className="summary_button_container">
        
                        <button>Summary</button>
        
                    </div>
        
                </div>
                {/* <div className="summary_details_container"> */}
                        
                    <Summary_processor todos={el}/>
                        
        
                {/* </div> */}
        
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