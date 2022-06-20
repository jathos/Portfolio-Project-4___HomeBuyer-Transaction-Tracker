function MessageHQ({ tasks, user }) {

    let numUnread = 0;
    tasks.forEach(function (ele) {
        ele.messages.forEach(function (ele) {
            if (ele.unread == true) {
                numUnread = numUnread + 1;
            }
        })
    })

    return (
        <div className="messageHQ">
            <h4>{numUnread} unread messages</h4>
        </div>
    );
};

export default MessageHQ;