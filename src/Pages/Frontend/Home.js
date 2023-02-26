import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import heroImag from '../../Assets/Images/event_manage.jpg'
import heroImag2 from '../../Assets/Images/event_management2.jpg'
import heroImag3 from '../../Assets/Images/event3.jpg'
const Home = () => {
    return (
        <>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 mb-4 ">
                        <img src={heroImag} alt="Hero" style={{ width: "100%", height: "300" }} className='img-fluid' />
                    </div>
                    <div className="col-12">
                        <h3 className='text-center'>Event Management</h3>
                    </div>
                    <div className="col-12 px-md-5">
                        <p className='text-center'>Event management refers to the process of planning, organizing, and executing events such as weddings, corporate meetings, conferences, festivals, concerts, and other social gatherings. It involves various tasks such as budgeting, venue selection, guest list creation, coordinating with vendors, catering, transportation, security, and event marketing.

                            The main goal of event management is to create a memorable experience for attendees while meeting the specific objectives of the event host or organizer. Effective event management requires strong organizational and communication skills, attention to detail, creativity, and the ability to manage multiple tasks simultaneously.</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 mb-4 ">
                        <img src={heroImag2} alt="Hero" style={{ width: "100%", height: "300" }} className='img-fluid' />
                    </div>
                    <div className="col-12">
                        <h3 className='text-center'>Event Structure</h3>
                    </div>
                    <div className="col-12 px-md-5">
                        <p className='text-center'>Event management refers to the process of planning, organizing, and executing events such as weddings, corporate meetings, conferences, festivals, concerts, and other social gatherings. It involves various tasks such as budgeting, venue selection, guest list creation, coordinating with vendors, catering, transportation, security, and event marketing.

                            The main goal of event management is to create a memorable experience for attendees while meeting the specific objectives of the event host or organizer. Effective event management requires strong organizational and communication skills, attention to detail, creativity, and the ability to manage multiple tasks simultaneously.</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 mb-4 ">
                        <img src={heroImag3} alt="Hero" style={{ width: "100%", height: "300" }} className='img-fluid' />
                    </div>
                    <div className="col-12">
                        <h3 className='text-center'>Event planing</h3>
                    </div>
                    <div className="col-12 px-md-5">
                        <p className='text-center'>Event management refers to the process of planning, organizing, and executing events such as weddings, corporate meetings, conferences, festivals, concerts, and other social gatherings. It involves various tasks such as budgeting, venue selection, guest list creation, coordinating with vendors, catering, transportation, security, and event marketing.

                            The main goal of event management is to create a memorable experience for attendees while meeting the specific objectives of the event host or organizer. Effective event manag</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home