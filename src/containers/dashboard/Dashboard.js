import React from 'react'
import ClearSpace from '../../components/clearSpace/ClearSpace'
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import DoneIcon from '@material-ui/icons/Done';
import './Dashboard.css'
const Dashbaord = () =>{
    return(
        <div className="dashboard">
            <ClearSpace height="60px"></ClearSpace>
            <div className="dashboard-container">
                <div className="transactions">
                    <div className="transaction">
                        <div className="amount-n-date">
                            <p>100 Rs <span>8th July 2020</span></p>
                        </div>
                        <hr/>
                        <div className="transaction-details">
                            <div>
                                <p>From: Kartik <br/>To: Prerna</p>
                            </div>
                            <div className="user-icons-container">
                                <div className="user-icons">
                                    <AccountBalanceWalletIcon></AccountBalanceWalletIcon>
                                    <DoneIcon></DoneIcon>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="transaction">
                        <div className="amount-n-date">
                            <p>100 Rs <span>8th July 2020</span></p>
                        </div>
                        <hr/>
                        <div className="transaction-details">
                            <div>
                                <p>From: Kartik <br/>To: Prerna</p>
                            </div>
                            <div className="user-icons-container">
                                <div className="user-icons">
                                    <AccountBalanceWalletIcon></AccountBalanceWalletIcon>
                                    <DoneIcon></DoneIcon>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="users">
                    <div className="user">
                        <div className="user-avatar-container">
                            <div className="user-avatar" style={{
                                backgroundColor:`rgba(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`}}></div>
                        </div>
                        <div className="user-name-email">
                            <h5>Kartik</h5>
                            <p>kartikmalik019@gmail.com</p>
                        </div>
                    </div>
                    <div className="user">
                        <div className="user-avatar-container">
                            <div className="user-avatar" style={{
                                backgroundColor:`rgba(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`}}></div>
                        </div>
                        <div className="user-name-email">
                            <h5>Prerna</h5>
                            <p>prernabudhraja8@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashbaord