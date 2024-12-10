import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskStatus = () => {
    const { tasksCompleted } = useContext(TaskContext);

    return <p>Tasks Completed: {tasksCompleted}</p>;
};

export default TaskStatus;
