import React, { useEffect, useState } from 'react'
import iconn from '../images/icon-arrow.svg'
import dummyMap from '../images/pattern-bg.png'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

// import L from 'leaflet'
// import { Icon } from 'leaflet'
// import mapIcon from '../images/icon-location.svg'


const Tracker = () => {
  const [ip, setIp] = useState('');
  const [finalpoint, setFinalpoint] = useState('');
  const [container, setContainer] = useState('')
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');
  const position = [lat, lng]

  
  useEffect(() => {
    fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_API_KEY}&ipAddress=+${ip}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          // alert('invalid ip address')
          throw new Error(response.statusText);

        }
      })
      .then(data => {
        setContainer(data)
        setLng(data.location.lng);
        setLat(data.location.lat);
      })

      .catch(error => console.log(error));
    // eslint-disable-next-line 
  }, [finalpoint])

  const inputHandler = (e) => {
    setIp(e.target.value)

  }
  const SubmitHandler = (e) => {
    e.preventDefault()
    setFinalpoint(ip)

  }
  // delete L.Icon.Default.prototype._getIconUrl;
  return (
    <>
      <main>
        <div className="full">
          <div className="map-png">
            <img src={dummyMap} alt="" />
          </div>
          <div className="map" id="map" >
            <MapContainer center = {position} zoom={3} scrollWheelZoom={true}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position}>
                <Popup>
                  Your Searched ip address
                </Popup>
              </Marker>
            </MapContainer>

            <div />
          </div>
        </div>

        <div className="search">
          <h1>Ip Address Tracker</h1>
          <form>
            <input
              type="text"
              value={ip}
              onChange={inputHandler}
              placeholder='Search for any Ip address or domain' />

            <div className="btn" onClick={SubmitHandler}>
              <img src={iconn} alt="search-arrow" />
            </div>
          </form>
          {container && <div className="card">
            <div className="box">
              <h2>IP ADDRESS</h2>
              <p>{container.ip}</p>
            </div>
            <div className="box">
              <h2>EDUCATION</h2>
              <p>{container.location.city}, {container.location.region}</p>
            </div>
            <div className="box">
              <h2>TIMEZONE</h2>
              <p>{container.location.timezone}</p>
            </div>
            <div className="box">
              <h2>ISP</h2>
              <p>{container.isp}</p>
            </div>
          </div>}
        </div>
      </main>
    </>
  )
}

export default Tracker;