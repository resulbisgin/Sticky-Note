import { useRef,useState ,useEffect} from 'react';
import './App.css';
import MainContext from './MainContext';
import LeaveCommentText from './components/LeaveCommentText';
function App() {
  const screen=useRef(null)
  const [mode,setMode]=useState(false)
  const [position,setPosition]=useState({
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
    setPosition({
      x:e.pageX,
      y:e.pageY
    })
  } 
  const data={
    position
  }
  return (
    <MainContext.Provider value={data}>
    <div ref={screen} tabIndex={0} onKeyUp={handleKeyUp} onMouseMove={handMouseMove} className="screen">
      <LeaveCommentText/>
        {mode && (<div>Yorum Modu Aktif</div>)}
    </div>
    </MainContext.Provider>
  );
}

export default App;
