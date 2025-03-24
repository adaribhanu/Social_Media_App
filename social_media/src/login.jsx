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
            <input className='ccode' type="text" placeholder='+91'></input>
            <hr/>
            <input className='phone' type="text" placeholder='Phone Number'></input>
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
        <button className='microsoft_btn'>
            <img src='https://img.icons8.com/color/48/000000/microsoft.png' alt='Microsoft Login' className='microsoft_logo'/>
            <span>Login with microsoft account</span>
        </button>
      </div>
    </div>
  );
}
export default Login;