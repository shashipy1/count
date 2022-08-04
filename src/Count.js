import { useEffect, useState } from "react"

const Count = ()=>{
    const [seconds , setSeconds ] = useState(0);
    useEffect(()=>{
        const timerId = setInterval(() => {
            setSeconds(seconds+1);
        }, 1000);

        return ()=>{    
            clearInterval(timerId);
        }
    }, [seconds])
    console.log('outside code');
    return <div>
        {console.log('page is render')}
        <h1>Program start seconds {seconds}</h1>
        <h2>Hey, Shashi, How are you?</h2>
    </div>
}

export default Count;