import React, { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { firestore } from "./Firebase";
import './css/TaskList.css';

const TaskList = () => {
  const [tasks, setTasks] = React.useState([]);

  useEffect(() => {
    const unSubscribe = onSnapshot(
      query(collection(firestore, "tasks"), orderBy('timestamp', 'asc')),
      (snapshot) => {
        const newTasks = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTasks(newTasks);
      }
    );
    return () => unSubscribe();
  }, []);
  console.log(tasks);

  const handleDeleteTask = async (taskId) => {
    try {
      await deleteDoc(doc(firestore, 'tasks', taskId));
    } catch (error) {
      console.error('Error al eliminar la tarea:', error.message);
    }
  };

  const handleUpdateTask = async (taskId, newText) => {
    try {
      await updateDoc(doc(firestore, 'tasks', taskId), { text: newText });
    } catch (error) {
      console.error('Error al actualizar la tarea:', error.message);
    }
  };
  return (
    <div className="task-list">
      <h2>Lista de Tareas</h2>
      <ul>
        {tasks && tasks.map((task) => <li key={task.id}>{task.text}</li>)}

        <button onClick={() => handleDeleteTask(tasks.id)}>Eliminar</button>
        <button onClick={() => handleUpdateTask(tasks.id, prompt('Actualizar tarea:', tasks.text))}>Actualizar</button>
      </ul>
    </div>
  );
};

export default TaskList;
