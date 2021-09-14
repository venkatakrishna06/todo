import React from "react";
import Todo from "./Todo";

function List({list}) {
const data= Array.from(list);

console.log(list);
    return(
        <div className={'list'}>
            <ul className={'content'}>
                {
                    data.map((todo)=>(
                            <Todo list={list} completed={list} text={todo.text} id={todo.id}/>
                    ))
                 }
            </ul>
        </div>
    )
}
export default List;