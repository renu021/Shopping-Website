import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import {auth, fs} from '../Configuration/Config'
import './SingupStyle.css'




const Signup = () => {

    const history = useHistory();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');


    const handleSignin= (e) =>{
        e.preventDefault();
        // console.log(name, email, password)
        auth.createUserWithEmailAndPassword( email, password).then((Credentials)=>{
            console.log(Credentials);
            fs.collection('users').doc(Credentials.user.uid).set({
                Name: name,
                Email: email,
                Password: password
            }).then(()=>{
                setSuccessMsg("Signup Successfully. you will automatically get redirected to Login");
                setName('');
                setEmail('');
                setPassword('');
                setErrorMsg('');
                setTimeout(()=>{
                    setSuccessMsg('');
                    history.push('/Log');
                },3000)
            }).catch(error => setErrorMsg(error.message));
        
        }).catch((error)=>{
            setErrorMsg(error.message)
        })        
    }

    return(
        <div className="sign-container">
        <div className="singup-form">

            <form onSubmit={handleSignin}>
            <h1>Sing Up</h1>
            {successMsg&& 
                <>
                    <div className="success-msg">{successMsg}</div>
                </>
            }
                <div>
                    <label htmlFor="">Name</label> <br/>
                    <input type="text"
                    value={name}
                    onChange = {(e) => setName(e.target.value)}
                     />
                </div>

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

                <div>
                    <span>Already have an account Login</span>
                    <Link to="/Log">Here</Link>
                </div>

                <div>
                <button type="submit">SIGN UP</button>
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

export default Signup


