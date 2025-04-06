import React from 'react'; //import React to avoid errors in the console

function Greeting() { //create a function to greet
  return (
    <div>
      <h2>Hello from the Greeting Component!</h2>
      <p>This is your first custom component in React.</p>
    </div> //wrap the greeting in a div tag as part of the rules for React
  );
}

export default Greeting; //export the function to be used in other files
