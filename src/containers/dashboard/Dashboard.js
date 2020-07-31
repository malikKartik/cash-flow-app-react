import React from 'react'
import ClearSpace from '../../components/clearSpace/ClearSpace'
import DashboardNav from '../../components/dashboardNav/DashboardNav'
import Transaction from '../../components/dashboardUtils/transaction'
import AddTransaction from '../../components/dashboardUtils/AddTransaction'
import './Dashboard.css'
const Dashboard = () =>{
    const [currentTab,setCurrentTab] = React.useState("transactions")

    const renderTransactionsTabContent = () =>{
        switch(currentTab){
            case 'transactions':
                return [0,0].map(item=>{return(<Transaction></Transaction>)})
            case 'stransactions':
                return (<h1>Simplified Transaction</h1>)
            case 'add':
                return (<AddTransaction></AddTransaction>)
            default:
                return (<p>Something is not right</p>)
        }
    }
    return(
        <div className="dashboard">
            <ClearSpace height="60px"></ClearSpace>
            <div className="dashboard-container">
                <div className="transactions">
                    <DashboardNav currentTab={currentTab} setCurrentTab={setCurrentTab}></DashboardNav>
                    {/* {currentTab==="transactions"?:null} */}
                    {renderTransactionsTabContent()}
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

export default Dashboard