import { NAVUsage } from "../HOC";

const Tabs=(props:any) => {
    return(
    <div style={{width:'90%',height:'600px', backgroundColor:'#ededed', margin:'0 auto',marginBottom:'50px'}}>
        <h3 style={{fontFamily:'monospace',padding:'20px'}}>Tabs</h3>
            <div  style={{width:'80%',height:'70px',marginLeft:'40px',marginTop:'70px', borderBottom:'3px solid rgb(158 158 158 / 22%)',display:'flex'}}>
            <NAVUsage/>
            </div>
            <div  style={{width:'80%',height:'70px',marginLeft:'40px',marginTop:'70px', borderBottom:'3px solid rgb(158 158 158 / 22%)',display:'flex'}}>
            <NAVUsage
            />
            </div>
            <div  style={{width:'80%',height:'70px',marginLeft:'40px',marginTop:'70px', borderBottom:'3px solid rgb(158 158 158 / 22%)',display:'flex'}}>
            <NAVUsage/>
            </div>
    </div>
    )
    }
    export { Tabs }