import React from 'react';
import 'materialize-css';
import { Icon } from 'react-materialize';

const K_WIDTH = 50;
const K_HEIGHT = 50;

const MarkStyle = {
  position: 'absolute',
  width: K_WIDTH,
  height: K_HEIGHT,
  left: -K_WIDTH / 2,
  top: -K_HEIGHT,

  
  // borderRadius: K_HEIGHT,
  // backgroundColor: 'red',
  // textAlign: 'center',
  // color: '#3f51b5',
  // padding: 4
  
};
 


function Marker(props) {

    
        return <Icon style={MarkStyle} onClick={props.onClick}>place</Icon>
      
       
        
    
}
export default Marker;
  

