import { useEffect,  useState } from "react";

function Stopwatch(){
    const[isRunning,setisRunning]=useState(false);
    const [time,settime]=useState(0);
    // const starttime=useRef(0);
    // const intervalTime=useRef(0);
useEffect(()=>{
    console.log("component rendered")
    let interval;
    if(isRunning){
        interval =setInterval(()=>{
            settime((prevTime)=>prevTime+1)
        },1000 )

    }
    return ()=>clearInterval(interval);
},[isRunning]);
//start the watch
    function start(){
        setisRunning(true);
    };
    function stop(){
        setisRunning(false);
    };
    function reset(){
        setisRunning(false);
        settime(0);
    };
    const formatTime=(TotalSeconds)=>{
        const hours=Math.floor(TotalSeconds/3600).toString().padStart(2, '0');
        const minutues=Math.floor((TotalSeconds%3600)/60).toString().padStart(2, '0');
        const seconds=(TotalSeconds%60).toString().padStart(2, '0');
        return `${hours}:${minutues}:${seconds}`;
    };
    return(
        <div className="stopwatch">
            <h1>StopWatch</h1>
            <p className="time-display">{formatTime(time)}</p>
            {!isRunning ?
            <button className="button button-start" onClick={start}>Start</button>
            :(<button className="button button-stop" onClick={stop}>Stop</button>)}
            <button  className="button button-reset" onClick={reset}>Reset</button>
        </div>
    );
}

export default Stopwatch;