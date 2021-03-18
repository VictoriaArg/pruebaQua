import React, { useState, useEffect } from 'react';
import axios from 'axios';

import SecondaryWindow from './SecondaryWindow';
import Loading from './Loading'
import '../styles/MainWindow.css'

function MainWindow() {
    const [newData, setNewData] = useState('')
    const [currentData, setCurrentData] = useState({})
    const [loading, setLoading] = useState(true)
    const [contentModule, setContentModule] = useState(true)
    const [on, turnOn] = useState(true)

    const getData = () => {
        setLoading(true)
           axios.get(`http://localhost:3001/`, { withCredentials: true })
           .then((resp) => {
            setCurrentData(resp.data)
            setLoading(false)
            console.log(currentData)
           })
        .catch((error) => {
           console.log(error, 'error while getting data')
        })
   }
   
    useEffect(() => {
        getData()
    }, [newData])

    const toggle = () => {
        setContentModule(!contentModule)
        turnOn(!on)
        console.log(contentModule)
    }

    return (
        <div className="window-container">
            <div className="nav">
                <div onClick={toggle} className={on ? "on" : "off"}>Content_Module</div>
                <div onClick={toggle} className={on ? "off" : "on"}>Auth_Module</div>
            </div>
            {loading ? <Loading /> :
            <div>
            { contentModule === true ?
            <SecondaryWindow data={currentData.content_module} content={contentModule}/> : 
            <SecondaryWindow data={currentData.auth_module} content={contentModule}/>
            }
            </div>
            }
        </div>
    )
}

export default MainWindow;