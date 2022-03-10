import React from 'react';
import { ReactComponent as Prev } from 'Assets/Icons/prev.svg';
import { ReactComponent as Next } from 'Assets/Icons/next.svg';
import telegram from 'Assets/Images/telegram.png';
import 'Components/Player/Player.scss';

const Player: React.FC = () => {
    return (
        <div className="Player">
            <div className="Player-label">слушать</div>
            <a className="Player-controls" href="/" rel="noreferrer" target="_blank">
                <Prev />
                <div className="Player-circle">
                    <img src={telegram} alt="icon" />
                </div>
                <Next />
            </a>
        </div>
    );
};

export default Player;
