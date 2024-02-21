import React from "react";
import LayOut from "./../components/Layouts/LayOut";
import { Button, Link } from "@mui/material";
import Vanner from "../images/vanner.jpg"
import "../styles/Homestyle.css"

const Home = () => {
    return (
        <LayOut> 
            <div className="home" style={{backgroundImage:`url(${Vanner})`}}>
                <div className="header">
                    <h1>Food website</h1>
                    <p>Best Food In India</p>
                    <Link to="/menu">
                        <button>
                            Order Now
                        </button>
                    </Link>
                </div>
            </div>
        </LayOut>
    )
}

export default Home