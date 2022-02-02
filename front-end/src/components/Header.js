import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <div>
            <Link to='/recipes'>View Recipes</Link>
        </div>
    )
}

export default Header;