import React,{useState} from "react"; 
const ToDoList = () => {
    const [tarea1, setTarea1] = useState(["limpiar", "cocinar"])

    return (
        tarea1.map((tarea, index) => <p key={index}>{tarea}</p>)

    )
}



export default ToDoList