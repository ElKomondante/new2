import "./success.css"
import { HOCUsage } from "../HOC";


const Success = (props:any)=>{
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
                <h2 className="h2">Success</h2>
            </div>
            <div className="content">
                <h4 className="h4-content">Congratulations</h4>
                <h4 className="h4-content">You have successfully logged in</h4>
                <button className="button" >Go to Home</button>
            </div>
            <div className="footer">
                <div className="footer-content">©1998–2023</div>
                <div className="footer-content"> Content available under a Creative Commons license.</div>
            </div>
        </div>
        
    )
}

export{ Success }