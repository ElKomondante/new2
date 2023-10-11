import { useState } from "react"
import "../Styles/style.css";

// Burger menu
const Button = (props: any) => {
    return (
        <button
        className="menu" 
        style={{backgroundColor:'#2436a7',height:'100%', display:'flex',alignItems:'center',border:'none', position:'relative'}}>
        <img src="https://support.seesnake.com/wp-content/uploads/2016/12/Menu-Icon.png" alt="menu" style={{width:'43px', height:'31px', display:'flex', margin:'0 auto'}}/>
        {props.children}</button>
    )
}
const Cross = (props: any) => {
    return (
        <button 
        className="cross" 
        style={{backgroundColor:'#2436a7',height:'55px', display:'flex',alignItems:'center',border:'none',position:'absolute',marginLeft:'-55px'}}>
        <img src="https://gagaru.club/uploads/posts/2023-02/1676450067_gagaru-club-p-raznotsvetnii-krestik-vkontakte-77.png" alt="cross" style={{width:'43px', height:'31px', display:'flex', margin:'0 auto'}}/>
        {props.children}</button>
    )
}
const HOC = ({component, children}: any) => {
    const [isActive, setIsActive] = useState(false)
    const handleClick = () => {
        setIsActive(!isActive)
    }
    return (
        
        // <div onClick={handleClick} style={{zIndex: isActive ? '10' : '11' || '5'}}>
        <div onClick={handleClick} >
        {component || children} 
        </div>
    )
}


// Tabs

const All = (props: any) => {
    return (
        <div className="nav-box">
        <h2 className="nav-box-text">ALL</h2>
        </div>
    )
}
const Favorite = (props: any) => {
    return (
        <div className="nav-box">
        <h2 className="nav-box-text">Favorite</h2>
        </div>
    )
}
const Popular = (props: any) => {
    return (
        <div className="nav-box">
        <h2 className="nav-box-text">Popular</h2>
        </div>
    )
}

const Nav = ({component, children}: any) => {
    const [isActive, setIsActive] = useState(false)
    const handleClick = () => {
        setIsActive(!isActive)
    }
    return (
        <div onClick={handleClick} style={{borderBottom : isActive ? '3px solid rgb(57 57 57 / 42%)' : '3px solid rgb(158 158 158 / 0%)', height:'70px'}}>
        {component || children} 
        </div>
    )
}


export { Button,Cross,HOC,Nav,All,Favorite,Popular}