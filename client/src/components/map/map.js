import React, { useState, useEffect, useRef } from 'react';
import GoogleMapReact from 'google-map-react';
import { boxWrapStyle } from './Marker/boxWrapper';
import Marker from "./Marker/markerWrap"
import API from '../../utils/API';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./map.css";

function Map(props) {
    const { user } = props.auth
    const container = useRef();

    const Boxy = ({ text }) => <div class = "box" ref={container} style={boxWrapStyle} ><div class="tri bottom"></div>{text}</div>;
    const [zoomin, setZoom] = useState(9)
    
    useEffect(() => {

        document.addEventListener("mouseup", handleClickOutside);
        
        loadLocations()
        if(!center){
            setCenter([40,-75])
            setZoom(7)
        } 
        
    }, [props.currentDate])


    

    const handleClickOutside = event => {
        
        if (container.current && !container.current.contains(event.target)) {
            setInfoBox({
                text: "",
        long: 0,
        lati:0

            })
            setZoom(12)
        }
    }






    const [mapping, setLocation] = useState([])

    const [center, setCenter] = useState()

    const [infoBox, setInfoBox] = useState({
        text: "",
        long: 0,
        lati:0

    })

    

    // useEffect(() => {
    //     console.log(infoBox)
    // }, [infoBox])

    
    
    
          
    const loadBox = (time, record, lon, lat) => {
      
        
       var times = record.substr(11, 5)
       if (parseInt(times.substr(0, 2)) > 12){
           times = parseInt(times.substr(0, 2))-12 + ":" + times.substr(3, 2) + "pm"
           console.log(times)
       } else {times = times + "am"}

           
         console.log(typeof lon) 
    setInfoBox({text: `You were here for ${time} minutes at ${times}.`, long:lon, lati:lat})
        var newCenter = []
       
        newCenter.push(lat)
        newCenter.push(lon)
        console.log(newCenter)
        setCenter(newCenter)
        setZoom(16)
          
    }







    function loadLocations() {

        let lowDate = new Date(props.currentDate.toDateString());
        let date = new Date(props.currentDate);
        let highDate = new Date(date.setHours(23, 59, 59, 999));

        API.getLocations(user.id, lowDate, highDate)
            .then(res => {
                console.log(res.data[0].locations)
                var latitudeness = 0
                var longitudeness = 0
                
                for(var i = 0; i < res.data[0].locations.length; i++){
                   longitudeness =  parseFloat(res.data[0].locations[i].longitude.$numberDecimal) + longitudeness
                   latitudeness =  parseFloat(res.data[0].locations[i].latitude.$numberDecimal) + latitudeness
                }
   
                var origin = []
                origin.push(latitudeness/res.data[0].locations.length)
                origin.push(longitudeness/res.data[0].locations.length)

                console.log(origin)

                
                setCenter(origin);
                setLocation(res.data[0].locations);

            



            })
            .catch(err => console.log(err))
    };


    return (
       

        <div className="googleMapLayout">
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_KEY }}
                center = {center}
                zoom= {zoomin}
                
            >
                
                {mapping.map((location) =>
                    
                    <Marker
                        onClick = {() =>loadBox(location.time, location.recordedAt, parseFloat(location.longitude.$numberDecimal), parseFloat(location.latitude.$numberDecimal ))}
                         
                        
                    
                        lat={location.latitude.$numberDecimal}
                        lng={location.longitude.$numberDecimal}

                    />
                
                    )}
                  {infoBox.text !== "" ?
                 
                 <Boxy 
                  
                 lat = {infoBox.lati}
                 lng = {infoBox.long}
                 text = {infoBox.text}
                   /> 
                  : <div></div>
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