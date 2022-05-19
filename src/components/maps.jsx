import React from 'react'
import {GoogleMap, useLoadScript} from '@react-google-maps/api';

function Maps() { 
  const libraries = ["places"];
  const mapContainerStyle={
    width:'100%',
    height:'400px',
    borderRadius:'20px',
  };
  const mapCenter={
    lat:50.110924,
    lng:8.682127
  }
  const {isLoaded,loadError}=useLoadScript({
    googleMapsApiKey:process.env.REACT_APP_GOOGLE_MAP_KEY,
    libraries,
  })
  const test=()=>{
    console.log(process.env);
  }
  if(loadError) return "Error loading";
  if(!isLoaded) return "Loading";
  return (
    <div onClick={test}>
      <GoogleMap mapContainerStyle={mapContainerStyle} zoom={8} center={mapCenter}>
        
      </GoogleMap>
    </div>
  )
}

export default Maps