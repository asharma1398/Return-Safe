import React from 'react';
import "../map.css";

// const K_WIDTH = 12;
// const K_HEIGHT = 12;

//  const MarkStyle = {
//    position: 'absolute',
//    width: K_WIDTH,
//    height: K_HEIGHT,
//    left: -K_WIDTH / 2,
//    top: -K_HEIGHT /2,


//    borderRadius: K_HEIGHT,
//    backgroundColor: 'red',
//    textAlign: 'center',
//    color: '#3f51b5',
//    padding: 4

//  };

function Marker(props) {

return <button className="marker" onClick = {props.onClick}><i className="material-icons">place</i></button>

}
export default Marker;
