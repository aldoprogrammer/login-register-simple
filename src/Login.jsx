import { useState } from 'react';
import './Login.css'; // Import your CSS file
import { useAldoAlert } from 'aldo-alert';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const { showAldoAlert } = useAldoAlert();

  const handleLogin = (e) => {
    e.preventDefault();
    // For simplicity, assume login is successful if both fields are filled
    if (username && password) {
      setLoggedIn(true);
      showAldoAlert('Hello, this is a toast message!', 'danger');

    } else {
      alert('Please enter both username and password.');
    }

  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      {loggedIn ? (
        <div className="logged-in-message">
          <p>Welcome, {username}!</p>
          <button onClick={() => setLoggedIn(false)}>Logout</button>
        </div>
      ) : (
        <form onSubmit={handleLogin} className="login-form">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
}

export default Login;
