import React, { useState, useEffect, Suspense } from 'react';
import { useForm } from 'react-hook-form';
import 'leaflet/dist/leaflet.css';

let MapContainer, TileLayer, Marker, Popup;

if (typeof window !== 'undefined') {
  const L = require('react-leaflet');
  MapContainer = L.MapContainer;
  TileLayer = L.TileLayer;
  Marker = L.Marker;
  Popup = L.Popup;
} else {
  MapContainer = TileLayer = Marker = Popup = () => null;
}

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  console.log(errors);
  
  const [truckLocation, setTruckLocation] = useState([]);
  
  useEffect(() => {
    fetch('http://gps51.com/#/tracking?isshare=1&deviceid=9172808375&authcode=101b81accc1b2ffe6ab1788f25c09387&devicename=KCV645L&language=zh')
      .then(res => res.json())
      .then(data => setTruckLocation(data.features[0].center))
  }, []);

  console.log(truckLocation);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5 mx-auto w-full max-w-md"
    >
      
      <div>
      Truck Location: {truckLocation ? `${truckLocation[0]}, ${truckLocation[1]}` : 'Loading...'}
    </div>

    {truckLocation && (
      <Suspense fallback={<div>Loading...</div>}>
        <MapContainer center={truckLocation} zoom={13} style={{ height: "300px", width: "100%" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={truckLocation}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </Suspense>
    )}
      
      <input type="submit" />
    </form>
  );
}

export default Form;