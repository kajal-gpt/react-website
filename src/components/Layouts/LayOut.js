import React from "react";
import Header from "./Header";
import Footer from "./Footer";
const LayOut = ({children})=>{

    return(
        <div>
            <Header/>
            <h1>{children}</h1>
            <Footer/>
        </div>
    )

}

export default LayOut