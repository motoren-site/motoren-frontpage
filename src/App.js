import logo from "./gear.png";
import "./App.css";
import Clock from "./Clock";
import AnalogClock from "analog-clock-react";

let options = {
  width: "300px",
  border: true,
  borderColor: "#2e2e2e",
  baseColor: "#17a2b8",
  centerColor: "#459cff",
  centerBorderColor: "#ffffff",
  handColors: {
    second: "#d81c7a",
    minute: "#ffffff",
    hour: "#ffffff",
  },
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>app.ostepopp.site!</h2>
        <AnalogClock {...options} />
        <Clock />
      </header>
    </div>
  );
}

export default App;
