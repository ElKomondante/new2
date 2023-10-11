import "./style.css"
import { HOCUsage } from "../HOC";
import { ISign } from "../../types"
import { useState } from 'react'


const NewSign = (props:ISign)=>{
    const { isActive} = props;
    const [content, setContent] = useState('')
    return(
        <div className="body">
            <div className="header">
                <div id="main-block" style={{width:'100%',height:'60px', margin:'50px auto',display:'flex'}}>
                    <HOCUsage/>
                    <div id="middle-block" style={{width:'100%',height:'100%',display:'flex'}}>
                        <input
                        placeholder= "Search"
                        style={{width:'100%',border:'none',backgroundColor:'rgb(36, 54, 167)', outline:'none',color:'white'}}
                        ></input>
                    <div id="search-icon" style={{width:'7%',backgroundColor:'#2436a7', height:'100%',display:'flex', alignItems:'center'}}>
                        <img src="https://img.icons8.com/?size=1x&id=x1JJ1aoxAQAr&format=png" alt="logo" style={{width:'33%',height:'50%',margin:'0 auto',cursor:'pointer'}}/>
                    </div>
            </div>
        </div>
            </div>    
            <div className="title">
                <h4 className="h4">Back to home</h4>
                <h2 className="h2">Sign In</h2>
            </div>
            <div className="content-signin">
                <div className="input-container">
                    <label style={{padding:"10px"}}>Email</label>
                    <br/>
                    <input
                    placeholder="Email"
                    style={{padding: '10px 15px', margin: "10px", width:"80%",height:"20px",border:"none"}}
                    type="text"
                    required
                    value={content}
                    onChange={(e)=> setContent(e.target.value)}/>
                </div>
                <div className="input-container">
                    <label style={{padding:"10px"}}>Password</label>
                    <br/>
                    <input
                    placeholder="Password"
                    style={{padding: '10px 15px', margin: "10px", width:"80%",height:"20px",border:"none"}}
                    type="text"
                    required
                    value={content}
                    onChange={(e)=> setContent(e.target.value)}/>
                    <br/>
                    <a href="https://www.google.com"  className="forgot-password">Forgot password?</a>
                </div>
                    <button className="button-signin" >Sign In</button>
                    <br/>
                    <div className="link-under-button">Don't late <a href="https://www.google.com" style={{marginLeft:'7px'}}>Sign In</a></div>
                </div>
            <div className="footer">
                <div className="footer-content">©1998–2023</div>
                <div className="footer-content"> Content available under a Creative Commons license.</div>
            </div>
        </div>
        
    )
}

export{ NewSign }