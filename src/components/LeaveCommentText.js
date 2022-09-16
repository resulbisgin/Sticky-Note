import React, { useContext } from 'react';
import MainContext from '../MainContext';
function LeaveCommentText() {
    const {position}=useContext(MainContext)
    return (
           <div className='leave-comment-text' style={{position:'fixed',top:position.y,left:position.x+20}}>Yorum Yazmak İçin Tıkla</div>
    );
}

export default LeaveCommentText;