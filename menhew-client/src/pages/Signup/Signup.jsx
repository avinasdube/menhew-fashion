import React from 'react'
import './Signup.scss';

import menhew from '../../assets/icons/menhew.png';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className="signupContainer">
            <div className="signupBox">
                <div className="signupLeft">
                    <div className='menhewLogo'>
                        <img src={menhew} alt='loading'></img>
                        <span>Menhew</span>
                    </div>
                </div>
                <div className="signupRight">
                    <div className="signupCard">
                        <div className="signupHeading">Signup to Menhew !</div>
                        <form>
                            <div className="inputFields">
                                <div className="input">
                                    <label>Name</label>
                                    <input type='text'></input>
                                </div>

                                <div className="input">
                                    <label>Mobile No.</label>
                                    <input type='text'></input>
                                </div>

                                <div className="input">
                                    <label>Email</label>
                                    <input type='email'></input>
                                </div>

                                <div className="input">
                                    <label>Password</label>
                                    <input type='password'></input>
                                </div>

                                <div className="input">
                                    <label>Confirm Password</label>
                                    <input type='password'></input>
                                </div>
                            </div>

                            <div className="buttonField">
                                <button>Signup</button>
                                <span>or</span>
                                <Link className='link' to='/login'><button>Login</button></Link>
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

export default Signup;