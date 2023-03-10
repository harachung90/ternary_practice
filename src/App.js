
import './App.css';
import React from 'react';

 function App() {

     const [isGoingOut, setIsGoingOut] = React.useState(true)
  //const isGoingOut = true
  //let answer = isGoingOut ? "Yes" : "No"

     /* Toggles the value of isGoingOut when clicked (false -> true, true -> false */
  function toggleState() {
      // Otherwise, setIsGoingOut(prevState => !prevState) also does the same thing!
      setIsGoingOut(!isGoingOut)
  }
  return (
      <div className="state">
        <h1 className="state--title">Do I feel like going out tonight?</h1>

        <div className="state--value"
             onClick={toggleState}
        >
          {/*  This way, no need for the answer variable on line 8 */}
          <h1>{isGoingOut ? "Yes" : "No"}</h1>
        </div>
      </div>
  );
}

export default App;
