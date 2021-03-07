import React, { Component } from  'react';
function App() {
  return (
    <React.Fragment>
      <input type="text" onClick={()=> {console.log("clicked!")}} />
      <input type="text" onChange={()=> {console.log("clicked!")}} />
    </React.Fragment>
  );
}

export default App;
