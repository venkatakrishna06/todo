import React, {useState} from "react";
import './tasks.css';
import List from "./List";
import Form from "./form";
function Tasks(){
    const [input,setInput]=useState('');
const [list,setList]=useState('');
console.log(input);
    return(
        <div className={'tasks'}>
            <div className={'heading'}>My Tasks</div>
<Form setInput={setInput} setList={setList} list={list} input={input}/>
<List  list={list} />

        </div>
    )
}
export default Tasks;