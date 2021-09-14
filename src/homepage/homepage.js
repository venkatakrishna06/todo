import React, {useState} from "react";
import Navbar from "../navBar";
import Tasks from "./tasks";
import {Icon} from "@iconify/react";
import './home.css';

function Homepage(){
    const[count,setCount]=useState(false);
    const newList=()=>{
        setCount(true);
    }
    return(
        <div>
            <Navbar/>
            <div className={"home"}>
                <Tasks/>
                {
                    (count && <>
                    <Tasks/>
                    </>)
                }
                <div className={'newList'} onClick={newList} ><Icon icon="bi:plus-circle-fill" color="#014f86"  /></div>
            </div>
        </div>
    )
}
export default Homepage;