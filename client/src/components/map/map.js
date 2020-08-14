import React, { useState, useEffect, useRef } from 'react';
import GoogleMapReact from 'google-map-react';
import {boxWrapStyle} from './Marker/boxWrapper';
import Marker from "./Marker/markerWrap"
import API from '../../utils/API';
import PropTypes from "prop-types";
import { connect } from "react-redux";

function Map(props) {
    const { user } = props.auth
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
        
      
  
    

   
    const [mapping, setLocation] = useState([])

    const [center, setCenter] = useState({
        latitudeness: "",
        longitudeness: ""
    })

    const [infoBox, setInfoBox] = useState({
        text: "",
        long: 0,
        lati: 0
    })
    



    useEffect(() => {
        loadLocations()
        // loadSpot()
    }, [])

    
    const loadBox = (id, lon, lat) => {
        API.getBox(id)
        .then(res => {
            setInfoBox({text: res, long:lon, lati:lat})
    
        })
    
        
    }
          
       
    
    
    


    function loadLocations() {
        
        let lowDate = new Date(props.currentDate.toDateString());
        let date = new Date(props.currentDate);
        let highDate = new Date(date.setHours(23,59,59,999));
        
        API.getLocations(user.id, lowDate, highDate)
            .then(res => {
                const latitudeness = (res.latitude.reduce((a, b) => (a + b)) / res.length);
                const longitudeness = (res.longitude.reduce((a, b) => (a + b)) / res.length);

                setLocation(res);
                setCenter({longitudeness: longitudeness,  latitudeness: latitudeness});
            

            })
            .catch(err => console.log(err))
    };


    return (
        
        <div style={{ height: '50vh', width: '50vw' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyDpbrCe5t8RSBADdOMb17DP4LVmtV0Zbp4" }}
                defaultCenter = {center}
                defaultZoom={9}
            >
                {mapping.map(location =>
                    
                    <Marker
                         onClick = {() =>loadBox(location._id, location.longitude, location.latitude)}

                        
                    
                        lat={location.lat}
                        lng={location.lon}
                        
                    />
                    )}
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
Map.propTypes = {
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(
    mapStateToProps
  )(Map);