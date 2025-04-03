import { useState } from 'react';
import { Link } from 'react-router-dom';
import loginIcon from './assets/login_icon.png';
import './login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {  // ✅ Fixed API URL
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Login Successful! 🎉');
        localStorage.setItem('token', data.token); // Save JWT token
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      alert('Something went wrong. Please try again!');
    }
  };

  return (
    <div className="login_page">
      <div className="icon">
        <img src={loginIcon} alt="Login Icon" />
      </div>
      <div className="login">
        <div className="login_container">
          <h2>Login</h2>
          <hr /> {/* ✅ Fixed invalid tag */}
          <div className='phno'>
            <input className='phone' type="email" placeholder='Enter your Email' value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className='password'>
            <input className='pass' type="password" placeholder='Enter your Password' value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>

          <div className='reg_and_forgot'>
            <Link to="/register" className='register'>Register</Link>
            <a href='#' className='forgot'>Forgot Password?</a>
          </div>

          <button className='login_btn' onClick={handleLogin}>SUBMIT</button>

          <div className='orbtw'>
            <h4 className='dots'></h4>
            <h4 className='or'> or </h4>
            <h4 className='dots'></h4>
          </div>

          <button className='google_btn'>
            <img src='https://img.icons8.com/color/48/000000/google-logo.png' alt='Google Login' className='google_logo'/>
            <span>Login with Google Account</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
