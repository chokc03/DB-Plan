# Deutsch-Bahn-Plan

### Demo
- website : 

### Purpose of the project

- Learn how to get API from open Data
- Learn how to apply Google map in the website
- Making fully Responsive website

### Used Skills
- React
- SCSS
- Google Map API

### Advanced Feature
#### Get Google Map
- Getting Google Map Key from .env file to authorize the Map

    ```ts
    const {isLoaded,loadError}=useLoadScript({
        googleMapsApiKey:process.env.REACT_APP_GOOGLE_MAP_KEY,
        libraries,
    })
    ```
- Show the Map in the Website

    ```ts
    import {GoogleMap, useLoadScript} from '@react-google-maps/api';
    ```
    ```ts
    <GoogleMap 
    mapContainerStyle={mapContainerStyle} 
    zoom={8} 
    center={mapCenter}>
    </GoogleMap>
    ```
    >variables used
    ```ts
    const libraries = ["places"];
    const mapContainerStyle={
        width:'100%',
        height:'100%',
    };
    const mapCenter={
        lat:50.110924,
        lng:8.682127
    }
    ```

### Things to improve

- Did not have any API gotten from DB
- Does not able to mainpulate Google map
- Cannot get the current geolocation 