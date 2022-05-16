import React from 'react'
import { useState } from 'react'
import Maps from './Maps';

function Results() {
  const [loading, setLoading] = useState(false);
  return (
    <div className="ResultsContainer">
      <div className="loadingBar">
        <img src="/img/Tram.svg" alt="loading..." />
      </div>
      <div className="ResultsForMapAndPlan">
        <div className="PlanREsults">
          <div className="PlansWrapper">
            <p>Destination</p>
            <p>Duration</p>
            <p>Delay</p>
            <p>km</p>
          </div>
        </div>
        <div className="MapResults">
          <Maps/>
        </div>
      </div>
    </div>
  )
}

export default Results