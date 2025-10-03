import { useState } from "react";
import logo from "./logo.svg";
import Sida2 from "./Sida2";

function App() {
  const [visaSida2, setVisaSida2] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
     
        <h1>Cedrik Ressle Portfolio</h1>
        <h2>Javautvecklare</h2>
        <p>
          Jag heter Cedrik Ressle och detta är mitt portfolio, Klicka på knappen så får du upp några av mina kompetenser!
        </p>

        {!visaSida2 && (
          <>
            <button
              className="App-link"
              onClick={() => setVisaSida2(true)}
            >
              Visa kompetenser
            </button>
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
          </>
        )}
      </header>

  
      {visaSida2 && <Sida2 />}
    </div>
  );
}

export default App;

