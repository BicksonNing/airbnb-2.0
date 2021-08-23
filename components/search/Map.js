import { getCenter } from "geolib";
import * as React from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";

function Map({ searchResults }) {
  // Transfor the search results object into the
  // {latitude: 85.321 longtitude: 13.6354 } into object

  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);

  const [viewport, setViewport] = React.useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  const [selectedLocation, setselectedLocation] = React.useState({});

  return (
    <ReactMapGL
      mapStyle='mapbox://styles/ningombam123/cksnimhpk0lsp18sdxb9znyh8'
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {searchResults.map((result, i) => (
        <div key={i}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              role='img'
              className='text-2xl cursor-pointer animate-bounce'
              onClick={() => setselectedLocation(result)}
              aria-label='push-pin'
            >
              📍
            </p>
          </Marker>

          {/* Popup show that should show if we click */}
          {selectedLocation.long === result.long ? (
            <Popup
              closeOnClick={true}
              onClose={() => setselectedLocation({})}
              latitude={result.lat}
              longitude={result.long}
            >
              {result.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;
