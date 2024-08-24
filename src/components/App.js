
import React, { useState } from 'react';
import Login from './Login';
import './../styles/App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Step 2: Define a function to handle login
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  return (
    <div>
      <h1>Parent Component</h1>
      {/* Step 3: Pass the isLoggedIn state and handleLogin function as props */}
      <Login isLoggedIn={isLoggedIn} onLogin={handleLogin} />
    </div>
  );
}

export default App;


 
