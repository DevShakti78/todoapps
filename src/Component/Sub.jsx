import React from 'react'
import Styles from './Sub.module.css'
import {v4 as uuid} from 'uuid'

function Sub({first}) {
    let [subData,setSubData] = React.useState([])
    let [subItem,setSubItem] = React.useState("")
    

    React.useEffect(()=>{
        firstTaskHandler()
    },[])

    const firstTaskHandler = () => {
        console.log(first)
        const payload = {
            subItem : first,
            id : uuid(),
            status : false
        }
        setSubData([...subData,payload])
    }

    const subTaskAddHandler = () => {
        const payload = {
            subItem,
            id : uuid(),
            status : false
        }
        setSubData([...subData,payload])
    }

    const toggleStatus = (id) => {
        const array = [...subData]
        const point = array.find(item => item.id === id)
        point.status = !point.status;
        setSubData(array) 
    }

    return (
        <div  className={Styles.Sub}>
            <input onChange={(e) => setSubItem(e.target.value)} type="text" value={subItem}></input>
            <button onClick={subTaskAddHandler}>Add SubTask</button>
            <div>
                {subData?.map((item,index) => (
                    <div key={index} className={Styles.Sub__main} >
                        <div>{item.subItem}</div>
                        <button onClick={()=>toggleStatus(item.id)}>{`${item.status}`}</button>
                    </div>
                ))}
            </div>
        </div>
        
    )
}

export default Sub


 