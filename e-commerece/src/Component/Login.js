import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {auth} from '../Configuration/Config'
import { useHistory } from 'react-router-dom';
import './LoginStyle.css'


const Login = () => {

    const history = useHistory();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [errorMsg, setErrorMsg] = useState('')
    const [successMsg, setSuccessMsg] = useState('')


    const handleLogin= (e) =>{
        e.preventDefault();
        //console.log(email, password)
        auth.signInWithEmailAndPassword(email, password).then(() => {
            setSuccessMsg('Login successfully. You will be automatically redirected to Home page')
            setEmail('');
            setPassword('');
            setErrorMsg('');
            setTimeout(()=>{
                setSuccessMsg('');
                history.push('/');
            },3000)
        }).catch(error => setErrorMsg(error.message));
    }

    return(
        <div className="login-container">
        
            <div className="login-form">
            <form onSubmit={handleLogin} className="Login-form">
            <h1>LogIn</h1>
            {successMsg&& 
                <>
                    <div className="success-msg">{successMsg}</div>
                </>
            }
                <div>
                <label htmlFor="">Email</label> <br/>
                <input type="email"
                value={email}
                onChange = {(e) => setEmail(e.target.value)}
                 />
                </div>

                <div>
                    <label htmlFor="">Password</label> <br/>
                    <input type="password"
                    value={password}
                    onChange = {(e) => setPassword(e.target.value)}
                     />
                </div>

                <div className="login-span">
                    <span>Don't have an account SignUp  </span>
                      <Link to="/Sign">Here</Link>
                </div>

                <div>
                <button type="submit" className="Login-btn">LOGIN</button>
                </div>   
                {errorMsg&& 
                <>
                    <div className="error-msg">{errorMsg}</div>
                </>
            }                   
            </form>
                
            </div>

            
        </div>
    )
}
export default Login