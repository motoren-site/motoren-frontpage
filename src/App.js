import logo from './gear.png';
import './App.css';
import Clock from './Clock';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          app.motoren.site
        </h2>
        <Clock/>
      </header>
    </div>
  );
}

export default App;
