import { useRef,useState ,useEffect} from 'react';
import './App.css';
import MainContext from './MainContext';
import LeaveCommentText from './components/LeaveCommentText';
import Note from './components/Note';
import NoteBox from './components/NoteBox';
function App() {
  const screen=useRef(null)
  const [mode,setMode]=useState(false)
  const [position,setPosition]=useState({
    x:0,
    y:0
  })
  const [notes,setNotes]=useState(localStorage.notes&& JSON.parse(localStorage.notes)|| [])
const [boxVisible,setBoxVisible]=useState(false)
const [boxPosition,setBoxPosition]=useState({
  x:0,
  y:0
})

useEffect(()=>{
  screen.current.focus()
},[])
useEffect(()=>{
  localStorage.setItem('notes',JSON.stringify(notes))
},[notes])
  const handleKeyUp=(e)=>{
   if(e.key==='c'){
    setMode(!mode)
    setBoxVisible(false)
  }
  if(e.key==='Escape'){
    setBoxVisible(false)
  }
  }
  const handMouseMove=(e)=>{
    if(mode){
      setPosition({
        x:e.pageX,
        y:e.pageY
      })
    }
  } 
  const handleClick=(e)=>{
    if(mode){
    setBoxPosition({
      x:position.x,
      y:position.y
    })
    setBoxVisible(true)
    }
  }

  const data={
    position,
    boxPosition,
    setMode,
    notes,
    setNotes,
    setBoxVisible
  }
  return (
    <MainContext.Provider value={data}>
    <div ref={screen} tabIndex={0} onKeyUp={handleKeyUp} onClick={handleClick} onMouseMove={handMouseMove} className={`screen ${mode&&'editable'}`}>
      
      {mode && (<LeaveCommentText/>)}
        {notes && notes.map((note,index)=> <Note key={index} {...note} /> )}
        {boxVisible && <NoteBox/>}
    </div>
    </MainContext.Provider>
  );
}

export default App;
