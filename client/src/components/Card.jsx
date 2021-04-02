import gsap from "gsap";
import { useEffect } from "react";

const tl = gsap.timeline({defaults: {ease: 'power1.out'}})

function Card(props){

    useEffect(() => {
        tl.to('.resume',{y: '0%',duration: 2 , delay:0.5})
        tl.to('.prof-img',{opacity: 1,duration: 1.5})
        tl.to('.list',{x: '0%', duration: 1, stagger: 0.5})
    })


    return(
        <div>
            <div className="resume">
                <h1 className="r-name">{props.name}</h1>
                <img className="prof-img" src={props.img_link} />
                {/* https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?cs=srgb&dl=pexels-linkedin-sales-navigator-2182970.jpg&fm=jpg */}
                <div className="list-1">
                    <ul className="list">
                        <h1 className="list-title">Skills</h1>
                        <h3><li className="list-item">{props.skill1}</li></h3>
                        <h3><li className="list-item">{props.skill2}</li></h3>
                    </ul>
                </div>
                <div className="list-2">
                    <ul className="list">
                        <h1 className="list-title">Awards/Certification</h1>
                        <h3><li className="list-item">{props.award1}</li></h3>
                        <h3><li className="list-item">{props.award2}</li></h3>
                    </ul>
                </div>
                <div className="list-3">
                    <ul className="list">
                        <h1 className="list-title">Education</h1>
                        <h3><li className="list-item">{props.education1}</li></h3>
                        <h3><li className="list-item">{props.education2}</li></h3>
                    </ul>
                </div>
                <div className="list-4">
                    <ul className="list">
                        <h1 className="list-title">Experience</h1>
                        <h3><li className="list-item">{props.exp1}</li></h3>
                        <h3><li className="list-item">{props.exp2}</li></h3>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Card