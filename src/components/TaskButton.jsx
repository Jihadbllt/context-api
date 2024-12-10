const TaskButton = ({ text, onClick }) => {
    return (
        <button
            onClick={onClick}
            style={{
                padding: "1em",
                fontSize: "1em",
                backgroundColor: "#4ade80",
                color: "black",
                border: "none",
                cursor: "pointer",
            }}
        >
            {text}
        </button>
    );
};

export default TaskButton;
