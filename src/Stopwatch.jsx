import React, {useState, useEffect, useRef} from 'react';

function Stopwatch(){

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    
    useEffect(() => {

    }, isRunning)
    return(<></>);
}
export default Stopwatch;