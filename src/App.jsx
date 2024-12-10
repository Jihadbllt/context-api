import { useContext } from "react";
import { TaskContext } from "./context/TaskContext";
import { ProfileContext } from "./context/ProfileContext";
import HeaderComp from "./components/HeaderComp";
import TaskButton from "./components/TaskButton";
import TaskStatus from "./components/TaskStatus";

const App = () => {
    const { tasksCompleted, setTasksCompleted } = useContext(TaskContext);
    const { profile, setProfile } = useContext(ProfileContext); 

    const completeTask = () => {
        setTasksCompleted((prev) => prev + 1);
    };

    const handleProfileToggle = () => {
        setProfile((prev) =>
            prev
                ? null
                : { name: "Jane Doe", email: "jane.doe@example.com" }
        );
    };

    return (
        <div
            className="app"
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "1em",
                backgroundColor: profile ? "#1e3a8a" : "#7c2d12",
                padding: "2em",
                color: "white",
                minHeight: "100vh",
            }}
        >
            <HeaderComp title="Task Tracker" />
            <TaskButton onClick={completeTask} text="Complete Task" />
            <TaskStatus />
            <button
                onClick={handleProfileToggle}
                style={{
                    padding: "1em",
                    backgroundColor: profile ? "#60a5fa" : "#fca5a5",
                    color: "black",
                    border: "none",
                    cursor: "pointer",
                }}
            >
                {profile ? "Logout" : "Login"}
            </button>
            {profile && (
                <div className="profile" style={{ textAlign: "center" }}>
                    Welcome, {profile.name}! ({profile.email})
                </div>
            )}
        </div>
    );
};

export default App;
