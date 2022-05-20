import React from 'react'
import {GoogleMap, useLoadScript} from '@react-google-maps/api';
import '../styles/maps.scss';
import Header from './Header';

function Maps() { 
  const libraries = ["places"];
  const mapContainerStyle={
    width:'100%',
    height:'100%',
  };
  const mapCenter={
    lat:50.110924,
    lng:8.682127
  }
  const {isLoaded,loadError}=useLoadScript({
    googleMapsApiKey:process.env.REACT_APP_GOOGLE_MAP_KEY,
    libraries,
  })
  if(loadError) return "Error loading";
  if(!isLoaded) return "Loading";
  return (
    <div className="Maps">
      <Header/>
        <div className="GoogleMapContainer">
          <GoogleMap mapContainerStyle={mapContainerStyle} zoom={8} center={mapCenter}>
          </GoogleMap>
        </div>
    </div>
  )
}

export default Maps