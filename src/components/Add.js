import React from "react";
import AddHeader from "./Add_components/AddHeader";
import Body from "./Add_components/Body";
import '../styles/add.css'

const Add = ()=>{
    return (
        <div className="AddPage">
        <AddHeader className="AddHeader"/>
        <Body/>
        </div>
    )
}

export default Add;