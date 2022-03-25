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
        url: 'https://vk.com/shxmxn',
    },
    {
        icon: inst,
        label: 'shxmxn',
        url: 'https://www.instagram.com/shxmxn.online/',
    },
    {
        icon: vk,
        label: 'DJ MA GILLA',
        url: 'https://vk.com/dg_ma_gilla',
    },
    {
        icon: inst,
        label: 'DJ MA GILLA',
        url: 'https://www.instagram.com/damagilladj/',
    },
    // {
    //     icon: vk,
    //     label: 'Onodera',
    //     url: 'https://vk.com/onodera.whaaa',
    // },
    // {
    //     icon: inst,
    //     label: 'Onodera',
    //     url: 'https://www.instagram.com/onodera_whaaa/',
    // },
];

function App() {
    return (
        <div className="App">
            <div className="App-content">
                <img src={album} alt="album" className="App-image" draggable={false} />
                <Player />
            </div>
            <div className="App-right">
                <div className="App-vertical">WORK WITH GRAND PIANO</div>
                <div className="App-socials">
                    {socialLinks.map((link, idx) => (
                        <SocialLink {...link} key={idx} />
                    ))}
                </div>
            </div>
            <img src={logo} alt="logo" className="App-logo" />
        </div>
    );
}

export default App;
