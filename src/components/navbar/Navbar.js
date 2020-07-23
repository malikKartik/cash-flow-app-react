import React from 'react'
import './Navbar.css'
import Button from '@material-ui/core/Button'
const Navbar = (props) =>{
    const [disabledButton,setDisabledButton] = React.useState("Home")
    return(
        <div className="navbar">
            <div className="nav-left">
                <Button style={{color:"white"}} disabled={disabledButton==="Dashboard"?true:false} onClick={()=>setDisabledButton("Dashboard")}>Dashboard</Button>
                <Button style={{color:"white"}} disabled={disabledButton==="About"?true:false} onClick={()=>setDisabledButton("About")}>About</Button>
                <Button style={{color:"white"}} disabled={disabledButton==="Home"?true:false} onClick={()=>setDisabledButton("Home")}>Home</Button>
            </div>
            <div className="nav-right">
                <Button className="nav-right-button" onClick={()=>props.setShowSignIn(true)}>Login</Button>
                <div className="nav-avatar">

                </div>
            </div>
        </div>
    )
}

export default Navbar