
function Note(note) {

    return (
        <div className="note" style={{'--color':note.color,position:'absolute',top:note.position.y,left:note.position.x}}>
            
        </div>
    );
}

export default Note;