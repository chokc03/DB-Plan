import './styles/global.scss';
import Home from './components/Home';
import {Routes,Route} from 'react-router-dom';
import Maps from './components/Maps';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/Maps" element={<Maps/>}/>
      </Routes>
    </div>
  );
}

export default App;
