import React from 'react';
import 'Components/SocialLink/SocialLink.scss';

export interface ISocialLink {
    label: string;
    url: string;
    icon: string;
}

const SocialLink: React.FC<ISocialLink> = ({ label, url, icon }) => {
    return (
        <a className="SocialLink" href={url} rel="noreferrer" target="_blank">
            <img src={icon} alt="icon" className="SocialLink-icon" draggable={false} />
            <div className="SocialLink-label">{label}</div>
        </a>
    );
};

export default SocialLink;
