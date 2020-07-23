import React from 'react'
import './Landing.css'
import ClearSpace from '../../components/clearSpace/ClearSpace'
const Landing = () =>{
    return(
        <div className="landing">
            <ClearSpace height="60px"></ClearSpace>
            <div className="first">
                <h1>First section</h1>
            </div>
            <div className="second">
                <h1>Second section</h1>
            </div>
        </div>
    )
}

export default Landing