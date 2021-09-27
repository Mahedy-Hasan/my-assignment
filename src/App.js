
import './App.css';
import Riches from './components/Riches/Riches';

// main app component 

function App() {

  return (
   
    <div className="App container">
      <header className='header'>
        <h1>Lets Make World Richest Team </h1>
        <p>No matter how hard it is they will never going to give up on your dream!!</p>
        <h1>Total Budget:1000 Billion.</h1>
      </header>
      <div>
        <Riches></Riches>
      </div>
    </div>
    
    
  );
}


export default App;
