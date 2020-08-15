import React from 'react';
import 'materialize-css';
import { Icon } from 'react-materialize';
import "../map.css";

function Marker(props) {

  return <Icon className="marker" onClick={props.onClick}>place</Icon>

}
export default Marker;
