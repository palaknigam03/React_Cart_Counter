import React from "react";
//import App from "../App";

const User=(props)=>{
    //console.log(props);
    const {data}=props
    return(
        <div>
            <h1>Good Morning</h1>
            <h2>{data.name}</h2>
            <h2>{data.age}</h2>
        </div>
    )
}

export default User;