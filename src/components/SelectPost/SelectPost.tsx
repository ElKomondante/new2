import './SelectPostStyle.css'
import { Menu } from "../BurgerMenu"

const SelectPost=(props:any) => {
    return(
        <div className="body-selectpost">
            <div className='header_selectpost' style={{width:'100%'}}><Menu/></div>
            <div className='content-selectpost'>
                <div className='nav-selectpost'>
                    <h4 className='back'>Back</h4>
                    <div style={{padding: '17px'}}> | </div>
                    <h4 className='main-menu'>Main menu</h4>
                </div>
                <h1 className='title-selectpost'>Astronautus prep for new solar arrays on nearly seven-hour spacewalk</h1>
                <div className='img-container-selectpost'>
                    <img className='img-selectpost'  src='https://i.ytimg.com/vi/8cbPBle1ME0/maxresdefault.jpg'></img>
                </div>
                <div className='text-container-selectpost'>
                    <p className='text-selectpost'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet mollitia aliquam consequuntur debitis cum, sapiente accusamus! Tempora dolores incidunt eius minus, corrupti molestias non maiores quidem exercitationem suscipit asperiores nisi.</p>
                    <p className='text-selectpost'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quidem totam voluptatibus assumenda, maxime facilis harum, voluptatum adipisci beatae ex reiciendis! Eligendi hic officiis libero dignissimos aut asperiores quod omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci cum quod ut vitae quas dolore neque eum error deleniti? Culpa eveniet accusamus impedit, laborum quae quam pariatur facilis. Minima, corrupti.</p>
                    <p className='text-selectpost'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim in ut voluptas! Corporis ut fugiat odio recusandae, voluptatem exercitationem tempora laborum quae amet nihil! Esse, amet? Porro eveniet dignissimos facere. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nihil debitis porro maiores accusantium ipsa, qui neque minus nam ducimus laborum maxime voluptatum, culpa rerum commodi iusto nemo. Ut, reiciendis?</p>
                    <p className='text-selectpost'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut nobis corrupti quidem temporibus rem! Quidem odit earum corrupti esse sequi similique nobis, sint quibusdam autem architecto expedita maxime possimus. Ipsam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos voluptate explicabo suscipit, tenetur dolore neque accusantium dolor, ex impedit assumenda vero eos soluta corporis error et totam hic, nulla porro! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex reprehenderit fugiat officiis nemo mollitia, distinctio explicabo harum modi quidem aliquid recusandae quibusdam at autem nihil obcaecati dolores! Similique, amet nobis?</p>
                    <p className='text-selectpost'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum minima delectus reiciendis adipisci quaerat, architecto beatae dolorum totam laborum iure fugiat perferendis doloribus neque sint, earum aperiam vero laudantium eum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, nihil est laudantium ipsa at veritatis adipisci repellendus quam aut ullam! Non eaque quos sed cumque delectus facere ducimus accusantium exercitationem? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet ducimus similique laudantium sequi qui ab ipsum, explicabo numquam eum itaque corporis accusamus minus voluptate voluptatum! Alias nisi doloremque quasi quos?</p>
                </div>
                <div className='container-buttons-selectpost'>
                        <div className="container">
                            <div className="center">
                                <button className="btn">
                                    <svg width="180px" height="60px" viewBox="0 0 180 60" className="border">
                                        <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
                                        <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
                                    </svg>
                                    <span>Like</span>
                                </button>
                            </div>
                        </div>
                        <div className="container">
                            <div className="center">
                                <button className="btn">
                                    <svg width="180px" height="60px" viewBox="0 0 180 60" className="border">
                                        <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
                                        <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
                                    </svg>
                                    <span>Dislike</span>
                                </button>
                            </div>
                        </div>
                        <div className="container">
                            <div className="center">
                                <button className="btn">
                                    <svg width="180px" height="60px" viewBox="0 0 180 60" className="border">
                                        <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
                                        <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
                                    </svg>
                                    <span>Favorite</span>
                                </button>
                            </div>
                        </div>
                </div>
                <div className='content-footer'>
                    <div className='footer-left'>
                        <p>Back</p>
                        <img className='left-arrow' style={{cursor:'pointer'}} src='http://s1.iconbird.com/ico/2014/1/598/w48h481390846436left48.png'></img>
                    </div>
                    <div className='footer-right'>
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
    export { SelectPost }