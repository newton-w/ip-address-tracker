import React, { useEffect, useState } from 'react'
import dummyMap from './images/pattern-bg.png'
import './App.css';
import Map from './components/Map';
import Card from './components/Card';
import SearchForm from './components/SearchForm';

const App = () => {
  const [ip, setIp] = useState('');
  const [address, setAddress] = useState(null)

  useEffect(() => {

    fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_API_KEY}&ipAddress=+${ip}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          alert('invalid Ip address');
          throw new Error(response.statusText);

        }
      })
      .then(data => {
        setAddress(data)
      })

      .catch(error => console.log(error));
    // eslint-disable-next-line 
  }, [ip])


  return (

    <main>
      <div className="full">
        <div className="map-png">
          <img src={dummyMap} alt="" />
        </div>
        <div className="map" id="map">
          {address && <Map address={address} />}
        </div>
      </div>
      <div className="search">
      <h1>Ip Address Tracker</h1>
      <SearchForm setIp= {setIp}/>
      <Card address = {address} />
      </div>
    </main>

  )
}

export default App;