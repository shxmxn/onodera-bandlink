import React from 'react';
import './App.scss';
import logo from 'Assets/Images/Logo.png';
import album from 'Assets/Images/album.png';
import vk from 'Assets/Images/vk.png';
import inst from 'Assets/Images/inst.png';
import SocialLink, { ISocialLink } from 'Components/SocialLink/SocialLink';
import Player from 'Components/Player/Player';

const socialLinks: Array<ISocialLink> = [
    {
        icon: vk,
        label: 'shxmxn',
        url: '',
    },
    {
        icon: inst,
        label: 'shxmxn',
        url: '',
    },
    {
        icon: vk,
        label: 'Oki Doki Rec',
        url: '',
    },
    {
        icon: inst,
        label: 'Oki Doki Rec',
        url: '',
    },
    {
        icon: vk,
        label: 'Onodera',
        url: '',
    },
    {
        icon: inst,
        label: 'Onodera',
        url: '',
    },
];

function App() {
    return (
        <div className="App">
            <div className="App-content">
                <img src={album} alt="album" className="App-image" draggable={false} />
                <div className="App-content-right">
                    <div className="App-vertical">Mirrors// Entourage</div>
                    <div className="App-socials">
                        {socialLinks.map((link) => (
                            <SocialLink {...link} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="App-player-holder">
                <Player />
            </div>
            <img src={logo} alt="logo" className="App-logo" />
        </div>
    );
}

export default App;
