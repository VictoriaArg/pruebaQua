import React, { useState, useEffect } from 'react';
import ActionNav from './ActionNav';
import '../styles/SecondaryWindow.css'

function SecondaryWindow(props) {
    const [update, setUpdate] = useState(props.content)
    const modules = Object.entries(props.data)
    const [moduleId, getId] = useState(1);
    const [position, setPosition] = useState(0);
    

    useEffect(() => {
        setUpdate(props.data)
    }, [update])

    const handleClick = (e) => {
       let clicked = e.target
       let arrayPosition = clicked.id - 1
       setPosition(arrayPosition)
       getId(clicked.id)
    }
    
    return (
        <div className="sec-window-container">
            <div className="sec-nav">{modules && modules.map(module => (
                    <div id={module[0].slice(15)} onClick={handleClick} className="module">
                        <h5 id={module[0].slice(15)}>Module {module[0].slice(15)}</h5>
                    </div>
                ))}</div>
            <h4>Number of users at Module {moduleId}:</h4>
            <div className="users">
                {modules[position][1] && modules[position][1].map(user => (
            <div className="user-btn">
                <h5>User {user.slice(1, 3)}</h5>
            </div>))}
            </div>
            <div>
                <ActionNav />
            </div>
        </div>
    )
}

export default SecondaryWindow