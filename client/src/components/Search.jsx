import { set } from "mongoose";
import { useState } from "react";
import api from "../api";
import Card from "./Card";

function Search(){

    const[show, setShow] = useState(false);
    const[dataResume, setData] = useState({
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
    })
    const[code, setCode] = useState("dragon")

    const showData = () =>{
        api.getResumeByCode(code).then((x)=>{
            setData(x.data.data)
        })
        setShow(true)
    }

    return(
        <div className="search">
            <h1>Search for your Resume:</h1>
            <div className="search-inp">
                <h3 style={{margin: "20px"}}>Enter username</h3>
                <input type="text" name="name" onChange={(event) => {setCode(event.target.value)} }></input>
                <button onClick={showData} className="bttn-style">RESUME</button>
                {show === true ? <Card 
                    name={dataResume.name}
                    img_link= {dataResume.img_link}
                    skill1= {dataResume.skill1}
                    skill2= {dataResume.skill2}
                    award1= {dataResume.award1}
                    award2= {dataResume.award2}
                    education1= {dataResume.education1}
                    education2= {dataResume.education2}
                    exp1= {dataResume.exp1}
                    exp2= {dataResume.exp2}
                    code= {dataResume.code}
                /> : null}
                <br/>
            </div>
            <div className="about">
                <h3>An animated WEB page in just 1 minute</h3>
                <ol>
                    <h3><li>Fill the form ➡ </li></h3>
                    <h3><li>Fill the Resume Code above ⬆</li></h3>
                </ol>
            </div>
            <div className="about">
                <h3>To see creator's resume</h3>
                <ol>
                    <h3><li>Enter username: yash</li></h3>
                    <h3><li>OR just click on resume</li></h3>
                    <h3><li>Enter uresname: trial </li></h3>
                    <h3><li>TO SEE A DUMMY resume</li></h3>
                </ol>
            </div>
        </div>
        
    );
}

export default Search