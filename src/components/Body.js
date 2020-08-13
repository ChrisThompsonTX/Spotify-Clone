import React from 'react';
import './body.css';
import Header from './Header';

function Body({ spotify }) {
    return (
        <div className="body">
            <Header spotify={spotify} />

            <div className="body__info">
                <img 
                    src="" 
                    alt="" 
                />
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>playlist....</p>
                </div>
            </div>
        </div>
    )
}

export default Body
