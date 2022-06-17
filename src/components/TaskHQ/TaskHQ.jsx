function TaskHQ({ user, showView, setShowView }) {

    return (
        <div className="taskHQ">
            {user.isAdmin ? <>TaskHQ <button onClick={() => setShowView(!showView)}>Add Task</button></> : <>TaskHQ</>}

        </div>
    );
};

export default TaskHQ;