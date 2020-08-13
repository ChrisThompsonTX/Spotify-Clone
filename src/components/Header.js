import React from 'react';
import './header.css';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core'

function Header({ spotify }) {
    return (
        <div className="header">
            <div className="header__left">
                <SearchIcon />
                <input 
                    placeholder="Search for Artists, Songs, or Podcasts"
                    type="text"
                />
            </div>
            <div className="header__right">
                <Avatar src="" alt="" />
                <h4>Chris Thompson</h4>
            </div>
        </div>
    )
}

export default Header;
