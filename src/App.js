import { useRef,useState ,useEffect} from 'react';
import './App.css';
import MainContext from './MainContext';
import LeaveCommentText from './components/LeaveCommentText';
import Note from './components/Note';
function App() {
  const screen=useRef(null)
  const [mode,setMode]=useState(false)
  const [position,setPosition]=useState({
    x:0,
    y:0
  })
  const [notes,setNotes]=useState([
    {
    id:"1",
    note:"bu bir test notudur.",
    color:"blue",
    position:{
      x:350,
      y:300
  }
}
])
const [boxVisible,setBoxVisible]=useState(false)
const [boxPosition,setBoxPosition]=useState({
  x:0,
  y:0
})
useEffect(()=>{
  screen.current.focus()
},[])
  const handleKeyUp=(e)=>{
   if(e.key==='c'){
    setMode(!mode)
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
    setBoxPosition({
      x:position.x,
      y:position.y
    })
    setBoxPosition(true)
  }

  const data={
    position,
    
  }
  return (
    <MainContext.Provider value={data}>
    <div ref={screen} tabIndex={0} onKeyUp={handleKeyUp} onMouseMove={handMouseMove} className={`screen ${mode&&'editable'}`}>
      
      {mode && (<LeaveCommentText/>)}
        {mode && (<div>Yorum Modu Aktif</div>)}
        {notes && notes.map(note=> <Note {...note} /> )}
    </div>
    </MainContext.Provider>
  );
}

export default App;
