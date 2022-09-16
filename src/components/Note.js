import { useContext, useState } from "react";
import Draggable from 'react-draggable';
import MainContext from "../MainContext";
function Note(note) {
    const [visible,setVisible]=useState(false)
    const [clickable,setClickable]=useState(true)
    const {notes,setNotes}=useContext(MainContext)
    const showNote=()=>{
        if(clickable){
            setVisible(!visible)
        }
    }
  
    return (
   <Draggable   
    onDrag={()=>setClickable(false)} onStart={()=>setClickable(true)}  > 
         <div  className="note-container" style={{'--color':note.color,position:'absolute',top:note.position.y,left:note.position.x}}>
            <span onClick={showNote} className='note-box-number'>{note.number}</span>
            <div className="note" style={{display:visible?'flex':'none'}}>
                {note.note}
            </div>
        </div>
   </Draggable>
    );
}

export default Note;