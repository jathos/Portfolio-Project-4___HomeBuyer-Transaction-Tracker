import TaskHQ from "../TaskHQ/TaskHQ";
import MessageHQ from "../MessageHQ/MessageHQ";

function TNMBar({ user }) {
    return (
        <div className="tnmBar">
            <TaskHQ user={user}/>
            <MessageHQ />
        </div>
    );
};

export default TNMBar;