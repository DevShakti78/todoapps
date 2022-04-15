import React from 'react'
import Sub from './Sub'
import Styles from './Todo.module.css'
import {v4 as uuid} from 'uuid'

function Todo() {
    let [data,setData] = React.useState([])
    let [item,setItem] = React.useState("")
    let [date,setDate] = React.useState("")
    let [first, setFirst] =React.useState("")

    const onClickHandler = () =>{
        const payload = {
            id : uuid(),
            item,
            date,
        }
        setData([...data,payload])
    }

    
    return (
        <div className={Styles.Todo}>
            <h1>TODO</h1>
            <div className={Styles.Todo__form}>
                <input onChange={(e)=>setItem(e.target.value)} value={item} placeholder="Title" type="text"></input> 
                <input onChange={(e)=>setDate(e.target.value)} type="date" placeholder="Date" ></input>  
                <input onChange={(e)=>setFirst(e.target.value)} value={first} placeholder="Sub Task" type="text"></input> 
                <button onClick={onClickHandler}>Add Task</button>
            </div>
            <div className={Styles.Todo__container}>
                {data?.map(item => (
                    <div className={Styles.Todo__main} key={item.id}>
                        <div><span>Title : </span><h2>{item.item}</h2></div>
                        <div><span>Due Date : </span><h2>{item.date}</h2></div>
                        <hr></hr>
                        <h4>SubTasks</h4>
                        <Sub first={first}></Sub>
                    </div>
                ))}
            </div>      
        </div>
    )
}

export default Todo
