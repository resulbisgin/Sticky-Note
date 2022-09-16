import React, { useContext } from 'react';
import MainContext from '../MainContext';
function LeaveCommentText() {
    const {position}=useContext(MainContext)
    return (
           <div style={{position:'fixed',top:position.y,left:position.x}}>Yorum Yazmak İçin Tıkla</div>
    );
}

export default LeaveCommentText;