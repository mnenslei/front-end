import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
    <div>
        <h1>Spencer's Family Recipes</h1>
        <p>Welcome to Spencer's Family Recipe App, please click <strong><Link to='/recipes'>View Recipes</Link></strong> for some delicious recipes!</p>  
    </div>
    )
}

export default Home;