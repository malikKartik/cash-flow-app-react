import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import CloseIcon from '@material-ui/icons/Close';
import './SignIn.css'
import illus from '../../assets/illus1.svg'
const SignIn = (props) =>{
    return(
        <div className="sign-in">
            <div className="sign-in-inner">
                <div className="sign-in-illustration">
                    <img src={illus} alt="sign in illustration" width="80%"/>
                </div>
                <div className="sign-in-form">
                    <div className="close-sign-in" onClick={()=>props.setShowSignIn(false)}>
                        <CloseIcon></CloseIcon>
                    </div>
                    <div className="signin-form-container">
                        <h1>SignIn</h1>
                        <div className="signin-form-main">
                            <TextField id="signin-username" label="Email/Username" variant="outlined" fullWidth/><br/><br/>
                            <TextField id="signin-password" label="Password" variant="outlined" fullWidth/><br/>
                            <Button variant="contained" color="primary" style={{marginTop:"40px"}}>SignIn</Button>
                            <p>Don't have an account!</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default SignIn