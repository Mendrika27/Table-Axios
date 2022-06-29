import axios from "axios";
import React, { useRef, useState } from "react";
import "./style/modal.css"

export default function Modal() {
    const ref = useRef(null);
    const nameRef = useRef(null);
    const usernameRef = useRef(null);
    const EmailRef = useRef(null);
    const PhoneRef = useRef(null);
    const AddressRef = useRef(null);
    const CompanyRef = useRef(null);
    const WebsiteRef = useRef(null);
    function displayWindow() {
        ref.current.style.display = "block";
    }
    function close() {
        ref.current.style.display = "none";
    }
    function sendData(e) {
        e.preventDefault();
        ref.current.style.display="none";
        const promise = axios.post("https://jsonplaceholder.typicode.com/users", {
            name : nameRef.current.value,
            username : usernameRef.current.value,
            email : EmailRef.current.value,
            address : {
                street : AddressRef.current.value,
                city : "",
                zipcode :"",
                geo : {
                    lat : "",
                    lng : "",
                }
            },
            phone :PhoneRef.current.value,
            website :WebsiteRef.current.value,
            company :{
                name : CompanyRef.current.value,
                catchPhrase : "",
                bs : ""
            }
        })
        promise.then((response)=>{
            console.log(response)
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    return(
        <>
            <div className="container1 modal" ref={ref} >
                <div className="animate">
                    <form>
                        <span onClick={close} class="close" title="Close Modal">&times;</span>
                        <div className="form-group">
                            <label htmlFor="">Name :</label>
                            <input type="text" name="" id="" ref={nameRef}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Username :</label>
                            <input type="text" name="" id="" ref={usernameRef}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Email :</label>
                            <input type="text" name="" id="" ref={EmailRef}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Phone :</label>
                            <input type="text" name="" id="" ref={PhoneRef}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Website :</label>
                            <input type="text" name="" id="" ref={WebsiteRef}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Address :</label>
                            <input type="text" name="" id="" ref={AddressRef}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Company :</label>
                            <input type="text" name="" id="" ref={CompanyRef}/>
                        </div>
                        <button type="submit" onClick={sendData} id="close">Add User</button>
                    </form>
                </div>
            </div>
            <button className="add-content" onClick={displayWindow}>Add User</button>
        </>
    )
}