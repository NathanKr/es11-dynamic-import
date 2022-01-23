import { useState } from "react";
import "./App.css";
// import moment from 'moment'

function App() {
  const [now, setNow] = useState();

  function displayNowDynamic() {
    import("moment")
      .then(({ default: momemt }) => {
        let now = momemt();
        setNow(now.format("DD-MM-YYYY"));
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <div className="App">
      <h5>Check the network tab !! moment is downloaded _only_ dynamically - on button click</h5>
      <button onClick={displayNowDynamic}>Display Date</button>
      <p>{now}</p>
    </div>
  );
}

export default App;
