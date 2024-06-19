import React, {useState} from "react";
import Button from "./Buttons";
import Service from "/public/Service.svg";


function Footer(){
   
    const [name,setName] = useState("Welcome🙏");
    const [mail,setMail] = useState("🙏");
    const [comment,setComment] = useState("🙏");



const submit = (event) => {
            
            event.preventDefault();
            
            setName(event.target[0].value);
            setMail(event.target[1].value);
            setComment(event.target[2].value);
         
        };



    return(
        <>
    
        <div className="component">
            <div className="leftdiv">
                <div>
                <p>{name + mail + comment}</p>
                </div>
                <Button/>
                
                <form method="GET" onSubmit={submit} action="/">
                    <div className="inputform">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name"></input>
                    </div>
                    <div className="inputform">
                        <label htmlFor="email">E-Mail</label>
                        <input type="email" name="email"></input>
                    </div>
                    <div className="inputform">
                        <label htmlFor="textarea">Text</label>
                        <textarea id="textarea" type="text" name="textarea"></textarea>
                    </div>
                    <button type="submit" className="submitbutton">Submit</button>
                </form>
            
            </div>

            <div className="rightdiv">
                <img src={Service} alt="serviceimg"></img>
            </div>
        </div>
        </>
    );
}

export default Footer