import React from "react";
import Header from "./Header";
import Cards from "./todo_components/Cards";
import '../styles/todos.css'


const Todos = ()=>{
    return(
    <div className="TodoPage">
    <Header className="TodoHeader"/>
    <Cards/>
    </div>)
}

export default Todos;