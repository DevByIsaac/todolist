import React, { useState } from "react";
import { addDoc, collection } from 'firebase/firestore';
import { firestore } from "./Firebase";
import { serverTimestamp } from "firebase/firestore";
import './css/TaskForm.css'

const TaskForm = () => {
    const [taskText, setTaskText] = useState("");


    const handleAddTask = async (e) => {
        e.preventDefault();

        try {
            await addDoc(collection(firestore, "tasks"), {
                text: taskText,
                completed: false,
                timestamp: serverTimestamp()
            });
            //Limpiar el campo de texto después de ingresar una tarea
            setTaskText("");
        }
        catch (error) {
            console.log("Error al agregar la tarea:", error.message);
        }
    };
    return (
        <div className="task-form">
            <h2>Agregar Tarea</h2>
            <form onSubmit={handleAddTask}>
                <label>
                    Tarea:
                    <input type="text" value={taskText} onChange={(e) => setTaskText(e.target.value)} />
                </label>
                <button type="Submit">Agregar Tarea</button>
            </form>
        </div>
    );
};
export default TaskForm;