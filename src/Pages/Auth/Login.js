import React, { useState, useContext } from 'react'
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { auth, firestore } from "../../Config/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { AuthContext } from '../../context/AuthContext';
const instialState = {
    email: '',
    password: '',

}


export default function Register() {

    const { state, dispatch } = useContext(AuthContext);
    const navigate = useNavigate();
    const [eState, setEState] = useState(instialState);
    const [isProcessesing, setIsProcessesing] = useState(false);


    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log("name =>", name)
        console.log("value =>", value)
        setEState(state => ({ ...eState, [name]: value }))

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(eState);
        const { email, password } = eState;
        setIsProcessesing(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                dispatch({ type: "LOGIN", payload: { user } });
                window.notify("your successfully login ", 'success');
                navigate("/");

                // ...
            })
            .catch((error) => {
                console.error(error);
                window.notify("please give correct email or password", "error");
            }).finally(() => {
                setIsProcessesing(false)
            })




        // console.log("Email=>", email);
        // console.log("name=>", fullName);
        // console.log("Password", password);
        // handle form submission logic here
    };

    return (

        <>

            <div className="signup-container">
                <div className="signup-card">
                    <h2 className='text-center'>Login</h2>
                    <p className='text-center'>Enter Login details to get access</p>
                    <Form onSubmit={handleSubmit}>


                        <Form.Group>
                            <Form.Label>Username or Email Address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder='Username / Email Address'
                                name='email'
                                onChange={handleChange}

                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder='Password'
                                name='password'
                                onChange={handleChange}

                            />
                        </Form.Group>
                        <div className='d-flex justify-content-between mt-2'>
                            <div className="form-check mt-2">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <label className="form-check-label " for="flexCheckChecked">
                                    <span className='font-weight-bold'>Keep Me Loged In</span>
                                </label>
                            </div>
                            <div className="login-link m-2 m-md-2 ">
                                <Link to='/auth/forgotPassword' className='text-decoration-none' >Forgot Password?</Link>
                            </div>

                        </div>

                        <div className='d-flex mt-5'>

                            <div className="login-link m-2 m-md-2">
                                Don't have account? <Link to='/auth/register' className='text-decoration-none'>Sign Up</Link><span> here</span>
                            </div>


                            {isProcessesing
                                ? <Button>
                                    <div class="spinner-border text-secondary" role="status"></div>
                                </Button>


                                : <Button variant="primary" type="submit" className='ms-md-5'>
                                    Login
                                </Button>

                            }

                        </div>
                    </Form>

                </div>
            </div >

        </>
    )
}
