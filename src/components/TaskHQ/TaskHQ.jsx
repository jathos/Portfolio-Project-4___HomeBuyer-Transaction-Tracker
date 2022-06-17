function TaskHQ({ user }) {
    return (
        <div className="taskHQ">
            {user.isAdmin ? <>TaskHQ <button>Add Task</button></> : TaskHQ}
        </div>
    );
};

export default TaskHQ;