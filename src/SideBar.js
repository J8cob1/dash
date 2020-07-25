//Example code from:
//https://medium.com/javascript-in-plain-english/create-a-reusable-sidebar-component-with-react-d75cf48a053a
//Used to create SideBar for Dash

import "./SideBar.css";
import React from "react";
import { AiFillTwitterCircle } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';
import { BsChatQuote } from 'react-icons/bs';
import { WiCloudyWindy } from 'react-icons/wi';

export default function SideBar(props) {
    const {width, height, toggleTwitter, toggleMail, toggleQuote, toggleWeather} = props;
    const [xPosition, setX] = React.useState(-width);

    const toggleMenu = () => {
        if (xPosition < 0) {
            setX(0);
        } else {
            setX(-width);
        }
    };

    React.useEffect(() => {
        setX(0);
    }, []);

    return (
        <React.Fragment>
            <div
                className="side-bar"
                style={{
                    transform: `translatex(${xPosition}px)`,
                    width: width,
                    minHeight: height
                }}
            >
                <button
                    onClick={() => toggleMenu()}
                    className="toggle-menu"
                    style={{
                        transform: `translate(${width}px, 20vh)`
                    }}
                ></button>
                {/* Twitter section */}
                <div className="content">
                    <button
                        onClick={toggleTwitter()}
                        className="button"
                    >
                        <AiFillTwitterCircle/>
                    </button>
                </div>
                {/* Email section */}
                <div className="content">
                    <button
                        onClick={toggleMail()}
                        className="button"
                    >
                        <FiMail/>
                    </button>
                </div>
                {/* Quote section */}
                <div className="content">
                    <button
                        onClick={toggleQuote()}
                        className="button"
                    >
                        <BsChatQuote/>
                    </button>
                </div>
                {/* Weather section */}
                <div className="content">
                    <button
                        onClick={toggleWeather()}
                        className="button"
                    >
                        <WiCloudyWindy/>
                    </button>
                </div>
            </div>
        </React.Fragment>
    );
};