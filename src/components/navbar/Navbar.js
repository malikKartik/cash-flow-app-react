import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import Button from '@material-ui/core/Button'
const Navbar = (props) =>{
    const [disabledButton,setDisabledButton] = React.useState("Home")
    if(document.location.pathname==="/dashboard" && disabledButton!=="dashboard") setDisabledButton("dashboard")
    if(document.location.pathname==="/" && disabledButton!=="home") setDisabledButton("home")
    return(
        <div className="navbar">
            <div className="nav-left">
                <Link to="/dashboard" style={{textDecoration:"none"}}><Button style={{color:"white"}} disabled={disabledButton==="dashboard"?true:false} onClick={()=>setDisabledButton("dashboard")}>Dashboard</Button></Link>
                <Button style={{color:"white"}} disabled={disabledButton==="About"?true:false} onClick={()=>setDisabledButton("about")}>About</Button>
                <Link to="/" style={{textDecoration:"none"}}><Button style={{color:"white"}} disabled={disabledButton==="home"?true:false} onClick={()=>setDisabledButton("home")}>Home</Button></Link>
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