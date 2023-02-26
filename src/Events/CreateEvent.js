import React from 'react'
import { useState, useContext } from 'react'
import { auth, firestore } from "../Config/Firebase";
import { doc, setDoc, serverTimestamp, } from "firebase/firestore";
import { AuthContext } from '../context/AuthContext';

const instialState = {
    title: "",
    location: "",
    date: "",
    discription: "",
};

export default function CreateEvent() {
    const { state } = useContext(AuthContext);
    const { user } = state;

    const [estate, seteState] = useState(instialState);
    const [isProcessesing, setIsProcessesing] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();


        let { title, location, date, discription } = estate;
        title = title.trim();
        location = location.trim();

        discription = discription.trim();
        if (title.length < 3) {
            return window.notify("title length should be greater then 3", "error");
        }
        if (location.length < 3) {
            return window.notify("location length should be greater then 3", "error");
        }
        if (discription.length < 10) {
            return window.notify(
                "discription length should be greater then 10",
                "error"
            );
        }
        let randomids = Math.random().toString(36).slice(2);

        let formData = { title, location, date, discription };
        formData.dateCreate = serverTimestamp();
        formData.id = window.getRandomId();
        formData.status = "active";
        formData.createdby = {
            email: user.email,
            uid: user.uid,
        };



        createDocuments(formData);
    };

    const createDocuments = async (formData) => {
        setIsProcessesing(true)
        console.log(formData);
        try {
            await setDoc(doc(firestore, "events", formData.id), formData);
            window.notify("Event is successfully added", "success");
            setIsProcessesing(false)
        } catch (error) {
            console.error(error);
            window.notify("something want wrong", "warning");
            setIsProcessesing(false)
        }
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name);
        console.log(value);
        seteState({ ...estate, [name]: value })

    }
    return (
        <>
            <div className=" card my-5  mx-5 shadow-lg rounded-0 ">
                <div className="container ">
                    <div className="row mt-2">
                        <div className="col">
                            <h2 className="text-center ">Add your Event</h2>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="row py-4">
                            <div className="col-12 col-md-6 ">
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Enter Title</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        aria-describedby="emailHelp"
                                        placeholder="Title"
                                        name="title"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="col-12 col-md-6 ">
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Enter location</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        aria-describedby="emailHelp"
                                        placeholder="Location"
                                        name="location"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="col-12 col-md-6 ">
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Event Time</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        aria-describedby="emailHelp"
                                        placeholder=""
                                        name="date"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                        </div>
                        <div className="row mb-3">
                            <div className="col-12">
                                <label for="exampleInputEmail1">Enter Discription</label>
                                <textarea
                                    name="discription"
                                    className="form-control"
                                    cols="30"
                                    rows="10"
                                    placeholder="Discription"
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col text-center">
                                <button className="btn btn-danger w-50  mb-3">
                                    {isProcessesing
                                        ? <div class="spinner-border text-secondary" role="status">

                                        </div>
                                        : "Save"

                                    }
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}
