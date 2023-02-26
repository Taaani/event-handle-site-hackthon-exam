import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// firestore
import { collection, getDocs, doc, setDoc, } from "firebase/firestore";
import { auth, firestore } from "../Config/Firebase";
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
export default function ShowEvent() {
    const navigate = useNavigate();

    const [documents, setDocuments] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const fatchDocuments = async () => {
        let array = [];

        const querySnapshot = await getDocs(collection(firestore, "events"));
        querySnapshot.forEach((doc) => {
            let data = doc.data();
            console.log("data=>", data);
            array.push(data);
        });

        setDocuments(array);
        setIsLoading(true)
    };
    console.log("documents =>", documents)

    useEffect(() => {
        fatchDocuments();
    }, []);


    const handleDetail = (eve) => {
        console.log("join wala eve =>", eve)
        navigate("/event/joinEvent", { state: { eve } })
    }
    return (
        <>
            {
                isLoading
                    ? <>
                        <div className="container py-3">
                            <div className="row mb-2">
                                <div className="col">
                                    <Link to="/event/createEvent" className='btn btn-warning rounded-0 float-end'>Create Event</Link>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12">
                                    {documents.map((eve, i) => {
                                        return (
                                            <div className="card px-3 py-2 border-0 shadow-lg rounded-0 mb-4" key={i}>
                                                <div className="row mb-1">
                                                    <div className="col-12">
                                                        <h4 className='text-center'>{eve.title}</h4>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-6 col-md-3 mb-1">
                                                        <span className='fw-bold'>ID :</span>
                                                    </div>
                                                    <div className="col-6 col-md-3 mb-1">
                                                        <span>{eve.id}</span>
                                                    </div>
                                                    <div className="col-6 col-md-3 mb-1">
                                                        <span className='fw-bold'>creator:</span>
                                                    </div>
                                                    <div className="col-6 col-md-3 mb-1">
                                                        <span>creator no</span>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-6 col-md-3 mb-1">
                                                        <span className='fw-bold'>Date:</span>
                                                    </div>
                                                    <div className="col-6 col-md-3 mb-1">
                                                        <span>{eve.date}</span>
                                                    </div>
                                                    <div className="col-6 col-md-3 mb-1">
                                                        <span className='fw-bold'>Time:</span>
                                                    </div>
                                                    <div className="col-6 col-md-3 mb-1">
                                                        <span>{dayjs(eve.dateCreate.seconds * 1000).format("DD/MM/YYYY")}</span>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-6 col-md-3 mb-1">
                                                        <span className='fw-bold'>Location:</span>
                                                    </div>
                                                    <div className="col-6 col-md-3 mb-1">
                                                        <span>{eve.location}</span>
                                                    </div>
                                                    <div className="col-6 col-md-3 mb-1">
                                                        <span className='fw-bold'>Attendees:</span>
                                                    </div>
                                                    <div className="col-6 col-md-3 mb-1">
                                                        <span>Attendees goes here</span>
                                                    </div>
                                                </div>
                                                <div className="row mb-1">
                                                    <div className="col-12">
                                                        <span className='fw-bold'>Description:</span><br />
                                                        <p>{eve.discription}</p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12 col-md-4 offset-md-4">
                                                        <button className='btn btn-warning rounded-0 w-100 ' onClick={() => { handleDetail(eve) }}>Join Event</button>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}

                                </div>
                            </div>

                        </div>


                    </>
                    : <div className='d-flex justify-content-center align-items-center mt-5'>

                        <div className="spinner-grow text-danger d-flex justify-content-center ms-1" role="status">
                        </div>
                        <div className="spinner-grow text-info d-flex justify-content-center ms-1" role="status">
                        </div>
                        <div className="spinner-grow text-danger d-flex justify-content-center ms-1" role="status">
                        </div>

                    </div>
            }
        </>
    )
}
