import './login.css';
function Login() {
  return (
    <div className="login">
      <div className="login_container">
        <h2>
            Login
        </h2>
        <vl/>
        <div className='phno'>
            <input className='phone' type="text" placeholder='Enter your Email / Username' ></input>
        </div>
        <div className='password'>
            <input className='pass' type="password" placeholder='Enter your Password' ></input>
        </div>
        <div className='reg_and_forgot'>
            <a href='#' className='register'>Register</a>
            <a href='#' className='forgot'>Forgot Password?</a>
        </div>

        <button className='login_btn'>SUBMIT</button>
        <div className='orbtw'>
            <h4 className='dots'></h4>
            <h4 className='or'> or </h4>
            <h4 className='dots'></h4>
        </div>
        <button className='google_btn'>
            <img src='https://img.icons8.com/color/48/000000/google-logo.png' alt='Google Login' className='google_logo'/>
            <span>Login with google account</span>
        </button>
        
      </div>
    </div>
  );
}
export default Login;