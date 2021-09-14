import React from "react";
import './home.css';
function Todo({text,completed}) {



    return(

                <label className="container">{text}
                    <input type="checkbox" />
                        <span className="checkmark"></span>
                </label>


    )
}
export default Todo;