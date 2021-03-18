import React from 'react';
import { VscTrash } from "react-icons/vsc";
import { RiLightbulbLine } from "react-icons/ri";
import { FiPlusCircle } from "react-icons/fi";
import { IoChevronForward } from "react-icons/io5";
import '../styles/ActionNav.css'

function ActionNav() {
    return (
        <div className="action-nav">
            <div className="action-del"><h5>Delete</h5><VscTrash /></div>
            <div className="action-adv"><h5>Advice</h5><RiLightbulbLine/></div>
            <div className="action-cre"><h5>Create</h5><FiPlusCircle/></div>
            <div className="action-sub"><h5>Submit</h5><IoChevronForward /></div>
            
        </div>
    )
}

export default ActionNav