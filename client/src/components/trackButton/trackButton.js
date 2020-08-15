
import Track from '../../utils/tracker/tracker';
import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import 'materialize-css';
import { Switch } from 'react-materialize';

function LocButton(props) {
    const { user } = props.auth
    localStorage.setItem("reset", "false");

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
                if (localStorage.getItem("reset") == "false") {
                setTime(time + 1)
                localStorage.setItem("dur", JSON.stringify(time));
                } else {
                    setTime(1)
                    clearInterval(interval)
                    localStorage.setItem("reset", "false"); }
                navigator.geolocation.getCurrentPosition(pos => {
                    console.log(pos)
                    Track.showPosition(pos, user)
                
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
    
    // <button onClick={() => changeState()}>location track</button>
    <Switch offLabel="" onLabel="" onChange={() => changeState()}></Switch>
    
)
}
LocButton.propTypes = {
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(
    mapStateToProps
  )(LocButton);




