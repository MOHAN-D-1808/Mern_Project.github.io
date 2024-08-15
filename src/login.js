import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import './App.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    const response = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    if (data.success) {
      alert("Login Sucessful")
      navigate('/');  // Redirect to Home page upon successful login
    } else {
      alert(data.message);  // Show error message
    }
  };

  return (
    <div>
    <div id="navi">
    <div id="imt">
      <img id="naviimg" src="https://images.twinkl.co.uk/tw1n/image/private/t_630/u/ux/primary-language-image-2_ver_1.png" height={100} alt="languages" />
      <marquee>
        <h1 id="lan">Languages</h1>
      </marquee>
    </div>
    <div id="cour">
      <Link to="/"><h2>Home</h2></Link>
      <Link to="/course"><h2>Courses</h2></Link>
      <Link to="/login"><h2>Login</h2></Link>
    </div>
  </div>
    <div id="login-page">
      <div id="login-box">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <label>Username</label>
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
          <label>Password</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <button type="submit" id="login-button">Login</button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Login;
