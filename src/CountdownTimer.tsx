import React from 'react';
import PropTypes from 'prop-types';

const CountdownTimer = ({remaining, setRemaining}:CountdownProps) => {
    React.useEffect(() => {
        if (remaining > 0) {
            const timerID = setInterval(() => {setRemaining(remaining - 1);}, 1000);
            return () => {clearInterval(timerID)};    
        }
    }, [remaining,]
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

CountdownTimer.propTypes = {
    items: PropTypes.number,
    setItems: PropTypes.func
};

export default CountdownTimer;