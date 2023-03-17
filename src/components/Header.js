import React from "react";
import { Link } from "react-router-dom";

const Header = ({className})=>{
    return(<div className={className}>
        <Link to="/add">Add</Link>
    </div>)
}

export default Header;