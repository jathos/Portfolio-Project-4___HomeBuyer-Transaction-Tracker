import TaskHQ from "../TaskHQ/TaskHQ";
import MessageHQ from "../MessageHQ/MessageHQ";

function TNMBar({ user, showView, setShowView, transaction }) {
    return (
        <div className="tnmBar">
            <TaskHQ user={user} showView={showView} setShowView={setShowView} tasks={transaction.tasks} />
            <MessageHQ />
        </div>
    );
};

export default TNMBar;