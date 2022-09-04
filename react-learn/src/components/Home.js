import React from "react";
import styles from "./style.module.css"
import { Link } from "react-router-dom";

function Home(){
    return(
        <div className="wrapper">
            <h1>Sakhnin Coffee Shop</h1>
            <Link to='/order'>
            <button>Order Now</button>
            </Link>
        </div>
    )
}

export default React.memo(Home);