import { useState } from "react";
import api from "../api";

function Create(){

    const [resume, setResume] = useState({
        name: "",
        img_link: "",
        skill1: "",
        skill2: "",
        award1: "",
        award2: "",
        education1: "",
        education2: "",
        exp1: "",
        exp2: "",
        code: ""
    });
    
    const changeEle = (event) => {
        const {name, value} = event.target;
        setResume(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        })
        console.log(resume);
    }

    const submitResume = () => {
        api.insertResume(resume).then(res => {
                alert("Component inserted successfully");
                setResume({
                    name: "",
                    img_link: "",
                    skill1: "",
                    skill2: "",
                    award1: "",
                    award2: "",
                    education1: "",
                    education2: "",
                    exp1: "",
                    exp2: "",
                    code: ""
                })}
        )
    }

    return(
        <div className="create-box">
            <div><h1>Create A Resume</h1></div>
            <div className="create">

                <div className="create-section">
                    <h3>Name</h3>
                    <input type="text" name="name" className="create-input" onChange={changeEle} value={resume.name}></input>
                    <br/>
                </div>
                <div className="create-section">
                    <h3>Image Link</h3>
                    <input type="text" name="img_link" className="create-input" onChange={changeEle} value={resume.img_link}></input>
                    <br/>
                </div>
                <div className="create-section">
                    <h3>Skills</h3>
                    <input type="text" name="skill1" className="create-input" onChange={changeEle} value={resume.skill1}></input>
                    <br /><br />
                    <input type="text" name="skill2" className="create-input" onChange={changeEle} value={resume.skill2}></input>
                    <br/>
                </div>
                <div className="create-section">
                    <h3>Awards/Certification</h3>
                    <input type="text" name="award1" className="create-input" onChange={changeEle} value={resume.award1}></input>
                    <br /><br />
                    <input type="text" name="award2" className="create-input" onChange={changeEle} value={resume.award2}></input>
                    <br/>
                </div>
                <div className="create-section">
                    <h3>Education</h3>
                    <input type="text" name="education1" className="create-input" onChange={changeEle} value={resume.education1}></input>
                    <br /><br />
                    <input type="text" name="education2" className="create-input" onChange={changeEle} value={resume.education2}></input>
                    <br/>
                </div>
                <div className="create-section">
                    <h3>Work experience</h3>
                    <input type="text" name="exp1" className="create-input" onChange={changeEle} value={resume.exp1}></input>
                    <br /><br />
                    <input type="text" name="exp2" className="create-input" onChange={changeEle} value={resume.exp2}></input>
                    <br/>
                </div>
                <div className="create-section">
                    <h3>Username</h3>
                    <input type="text" name="code" className="create-input" onChange={changeEle} value={resume.code}></input>
                    <br/>
                </div>

                <button type="submit" onClick={submitResume}>Submit</button>

            </div>
        </div>
    );
}

export default Create