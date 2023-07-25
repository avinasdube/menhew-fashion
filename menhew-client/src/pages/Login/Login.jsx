import React from 'react'
import { Link } from 'react-router-dom';

import './Login.scss';

import menhew from '../../assets/icons/menhew.png';

const Login = () => {
    return (
        <div className="loginContainer">
            <div className="loginBox">
                <div className="loginLeft">
                    <div className='menhewLogo'>
                        <img src={menhew} alt='loading'></img>
                        <span>Menhew</span>
                    </div>
                </div>
                <div className="loginRight">
                    <div className="loginCard">
                        <div className="loginHeading">Welcome to Menhew !</div>
                        <form>
                            <div className="inputFields">

                                <div className="input">
                                    <label>Email</label>
                                    <input type='email'></input>
                                </div>

                                <div className="input">
                                    <label>Password</label>
                                    <input type='password'></input>
                                </div>
                            </div>

                            <div className="buttonField">
                                <button>Login</button>
                                <span>or</span>
                                <Link to='/signup'><button>Signup</button></Link>
                            </div>
                        </form>
                        <div className="copyrightDetails">
                            &copy; Menhew 2023. All Rights Reserved
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;