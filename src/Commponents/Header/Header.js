import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa';

import { useNavigate } from "react-router-dom";

import { AuthContext } from '../../context/AuthContext'

// fireBase 
import { signOut } from "firebase/auth";
import { auth, firestore } from "../../Config/Firebase";



export default function Header() {
    // const { authentication, setAuthentication } = useContext(AuthContext);
    // console.log(authentication);
    const navigate = useNavigate();
    const { state, dispatch } = useContext(AuthContext);
    const { isAuthanticated } = state;
    console.log("Authenticated =>", isAuthanticated)

    const handleLogout = () => {
        signOut(auth).then(() => {
            window.notify("you are Successfully logout", "success");
            dispatch({ type: "LOGOUT" });
            navigate("/");


        }).catch((error) => {
            window.notify("something want Wrong in logout", "warning")
        });


    }

    return (
        <nav className="navbar navbar-expand-lg bg-primary navbar-light sticky-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <h3 className='text-danger'>Eventbrite</h3>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/event" className="nav-link active" aria-current="page">Events</Link>
                        </li>



                    </ul>
                    <div className="d-flex justify-content-center align-items-center">
                        <form className="d-flex  border-dark" role="search">
                            <div className="position-relative border-bottom border-dark">
                                <div className="position-absolute d-flex">
                                    <span className='float-right pt-1' style={{ marginLeft: "178px" }}><FaSearch /></span>
                                </div>
                                <input className="form-control bg-transparent ps-0 rounded-0 border-0" style={{ borderBottom: "1px solid black" }} type="search" placeholder="Search Event" aria-label="Search" aria-describedby="inputGroup-sizing-sm" />
                            </div>
                        </form>
                        {isAuthanticated
                            ? <button className='btn btn-danger ms-2' onClick={handleLogout}>Logout</button>
                            : <Link className='m-0 px-4 btn btn-success ms-2' to='/auth/login'>Login</Link>
                        }

                    </div>
                </div>
            </div>
        </nav>
    )
}