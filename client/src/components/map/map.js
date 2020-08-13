import React, { useState, useEffect, useRef } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker/markerWrap';
import {boxWrapStyle} from './Marker/boxWrapper';
// import Marker from "./marker"
// import API from '../../utils/API';

function Map() {

    const container = useRef();

    const Boxy = ({ text }) => <div ref={container} style = {boxWrapStyle}>{text}</div>;
    
    useEffect(() => {
        
        document.addEventListener("mouseup", handleClickOutside);
                
            }, [])

   

    const handleClickOutside = event => {

        if (container.current && !container.current.contains(event.target)) {
          setInfoBox("")
    }
    }
        
      
  
    

   
//     const [mapping, setLocation] = useState([])

//     const [center, setCenter] = useState({
//         latitudeness: "",
//         longitudeness: ""
//     })

    const [infoBox, setInfoBox] = useState({
        text: "",
        long: 0,
        lati: 0
    })
    



//     useEffect(() => {
//         loadLocations()
//         loadSpot()
//     }, [])

   function loadBox(id, lon, lat) {
    console.log(handleClickOutside)
    setInfoBox({text: id, long:lon, lati:lat})
 
      
    // API.getBox(id)
    // .then(res => {
    //   console.log(res)

    }
    
//    }

//     function loadLocations() {
        
        
        
//         API.getLocations(date)
//             .then(res => {
//                 const latitudeness = (res.latitude.reduce((a, b) => (a + b)) / res.length);
//                 const longitudeness = (res.longitude.reduce((a, b) => (a + b)) / res.length);

//                 setLocation(res),
//                 setCenter({longitudeness: longitudeness,  latitudeness: latitudeness})
            

//             })
//             .catch(err => console.log(err))
//     };


    return (
        
        <div style={{ height: '50vh', width: '50vw' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyDpbrCe5t8RSBADdOMb17DP4LVmtV0Zbp4" }}
                defaultCenter = {{
                    lat: 22.7,
                    lng: 33
    }}
                // {center}
                defaultZoom={9}
            >
                {/* {mapping.map(location => */}
                    
                    <Marker
                         onClick = {() =>loadBox("This is text that is written in a box right here", 22.3, 33)}

                        // style = {MarkStyle}
                    
                        // lat={location.lat}
                        // lng={location.lon}
                        lat = {22.3}
                        lng = {33}
                    />
                    {/* )} */}
                   {infoBox !== "" ?
                 
                    <Boxy 
                    
                    lat = {infoBox.long}
                    lng = {infoBox.lati}
                    text = {infoBox.text}
                      /> : <div></div>
                   }

            </GoogleMapReact>
        </div>
    );




}


export default Map;