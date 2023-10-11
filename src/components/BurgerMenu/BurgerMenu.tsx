import { useState } from "react";
import { HOCUsage } from "../HOC";

const Menu=(props:any)=>{
    const handleClick = () => {
        
    }    
    return(
        <div id="main-block" style={{width:'100%',height:'55px', margin:'50px auto',display:'flex'}}>
            <HOCUsage/>
            {/* <button
            onClick={handleClick}
            id="menu-button" 
            style={{width:'6%',backgroundColor:'#2436a7',height:'100%', display:'flex',alignItems:'center',border:'none'}}>
            <img src="https://support.seesnake.com/wp-content/uploads/2016/12/Menu-Icon.png" alt="menu" style={{width:'43px', height:'31px', display:'flex', margin:'0 auto'}}/>    
            </button> */}
            <div id="middle-block" style={{width:'80%',height:'100%',display:'flex'}}>
                <input
                placeholder= "Search"
                style={{width:'92%',border:'none',backgroundColor:'#5463ca', outline:'none',color:'white'}}
                ></input>
                <div id="search-icon" style={{width:'8%',backgroundColor:'#2436a7', height:'100%',display:'flex', alignItems:'center'}}>
                <img src="https://img.icons8.com/?size=1x&id=x1JJ1aoxAQAr&format=png" alt="logo" style={{width:'33%',height:'50%',margin:'0 auto',cursor:'pointer'}}/>
                </div>
            </div>
            <div id="username" >
            <div style={{width:'230px',height:'55px', backgroundColor:'#2436a7', margin:'0 auto', display:'flex'}}>
            <div style={{display:'flex', margin:'0 auto', alignItems:'center'}}>
            <div style={{width:'42px',height:'35px', fontSize:'30px',textAlign:'center',display:'flex',alignItems:'center',justifyContent:'center',color:'#c9cde9'}} >AM</div>
            <div style={{fontSize:'18px', marginLeft:'20px', color:'#c9cde9'}} >Artem Malkin</div>
            </div>
        </div>
            </div>
        </div>
    )
    
}

export { Menu }

