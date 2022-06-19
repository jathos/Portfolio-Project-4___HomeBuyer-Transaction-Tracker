function TaskHQ({ user, showView, setShowView, tasks }) {

    let numIncomplete = 0;
    tasks.forEach(function (ele) {
        if (ele.isCompleted == false) {
            numIncomplete = numIncomplete + 1;
        }
    });

    return (
        <div className="taskHQ">
            {user.isAdmin ? <><span className="numIncomplete">{numIncomplete} pending task(s)</span><button onClick={() => setShowView(!showView)}>Add Task</button></> : <span className="numIncomplete">{numIncomplete} pending task(s)</span>}

        </div>
    );
};

export default TaskHQ;