import React from 'react';

const K_WIDTH = 12;
const K_HEIGHT = 12;

const MarkStyle = {
  position: 'absolute',
  width: K_WIDTH,
  height: K_HEIGHT,
  left: -K_WIDTH / 2,
  top: -K_HEIGHT / 2,

  
  borderRadius: K_HEIGHT,
  backgroundColor: 'red',
  textAlign: 'center',
  color: '#3f51b5',
  padding: 4
  
};
 


function Marker(props) {

    
        return <button style = {MarkStyle} onClick = {props.onClick}><i className="fa fa-map-marker"></i></button>
      
       
        
    
}
export default Marker;
  

