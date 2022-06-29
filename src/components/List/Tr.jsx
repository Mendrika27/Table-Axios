import axios from "axios";
import React, { useRef, useState } from "react";
import "../style/update.css"
export function Tr(props){
    let {id, name, username , email, phone, address,website, company}= props;
    const ref = useRef(null);
    const [nameValue, setNameValue] = useState(name);
    const [usernameValue, setUsernameValue] = useState(username);
    const [emailValue, setEmailValue] = useState(email);
    const [phoneValue, setPhoneValue] = useState(phone);
    const [companyValue, setCompanyValue] = useState(company);
    const [websiteValue, setWebsiteValue] = useState(website);
    const [addressValue, setAddressValue] = useState(address);
    function displayWindow() {
        ref.current.style.display = "block";
    }
    function close() {
        ref.current.style.display = "none";
    }
    function handleChange(e) {
        setNameValue(e.target.value)
    }
    function handleChangeUser(e) {
        setUsernameValue(e.target.value)
    }
    function handleChangeEmail(e) {
        setEmailValue(e.target.value)
    }
    function handleChangePhone(e) {
        setPhoneValue(e.target.value)
    }
    function handleChangeWeb(e) {
        setWebsiteValue(e.target.value)
    }
    function handleChangeCom(e) {
        setCompanyValue(e.target.value)
    }
    function handleChangeAddres(e) {
        setAddressValue(e.target.value)
    }
    function updateData(e) {
        e.preventDefault();
        ref.current.style.display = "none";
        const promise = axios.patch("https://jsonplaceholder.typicode.com/users/1", {
            name : nameValue,
            username : usernameValue,
            email : emailValue,
            address : {
                street : addressValue,
                city : "",
                zipcode :"",
                geo : {
                    lat : "",
                    lng : "",
                }
            },
            phone : phoneValue,
            website : websiteValue,
            company : {
                name : companyValue,
                catchPhrase : "",
                bs : ""
            }
        })

        promise.then((response)=>{
            console.log(response);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    return(
        <>
            <tr onClick={displayWindow}>
                <td>{name}</td>
                <td>{username}</td>
                <td>{email}</td>
                <td>{address}</td>
                <td>{phone}</td>
                <td>{website}</td>
                <td>{company}</td>
            </tr>
            <div className="container2 modal" ref={ref}>
                <div className="animate">
                    <form>
                        <span onClick={close} class="close" title="Close Modal">&times;</span>
                        <div className="form-group">
                            <label htmlFor="">identifiant :</label>
                            <input type="text" name="" id="" value={id}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Name :</label>
                            <input type="text" name="" id="" value={nameValue} onChange={handleChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Username :</label>
                            <input type="text" name="" id="" value={usernameValue} onChange={handleChangeUser}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Email :</label>
                            <input type="text" name="" id="" value={emailValue} onChange={handleChangeEmail}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Phone :</label>
                            <input type="text" name="" id="" value={phoneValue} onChange={handleChangePhone}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Address :</label>
                            <input type="text" name="" id="" value={addressValue} onChange={handleChangeAddres}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Website :</label>
                            <input type="text" name="" id="" value={websiteValue} onChange={handleChangeWeb}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Company :</label>
                            <input type="text" name="" id="" value={companyValue} onChange={handleChangeCom}/>
                        </div>
                        <button type="submit" id="close" onClick={updateData}>Update</button>
                    </form>
                </div>
            </div>
        </>
    )
}