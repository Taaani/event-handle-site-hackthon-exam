import React from 'react'
import { useLocation } from 'react-router-dom';
import { Card, Form, Button } from 'react-bootstrap';
export default function JoinEvent() {
    const location = useLocation();
    const eve = location.state.eve;
    console.log("get data", eve)

    const handleJoin = () => {
        window.notify("your are sucessfully join event", "success");
    }
    return (
        <>
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="card text-center">
                    <div className="card-header">
                        Your Selected Event
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{eve.title}</h5>
                        <p className="card-text">{eve.discription}</p>
                        <button href="#" className="btn btn-success" onClick={handleJoin}>Join nown</button>
                    </div>
                    <div className="card-footer text-muted d-flex">
                        <p className='fw-bold'>Date :</p>
                        <p>{eve.date}</p>

                    </div>
                </div>
            </div>

        </>
    )
}
