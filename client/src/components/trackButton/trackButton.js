
import Track from '../../utils/tracker/tracker';
import React, { useState, useEffect } from 'react';

function LocButton() {

    useEffect(() => {
        localStorage.setItem("dur", JSON.stringify(0));
        localStorage.setItem("dist", JSON.stringify(0));
    }, [])

    const [time, setTime] = useState(0)
    const [onOff, setOnOff] = useState(false)
const changeState = () => {
    localStorage.setItem("dur", JSON.stringify(0));
    setTime(0)
    setOnOff(onOff ? false : true)
}

    useEffect(() => {
        if (onOff) {
            const interval = setTimeout(() => {
                setTime(time + 1)
                localStorage.setItem("dur", JSON.stringify(time));
                navigator.geolocation.getCurrentPosition(pos => {
                    console.log(pos)
                    Track.showPosition(pos)
                },
                    (error) => console.log(error),
                    {
                        enableHighAccuracy: true
                    });
                    
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [onOff, time]);


return (
    
    <button onClick={() => changeState()}>location track</button>
    
)
}

export default LocButton;




// useEffect(() => {
    //    const useIt = () => {
    //     const timer = setTimeout(() => {
    //         setTime(time + 1)
    //         localStorage.setItem("dur", JSON.stringify(time));
    //         navigator.geolocation.getCurrentPosition(pos => {
    //             Track.showPosition(pos)
    //         },
    //             (error) => console.log(error),
    //             {
    //                 enableHighAccuracy: true
    //             });
    //     }, 60000);
    //     return () => clearInterval(timer);
    // }
    // // }, [time]);

// onClick={() => changeState()}


// useEffect(() => {
//     const timer = setTimeout(() => {
//         setTime(time + 1)
//         navigator.geolocation.getCurrentPosition(pos => {
//             Track.showPosition(pos)
//         }, 
//         (error) => console.log(error),
//        {
//            enableHighAccuracy: true
//        });
//     }, 60000);

//   }, []);
