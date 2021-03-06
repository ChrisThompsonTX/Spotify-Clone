import React from 'react';
import './sidebar.css';
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from '../DataLayer';
import { getTokenFromResponse } from "../spotify";


function Sidebar({ spotify }) {
    const [ {playlists} , dispatch ] = useDataLayerValue();
    console.log(playlists);


    const changePlaylist = (id) => {
        spotify.getPlaylist(id).then(response => {
            dispatch({
                type: "SET_DISCOVER_WEEKLY",
                discover_weekly: response,
            })
        })
    };

    return (
        <div className="sidebar">
            <img 
            className="sidebar__logo"
            src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" 
            alt="" 
            />
            <SidebarOption title="Home" Icon={HomeIcon} />
            <SidebarOption title="Search" Icon={SearchIcon} />
            <SidebarOption title="Your Library" Icon={LibraryMusicIcon} />

            <br />
            <strong className="sidebar__title" >PLAYLISTS</strong>

            <hr />

            {playlists?.items?.map((playlist) => (
                <SidebarOption changePlaylist={changePlaylist} id={playlist.id} title={playlist.name} />
            ))}
        </div>
    )
}

export default Sidebar
