import { div } from 'prelude-ls';
import React from  'react';
// function App() {
//   return (
//     <React.Fragment>
//       <input type="text" onClick={()=> {console.log("clicked!")}} />
//       <input type="text" onChange={()=> {console.log("clicked!")}} />
//     </React.Fragment>
//   );
// }

const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>
  )
}

const Cat = () => {
  return <div>Meow!!</div>
}
export default App;