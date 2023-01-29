import React from 'react'

function Card({ address }) {
  return (
    <>
          {address && 
        <div className="card">
          <div className="box">
            <h2>IP ADDRESS</h2>
            <p>{address.ip}</p>
          </div>
          <div className="box">
            <h2>EDUCATION</h2>
            <p>{address.location.city}, {address.location.region}</p>
          </div>
          <div className="box">
            <h2>TIMEZONE</h2>
            <p>{address.location.timezone}</p>
          </div>
          <div className="box">
            <h2>ISP</h2>
            <p>{address.isp}</p>
          </div>
        </div>}
        </>
   
  )
}

export default Card