import React from 'react'
import './sidebarOption.css'

function SidebarOption({ title, Icon, id, changePlaylist }) {
    return (
        <div className="sidebarOption"  >
            { Icon && <Icon className="sidebarOption__icon" />}
            { Icon ? <h4>{title}</h4> : <p onClick={() => changePlaylist(id)} >{title}</p>}
        </div>
    )
}

export default SidebarOption
