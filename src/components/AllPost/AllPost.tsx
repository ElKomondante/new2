import { Menu } from "../BurgerMenu"
import './AllPostStyle.css'
import { useState } from "react"


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

const Tabs = ({component, children}: any) => {
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

const NAVPost = () => {
    return (
        <>
            <Tabs component={<All></All>} />
            <Tabs component={<Favorite></Favorite>} />
            <Tabs component={<Popular></Popular>} />
        </>
    )
}



const AllPost=(props:any) =>{
    return(
        <div className="body-allpost">
            <div className='header-allpost' style={{width:'100%'}}><Menu/></div>
            <div className="content-container-allpost">
                <h2 className="title-allpost">Blog</h2>
                <div className="nav-allpost">
                    <NAVPost/>
                </div>
                <div className="main-content-allpost">
                    <div className="left-content">
                        <div className="left-content-container">
                            <div className="left-container-pictures">
                                <img src="./images/Rectangle39.png"/>
                            </div>
                            <div className="left-container-data">April 20, 2021</div>
                            <h1 className="left-container-title">Astronauts prep for new solar arrays on nearly seven-hour spacewalk</h1>
                            <div className="left-container-buttons">
                                <div className="left-container-buttons-like-dislike">
                                    <img className="left-container-buttons-like" src="https://mywebicons.ru/i/png/a9dbd2a0cafdc9d59ce9d42585dbe8b7.png"/>
                                    <div className="count-like"> 10 </div>
                                    <img className="left-container-buttons-dislike" src="https://celes.club/pictures/uploads/posts/2023-06/1686666074_celes-club-p-risunok-dizlaik-risunok-46.png"/>
                                </div>
                                <div className="left-container-buttons-other">
                                    <img className="left-container-buttons-favorite" src="https://cdn.icon-icons.com/icons2/2091/PNG/512/bookmark_icon_128470.png"/>
                                    <img className="left-container-button-menu" src="https://cdn-icons-png.flaticon.com/512/60/60969.png"/>
                                </div>    
                            </div>
                        </div>
                        <div className="left-content-container">
                            <div className="left-container-pictures">
                                <img src="./images/Rectangle39.png"/>
                            </div>
                            <div className="left-container-data">April 20, 2021</div>
                            <h1 className="left-container-title">Astronauts prep for new solar arrays on nearly seven-hour spacewalk</h1>
                            <div className="left-container-buttons">
                                <div className="left-container-buttons-like-dislike">
                                    <img className="left-container-buttons-like" src="https://mywebicons.ru/i/png/a9dbd2a0cafdc9d59ce9d42585dbe8b7.png"/>
                                    <div className="count-like"> 10 </div>
                                    <img className="left-container-buttons-dislike" src="https://celes.club/pictures/uploads/posts/2023-06/1686666074_celes-club-p-risunok-dizlaik-risunok-46.png"/>
                                </div>
                                <div className="left-container-buttons-other">
                                    <img className="left-container-buttons-favorite" src="https://cdn.icon-icons.com/icons2/2091/PNG/512/bookmark_icon_128470.png"/>
                                    <img className="left-container-button-menu" src="https://cdn-icons-png.flaticon.com/512/60/60969.png"/>
                                </div>    
                            </div>
                        </div>
                        <div className="left-content-container">
                        <div className="left-container-pictures">
                                <img src="./images/Rectangle39.png"/>
                            </div>
                            <div className="left-container-data">April 20, 2021</div>
                            <h1 className="left-container-title">Astronauts prep for new solar arrays on nearly seven-hour spacewalk</h1>
                            <div className="left-container-buttons">
                                <div className="left-container-buttons-like-dislike">
                                    <img className="left-container-buttons-like" src="https://mywebicons.ru/i/png/a9dbd2a0cafdc9d59ce9d42585dbe8b7.png"/>
                                    <div className="count-like"> 10 </div>
                                    <img className="left-container-buttons-dislike" src="https://celes.club/pictures/uploads/posts/2023-06/1686666074_celes-club-p-risunok-dizlaik-risunok-46.png"/>
                                </div>
                                <div className="left-container-buttons-other">
                                    <img className="left-container-buttons-favorite" src="https://cdn.icon-icons.com/icons2/2091/PNG/512/bookmark_icon_128470.png"/>
                                    <img className="left-container-button-menu" src="https://cdn-icons-png.flaticon.com/512/60/60969.png"/>
                                </div>    
                            </div>
                        </div>
                        <div className="left-content-container">
                        <div className="left-container-pictures">
                                <img src="./images/Rectangle39.png"/>
                            </div>
                            <div className="left-container-data">April 20, 2021</div>
                            <h1 className="left-container-title">Astronauts prep for new solar arrays on nearly seven-hour spacewalk</h1>
                            <div className="left-container-buttons">
                                <div className="left-container-buttons-like-dislike">
                                    <img className="left-container-buttons-like" src="https://mywebicons.ru/i/png/a9dbd2a0cafdc9d59ce9d42585dbe8b7.png"/>
                                    <div className="count-like"> 10 </div>
                                    <img className="left-container-buttons-dislike" src="https://celes.club/pictures/uploads/posts/2023-06/1686666074_celes-club-p-risunok-dizlaik-risunok-46.png"/>
                                </div>
                                <div className="left-container-buttons-other">
                                    <img className="left-container-buttons-favorite" src="https://cdn.icon-icons.com/icons2/2091/PNG/512/bookmark_icon_128470.png"/>
                                    <img className="left-container-button-menu" src="https://cdn-icons-png.flaticon.com/512/60/60969.png"/>
                                </div>    
                            </div>
                        </div>
                        <div className="left-content-container">
                        <div className="left-container-pictures">
                                <img src="./images/Rectangle39.png"/>
                            </div>
                            <div className="left-container-data">April 20, 2021</div>
                            <h1 className="left-container-title">Astronauts prep for new solar arrays on nearly seven-hour spacewalk</h1>
                            <div className="left-container-buttons">
                                <div className="left-container-buttons-like-dislike">
                                    <img className="left-container-buttons-like" src="https://mywebicons.ru/i/png/a9dbd2a0cafdc9d59ce9d42585dbe8b7.png"/>
                                    <div className="count-like"> 10 </div>
                                    <img className="left-container-buttons-dislike" src="https://celes.club/pictures/uploads/posts/2023-06/1686666074_celes-club-p-risunok-dizlaik-risunok-46.png"/>
                                </div>
                                <div className="left-container-buttons-other">
                                    <img className="left-container-buttons-favorite" src="https://cdn.icon-icons.com/icons2/2091/PNG/512/bookmark_icon_128470.png"/>
                                    <img className="left-container-button-menu" src="https://cdn-icons-png.flaticon.com/512/60/60969.png"/>
                                </div>    
                            </div>
                        </div>
                        <div className="left-content-container">
                        <div className="left-container-pictures">
                                <img src="./images/Rectangle39.png"/>
                            </div>
                            <div className="left-container-data">April 20, 2021</div>
                            <h1 className="left-container-title">Astronauts prep for new solar arrays on nearly seven-hour spacewalk</h1>
                            <div className="left-container-buttons">
                                <div className="left-container-buttons-like-dislike">
                                    <img className="left-container-buttons-like" src="https://mywebicons.ru/i/png/a9dbd2a0cafdc9d59ce9d42585dbe8b7.png"/>
                                    <div className="count-like"> 10 </div>
                                    <img className="left-container-buttons-dislike" src="https://celes.club/pictures/uploads/posts/2023-06/1686666074_celes-club-p-risunok-dizlaik-risunok-46.png"/>
                                </div>
                                <div className="left-container-buttons-other">
                                    <img className="left-container-buttons-favorite" src="https://cdn.icon-icons.com/icons2/2091/PNG/512/bookmark_icon_128470.png"/>
                                    <img className="left-container-button-menu" src="https://cdn-icons-png.flaticon.com/512/60/60969.png"/>
                                </div>    
                            </div>
                        </div>
                    </div>
                    <div className="right-content">
                        <div className="right-content-container">
                            <div className="right-container-data">April 20, 2021</div>
                            <h1 className="right-container-title">Astronauts prep for new solar arrays on nearly seven-hour spacewalk</h1>
                            <div className="right-container-pictures">
                                    <img src="./images/Rectangle39.png"/>
                            </div>
                            <div className="right-container-buttons">
                                <div className="right-container-buttons-like-dislike">
                                    <img className="right-container-buttons-like" src="https://mywebicons.ru/i/png/a9dbd2a0cafdc9d59ce9d42585dbe8b7.png"/>
                                    <div className="count-like"> 10 </div>
                                    <img className="right-container-buttons-dislike" src="https://celes.club/pictures/uploads/posts/2023-06/1686666074_celes-club-p-risunok-dizlaik-risunok-46.png"/>
                                </div>
                                <div className="right-container-buttons-other">
                                    <img className="right-container-buttons-favorite" src="https://cdn.icon-icons.com/icons2/2091/PNG/512/bookmark_icon_128470.png"/>
                                    <img className="right-container-button-menu" src="https://cdn-icons-png.flaticon.com/512/60/60969.png"/>
                                </div>    
                            </div>
                        </div>
                        <div className="right-content-container">
                        <div className="right-container-data">April 20, 2021</div>
                            <h1 className="right-container-title">Astronauts prep for new solar arrays on nearly seven-hour spacewalk</h1>
                            <div className="right-container-pictures">
                                    <img src="./images/Rectangle39.png"/>
                            </div>
                            <div className="right-container-buttons">
                                <div className="right-container-buttons-like-dislike">
                                    <img className="right-container-buttons-like" src="https://mywebicons.ru/i/png/a9dbd2a0cafdc9d59ce9d42585dbe8b7.png"/>
                                    <div className="count-like"> 10 </div>
                                    <img className="right-container-buttons-dislike" src="https://celes.club/pictures/uploads/posts/2023-06/1686666074_celes-club-p-risunok-dizlaik-risunok-46.png"/>
                                </div>
                                <div className="right-container-buttons-other">
                                    <img className="right-container-buttons-favorite" src="https://cdn.icon-icons.com/icons2/2091/PNG/512/bookmark_icon_128470.png"/>
                                    <img className="right-container-button-menu" src="https://cdn-icons-png.flaticon.com/512/60/60969.png"/>
                                </div>    
                            </div>
                        </div>
                        <div className="right-content-container">
                        <div className="right-container-data">April 20, 2021</div>
                            <h1 className="right-container-title">Astronauts prep for new solar arrays on nearly seven-hour spacewalk</h1>
                            <div className="right-container-pictures">
                                    <img src="./images/Rectangle39.png"/>
                            </div>
                            <div className="right-container-buttons">
                                <div className="right-container-buttons-like-dislike">
                                    <img className="right-container-buttons-like" src="https://mywebicons.ru/i/png/a9dbd2a0cafdc9d59ce9d42585dbe8b7.png"/>
                                    <div className="count-like"> 10 </div>
                                    <img className="right-container-buttons-dislike" src="https://celes.club/pictures/uploads/posts/2023-06/1686666074_celes-club-p-risunok-dizlaik-risunok-46.png"/>
                                </div>
                                <div className="right-container-buttons-other">
                                    <img className="right-container-buttons-favorite" src="https://cdn.icon-icons.com/icons2/2091/PNG/512/bookmark_icon_128470.png"/>
                                    <img className="right-container-button-menu" src="https://cdn-icons-png.flaticon.com/512/60/60969.png"/>
                                </div>    
                            </div>
                        </div>
                        <div className="right-content-container">
                        <div className="right-container-data">April 20, 2021</div>
                            <h1 className="right-container-title">Astronauts prep for new solar arrays on nearly seven-hour spacewalk</h1>
                            <div className="right-container-pictures">
                                    <img src="./images/Rectangle39.png"/>
                            </div>
                            <div className="right-container-buttons">
                                <div className="right-container-buttons-like-dislike">
                                    <img className="right-container-buttons-like" src="https://mywebicons.ru/i/png/a9dbd2a0cafdc9d59ce9d42585dbe8b7.png"/>
                                    <div className="count-like"> 10 </div>
                                    <img className="right-container-buttons-dislike" src="https://celes.club/pictures/uploads/posts/2023-06/1686666074_celes-club-p-risunok-dizlaik-risunok-46.png"/>
                                </div>
                                <div className="right-container-buttons-other">
                                    <img className="right-container-buttons-favorite" src="https://cdn.icon-icons.com/icons2/2091/PNG/512/bookmark_icon_128470.png"/>
                                    <img className="right-container-button-menu" src="https://cdn-icons-png.flaticon.com/512/60/60969.png"/>
                                </div>    
                            </div>
                        </div>
                        <div className="right-content-container">   <div className="right-container-data">April 20, 2021</div>
                            <h1 className="right-container-title">Astronauts prep for new solar arrays on nearly seven-hour spacewalk</h1>
                            <div className="right-container-pictures">
                                    <img src="./images/Rectangle39.png"/>
                            </div>
                            <div className="right-container-buttons">
                                <div className="right-container-buttons-like-dislike">
                                    <img className="right-container-buttons-like" src="https://mywebicons.ru/i/png/a9dbd2a0cafdc9d59ce9d42585dbe8b7.png"/>
                                    <div className="count-like"> 10 </div>
                                    <img className="right-container-buttons-dislike" src="https://celes.club/pictures/uploads/posts/2023-06/1686666074_celes-club-p-risunok-dizlaik-risunok-46.png"/>
                                </div>
                                <div className="right-container-buttons-other">
                                    <img className="right-container-buttons-favorite" src="https://cdn.icon-icons.com/icons2/2091/PNG/512/bookmark_icon_128470.png"/>
                                    <img className="right-container-button-menu" src="https://cdn-icons-png.flaticon.com/512/60/60969.png"/>
                                </div>    
                            </div></div>
                        <div className="right-content-container">   <div className="right-container-data">April 20, 2021</div>
                            <h1 className="right-container-title">Astronauts prep for new solar arrays on nearly seven-hour spacewalk</h1>
                            <div className="right-container-pictures">
                                    <img src="./images/Rectangle39.png"/>
                            </div>
                            <div className="right-container-buttons">
                                <div className="right-container-buttons-like-dislike">
                                    <img className="right-container-buttons-like" src="https://mywebicons.ru/i/png/a9dbd2a0cafdc9d59ce9d42585dbe8b7.png"/>
                                    <div className="count-like"> 10 </div>
                                    <img className="right-container-buttons-dislike" src="https://celes.club/pictures/uploads/posts/2023-06/1686666074_celes-club-p-risunok-dizlaik-risunok-46.png"/>
                                </div>
                                <div className="right-container-buttons-other">
                                    <img className="right-container-buttons-favorite" src="https://cdn.icon-icons.com/icons2/2091/PNG/512/bookmark_icon_128470.png"/>
                                    <img className="right-container-button-menu" src="https://cdn-icons-png.flaticon.com/512/60/60969.png"/>
                                </div>    
                            </div></div>
                        </div>
                    </div>
                    <div style={{justifyContent:'space-between'}} className='content-footer'>
                        <div className='content-footer-left'>
                            <p>Back</p>
                            <img className='left-arrow' style={{cursor:'pointer'}} src='http://s1.iconbird.com/ico/2014/1/598/w48h481390846436left48.png'></img>
                        </div>
                        <div className="content-footer-middle">
                            <h2>1 2 3 ... 6</h2>
                        </div>
                        <div className='content-footer-right'>
                            <p style={{width:'100%', display:'flex', justifyContent:'end'}} >Forward</p>
                            <img className='right-arrow' style={{float: 'right', cursor:'pointer'}} src='http://s1.iconbird.com/ico/2014/1/598/w48h481390846449right48.png'></img>
                        </div>
                    </div> 
            </div>
            <div style={{marginTop:'1px'}}  className="footer">
                <div className="footer-content">©1998–2023</div>
                <div className="footer-content"> Content available under a Creative Commons license.</div>
            </div>
        </div>
    )
}
export { AllPost }