import React from 'react';
import "../map.css";

function Marker(props) {

return <button className="marker" onClick = {props.onClick}><i className="material-icons">place</i></button>

}
export default Marker;
