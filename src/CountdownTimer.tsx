import React from 'react';

const CountdownTimer = ({remaining, setRemaining}:CountdownProps) => {
    React.useEffect(() => {
        if (remaining !== 0) {
            const timerID = setInterval(() => {setRemaining(remaining - 1);}, 1000);
            //console.log("setting duration to " + (remaining - 1) + " with timer: " + timerID)
            return () => {
                //console.log("clearing timer: " + timerID);
                clearInterval(timerID)
            };    
        }
    }, [remaining, setRemaining]
    );
    let isRed = false
    if (remaining < 10 && remaining % 2 === 1) {
        isRed = true;
    }
    return <div style={{color: isRed ? "red" : "white"}}>{remaining} seconds remain</div>;
};

export interface CountdownProps {
    remaining: number;
    setRemaining: Function;
}

export default CountdownTimer;