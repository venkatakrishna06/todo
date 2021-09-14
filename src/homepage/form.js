import React, {useState} from "react";
import './tasks.css';
import {Icon} from "@iconify/react";
function Form({setInput,list,setList,input}) {
    const inputHandler=(e)=>{
        setInput(e.target.value);
    };
    const submitHandler=(e)=>{
  e.preventDefault();
  setList([
      ...list,{text:input,completed:false}
  ]);
  setInput('');

    }

    return(
        <div className={'taskInput'}>
            <div className={'text'}><input value={input} className={'task'} placeholder={'New task'} type="text" name={'task'} onChange={inputHandler} /> </div>
            <div className={'plusIcon'} onClick={submitHandler}><Icon icon="bi:plus-circle-fill" color="#014f86"  /></div>
        </div>
    )
}
export default Form;