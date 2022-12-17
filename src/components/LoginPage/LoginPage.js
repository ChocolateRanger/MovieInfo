import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {

    const navigate = useNavigate();

    const [loginid, setloginId] = useState("");
    const [passwd, setPasswd] = useState("")
    const [allitems, setallItems] = useState([])

    const submitForm = (e) => {

        const loginIdRegex = /^(?:\d{10}|\w+@\w+\.\w{2,3})$/;

        e.preventDefault();
        if (loginid && passwd) {
            if (!(loginid.match(loginIdRegex))) {
                alert('Enter valid Email/PhoneNumber');
            }

            else if (passwd.length < 8) {
                alert('Password must be 8 characters long');
            }

            else {
                const newEntry = { id: loginid, password: passwd };
                setallItems([...allitems, newEntry]);
                console.log(allitems);
                setloginId("");
                setPasswd("");
                navigate('/home')
            }
        }
        else {
            alert('Enter credentials')
        }

    }

    return (
        <>
            <div className='mainContainer'>
                <div className='container'>
                    <div className='header'>
                        <h2>
                            Sign in to your account
                        </h2>

                    </div>
                    <form action="" onSubmit={submitForm}>
                        <div className='inputfield'>
                            <input id='id' className='textfield' placeholder='Email / Phone Number' value={loginid} onChange={(e) => setloginId(e.target.value)} />
                        </div>
                        <div className='inputfield'>
                            <input id='password' className='textfield' type="password" placeholder='Password' value={passwd} onChange={(e) => setPasswd(e.target.value)} />
                        </div>
                        <div className='btn'>
                            <button className='btnlogin' type='submit'>
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default LoginPage