import { useState } from "react";
import { TaskContext } from "./TaskContext";

const TaskContextProvider = ({ children }) => {
    const [tasksCompleted, setTasksCompleted] = useState(0);

    return (
        <TaskContext.Provider value={{ tasksCompleted, setTasksCompleted }}>
            {children}
        </TaskContext.Provider>
    );
};
export default TaskContextProvider;