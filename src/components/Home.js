import React from "react";
import "./Home.css";

const Home = (props)=>{
    console.log("-----home----",props.data)
    return (
        <div className="container">
            <div className="add-to-cart">
                <div>
                    <img 
                    style={{
                        height:"40px",
                        width:"40px",
                        position:"relative",            
                    }}
                    //  src="https://icons-for-free.com/iconfiles/png/512/add+to+cart+cart+shopping+cart+shopping+cart+icon+icon-1320073116171330767.png" alt="icon"/>
                        src="https://static.vecteezy.com/system/resources/previews/000/507/610/original/shopping-cart-icon-design-vector.jpg" alt="icon"/>
                    <span style={{position:"absolute"}}>{props.data.length}</span>
                </div>
            </div>
            <h1>Welcome...!!</h1>

            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img className="image" src="https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80" alt="hello" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                    
                </div>
                <div className="butoon-container">
                <div className="btn-wrapper item">
                    <button onClick={()=>props.addTOCartHandler({price:1000 , name:'i phone 11'})}>Add To Cart</button>
                    
                </div>
                <div className="btn-wrapper-b2">
                    <button onClick={()=>props.removeTOCartHandler({price:1000 , name:'i phone 11'})}>Remove To Cart</button>
                    
                </div>
                </div>
            </div>
        </div>
    )
}
export default Home;