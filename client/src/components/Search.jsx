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
    const[code, setCode] = useState("try")

    const showData = async () =>{
        await api.getResumeByCode(code).then((x)=>{
            setData(x.data.data)
        })
        setShow(true)
    }

    return(
        <div className="search">
            <h1 className="intro-text">Search Your Resume</h1>
            <div>
                <h3 className="search-text">Enter username: <span><input type="text" name="name" className="search-box" onChange={(event) => {setCode(event.target.value)} }></input></span></h3>
                <p>Search try for dummy resume</p>
                <br />
                <button onClick={showData} className="btn btn-success btn-lg">Search</button>
                <h1 style={{fontWeight: "650"}}>OR</h1>
                <a href="#box"><button className="btn btn-primary btn-lg">Create</button></a>
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
        </div>
        
    );
}

export default Search