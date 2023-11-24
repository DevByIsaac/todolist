import React from "react";
import TaskList  from "./Tasklist";
import TaskForm from "./Taskform";
import SignOut from "./SignOut";

const TaskPage = () => {
    //Cargar Tareas

    return(
        <div>
            <SignOut/>
            <TaskForm/>
            <TaskList/>
        </div>
    );
};

export default TaskPage;
