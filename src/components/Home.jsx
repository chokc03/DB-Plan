import React from 'react'
import Header from './Header';
import Results from './Results';
import Search from './Search';

function Home() {
  return (
    <div>
        <Header/>
        <Search/>
        <Results/>
    </div>
  )
}

export default Home