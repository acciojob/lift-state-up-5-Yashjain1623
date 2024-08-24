import React, { useState } from 'react';

function Login({ isLoggedIn, onLogin }) {
  // Local state to manage form input (optional)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic here, and then:
    onLogin(); // Step 4: Update the parent's state via the passed function
  };

  if (isLoggedIn) {
    return <p>You are  logged in!</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
