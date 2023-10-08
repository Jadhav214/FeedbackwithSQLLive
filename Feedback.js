
import {useState} from "react";
import axios from "axios";
export default function Feedback(){

    const[name, setName] = useState("");
    const[feedback,setFeedback] = useState("");

    const hName = (e) =>{setName(e.target.value);}
    const hFeedback = (e) => {setFeedback(e.target.value);}

    const save = (e)=>{
        e.preventDefault();
        let url = "http://localhost:9000/save";
        let data = {name, feedback};
        axios.post(url, data).then(res=>{
                alert("Feedback recorded Successfully \n Thank you!!");
                setName("");
                setFeedback("")
        }).catch(err=>{console.log(err)});
    }
    

    return(
        <>
        <div className="container">
            <h1>Feedback Form</h1>
            <form onSubmit={save}>
                <input type= "text" placeholder="Enter your name" className="form" onChange={hName} value={name}/>
                <textarea  rows={4} column={20} placeholder="Enter your feedback" onChange={hFeedback} value={feedback}></textarea>
                <input type="submit"/>
            </form>
        </div>
        </>
    );
}