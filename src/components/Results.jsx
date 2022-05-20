import React from 'react'
import '../styles/results.scss';
import {Link} from 'react-router-dom';
import {FaMapMarkedAlt} from 'react-icons/fa';

function Results() {
  return (
    <div className="Results">
      <div className="ResultsContainer">
        {/* show the loadingBar until API fetching is complete */}
        {/* <div className="loadingBar">

        </div> */}
        {/* Show the results for the train plan and maps(using with google map) */}
        <div className="ResultsForMapAndPlan">
          <div className="PlanResults">
            <div className="PlansWrapper">
              <p className='Destination'>Destination</p>
              <p className='Duration'>Duration</p>
              <p className='Delay'>Delay</p>
              <p className='Km'>km</p>
              <Link to='/Map' className="LinkBtnForMap">
                <FaMapMarkedAlt/>
              </Link>
            </div>
            <div className="PlansWrapper">
              <p>Destination</p>
              <p>Duration</p>
              <p>Delay</p>
              <p>km</p>
            </div>
            {/* Add className when a plan is selected in order to paint it red */}
            <div className="PlansWrapper">
              <p>Destination</p>
              <p>Duration</p>
              <p>Delay</p>
              <p>km</p>
            </div>
            <div className="PlansWrapper">
              <p>Destination</p>
              <p>Duration</p>
              <p>Delay</p>
              <p>km</p>
            </div>
            <div className="PlansWrapper">
              <p>Destination</p>
              <p>Duration</p>
              <p>Delay</p>
              <p>km</p>
            </div>
            <div className="PlansWrapper">
              <p>Destination</p>
              <p>Duration</p>
              <p>Delay</p>
              <p>km</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Results