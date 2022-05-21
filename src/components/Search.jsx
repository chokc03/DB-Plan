import React,{useState} from 'react'
import {MdMyLocation} from 'react-icons/md';
import '../styles/search.scss';

function Search() {
  //If loading is false then the loading is complete
  //If the loading is true then loading is in progress
  const [loading, setLoading] = useState(false);
  const handleLoading=(e)=>{
    e.preventDefault();
    setLoading(value=>!value);
  }

  return (
    <div className="Search">
      <div className="SearchContainer">
        <form>
          <div className="SearchBarContainer">
            <div className="SearchInput From">
              <p>From</p>
              <input type="text" placeholder='starting point'/>
              <MdMyLocation className="CurrentLocationIcon"/>
            </div>
            <div className="SearchInput To">
              <p>To</p>
              <input type="text" placeholder='destination point'/>
              <MdMyLocation className="CurrentLocationIcon"/>
            </div>
            <div className="SearchInput Time">
              <input type="time" placeholder='location'/>
            </div>
          </div>
          <div className="SearchBtnContainer">
            <button onClick={handleLoading} className={loading?"SearchBtn Loading":"SearchBtn"}>
              Search
              <img className={loading?"LoadingBar":"LoadingComplete"} src="/img/Tram.svg" alt="loading..." />
            </button>

          </div>
        </form>
      </div>
    </div>
  )
}

export default Search