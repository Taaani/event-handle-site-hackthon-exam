import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';




export default function Register() {
    const [state, setState] = useState("");




    const handleSubmit = (event) => {
        event.preventDefault();
        // const { fullName, email, password, conformPassword } = state;
        console.log("state =>", state);





    };

    return (

        <>

            <div className="signup-container px-3 px-md-0">
                <div className="forgot-card ">
                    <h2 className='text-center'>Forgot Password</h2>
                    <p className='text-center'>Enter your details to get access</p>
                    <Form onSubmit={handleSubmit}>


                        <Form.Group>
                            <Form.Label>Username or Email Address</Form.Label>
                            <Form.Control

                                type="email"
                                placeholder='Username / Email Address'
                                name='email'
                            // onChange={ }

                            />
                        </Form.Group>



                        <div className='d-flex justify-content-end mt-5'>


                            <Button variant="primary" type="submit" className='ms-md-5'>
                                Send Link
                            </Button>

                        </div>
                    </Form>

                </div>
            </div>

        </>
    )
}
