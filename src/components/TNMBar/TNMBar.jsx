import TaskHQ from "../TaskHQ/TaskHQ";
import MessageHQ from "../MessageHQ/MessageHQ";

function TNMBar({ user, showView, setShowView }) {
    return (
        <div className="tnmBar">
            <TaskHQ user={user} showView={showView} setShowView={setShowView} />
            <MessageHQ />
        </div>
    );
};

export default TNMBar;