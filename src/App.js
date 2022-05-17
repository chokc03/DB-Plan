import './styles/global.scss';
import Header from './components/Header';
import Results from './components/Results';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <Header/>
      <Search/>
      <Results/>
    </div>
  );
}

export default App;
