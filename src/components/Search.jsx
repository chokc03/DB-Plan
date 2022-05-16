import React from 'react'

function Search() {
  return (
    <div className="SearchContainer">
      <form>
        <div className="SearchBar">
          <div className="SearchFrom">
            <p>From</p>
            <input type="text" placeholder='location'/>
          </div>
          <div className="SearchTo">
            <p>To</p>
            <input type="text" placeholder='location'/>
          </div>
          <div className="SearchTime">
            <input type="time" placeholder='location'/>
          </div>
        </div>
        <div className="SearchBtnContainer">
          <button className="SearchBtn">Search</button>
        </div>
      </form>
    </div>
  )
}

export default Search