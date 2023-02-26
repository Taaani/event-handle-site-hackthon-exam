import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { auth, firestore } from "../../Config/Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import { AiFillEye } from 'react-icons/ai';




const instialState = {

    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
}


export default function Register() {
    const [state, setState] = useState(instialState);
    const [isProcessesing, setIsProcessesing] = useState(false);



    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log("name =>", name)
        console.log("value =>", value)
        setState(state => ({ ...state, [name]: value }))

    }

    const handleSubmit = (event) => {

        event.preventDefault();
        const { fullName, email, password, conformPassword } = state;


        setIsProcessesing(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log("user :", user)
                // ...
                CreateUserProfile(user)
                window.notify("You are successfully Register", "success");

            })
            .catch((error) => {
                console.log(error);
                window.notify("failed to sigup", "error")
            }).finally(() => {
                setIsProcessesing(false)
            })
        // add data........
        const CreateUserProfile = async (user) => {
            const userData = {
                fullName: fullName,
                email: user.email,
                uid: user.uid,
                status: "active",
                dateCreated: serverTimestamp(),

            }
            try {
                await setDoc(doc(firestore, "users", user.uid), userData);
                console.log("your data is successfully added")
            } catch (error) {
                console.error("firestore error : ", error);

            }
        };


    }




    // console.log("Email=>", email);
    // console.log("name=>", fullName);
    // console.log("Password", password);
    // handle form submission logic here


    return (

        <>

            <div className="signup-container">
                <div className="signup-card">
                    <h2 className='text-center'>Sign Up</h2>
                    <p className='text-center'>Create your account to get full access</p>
                    <Form onSubmit={handleSubmit}>

                        <Form.Group>
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder='Enter Name'
                                name='fullName'
                                required
                                onChange={handleChange}

                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder='Enter Email'
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
                                required

                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder='Conform Password'
                                name='conformPassword'
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <div className='d-md-flex m-md-4'>

                            <div className="login-link m-2 m-md-2">
                                Already have an account? <Link className='text-decoration-none' to='/auth/login'>Login here</Link>
                            </div>
                            <Button variant="primary" type="submit" className='ms-1' disabled={isProcessesing ? true : false}>
                                {isProcessesing
                                    ? <div class="spinner-border text-secondary" role="status">

                                    </div>
                                    : "Sign up"

                                }
                            </Button>
                        </div>
                    </Form>

                </div>
            </div>

        </>
    )

}
