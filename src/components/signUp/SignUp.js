import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import CloseIcon from '@material-ui/icons/Close';
// import { useHistory } from "react-router-dom";
import './SignUp.css'
import illus from '../../assets/illus-2.svg'
const SignUp = (props) =>{
    // let history = useHistory();
    const goToSignUp = () =>{
        props.setShowSignUp(false)
        props.setShowSignIn(true)
    }
    const signUp = () =>{
        // history.push('/signup')
    }
    return(
        <div className="sign-up">
            <div className="sign-up-inner">
                <div className="sign-up-illustration">
                    <img src={illus} alt="sign up illustration" width="80%"/>
                </div>
                <div className="sign-up-form">
                    <div className="close-sign-up" onClick={()=>props.setShowSignUp(false)}>
                        <CloseIcon></CloseIcon>
                    </div>
                    <div className="signup-form-container">
                        <h1>SignUp</h1>
                        <div className="signup-form-main">
                            <TextField id="signup-username" label="Username" variant="outlined" fullWidth/><br/><br/>
                            <TextField id="signup-email" label="Email" variant="outlined" fullWidth/><br/><br/>
                            <TextField id="signup-password" label="Password" variant="outlined" fullWidth/><br/>
                            <Button variant="contained" color="primary" style={{marginTop:"40px"}} onClick={signUp}>SignUp</Button>
                            <p onClick={goToSignUp}>Already have an acount!</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default SignUp