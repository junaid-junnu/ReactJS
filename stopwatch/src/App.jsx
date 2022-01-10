import React,{useState, useRef} from "react";


const App = () => {
  const [timer, setTimer] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
 const [cruLap, setCruLap] = useState('');
 const [lap, setLap] = useState([]);

  const increment = useRef(null)


const lapList = () => {

  setLap([...lap, formatTime()]);
  
}

  const handleStart = () => {
    setIsActive(true)
    setIsPaused(true)

    increment.current = setInterval(() => {
      setTimer((timer) => timer + 1)

    }, 1000)

  }

  const handlePause = () => {
    clearInterval(increment.current)
    setIsPaused(false)
  }

  const handleReset = () => {
    clearInterval(increment.current)
    setIsActive(false)
    setIsPaused(false)
    setTimer(0)
    setLap([]);
  }

  const formatTime = () => {
    const getSeconds = `0${(timer % 60)}`.slice(-2)
    const minutes = `${Math.floor(timer / 60)}`
    const getMinutes = `0${minutes % 60}`.slice(-2)
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)

    // setCruLap(`${getHours} : ${getMinutes} : ${getSeconds}`)
    
    return `${getHours} : ${getMinutes} : ${getSeconds}`

  }


  return (
    <>
     <div className="app">
      <h3>React Stopwatch </h3>
      <div className='stopwatch-card'>
        <p>{formatTime()}</p>
        <div className='buttons'>
        <button onClick={handleStart}>Start</button>
        <button onClick={handlePause}>Pause</button> 
        <button onClick={handleReset}>Reset</button>
        <button onClick={()=> {lapList()}}>Lap</button> 
        <div className= 'addList'>
        {lap.map((val) => {
          return(
            <>
           <li> {val} </li>
           </>
        )}
        )}
        </div>
        </div>
      </div>
    </div>
    </>
  );
};
export default App;
