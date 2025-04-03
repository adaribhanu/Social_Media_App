import { useState } from 'react';
import { Link } from 'react-router-dom';
import loginIcon from './assets/login_icon.png';
import './login.css';

function Reg() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {  // ✅ Fixed API URL
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, username, password }),  // ✅ Removed confirmPassword
      });

      const data = await response.json();

      if (response.ok) {
        alert('Registration Successful! 🎉');
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
          <h2>Register</h2>
          <hr /> {/* ✅ Fixed invalid tag */}
          <div className='phno'>
            <input className='phone' type="email" placeholder='Enter your Email' value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className='phno'>
            <input className='phone' type="text" placeholder='Enter your Username' value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className='password'>
            <input className='pass' type="password" placeholder='Enter your Password' value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className='password'>
            <input className='pass' type="password" placeholder='Confirm your Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          </div>

          <div className='orLogin'>
            <Link to="/" className='register'>Login</Link>
          </div>

          <button className='login_btn' onClick={handleRegister}>SUBMIT</button>

          <div className='orbtw_reg'>
            <h4 className='dots'></h4>
            <h4 className='or'> or </h4>
            <h4 className='dots'></h4>
          </div>

          <button className='google_btn'>
            <img src='https://img.icons8.com/color/48/000000/google-logo.png' alt='Google Login' className='google_logo'/>
            <span>Register with Google Account</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Reg;
