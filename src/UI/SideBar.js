//Example code from:
//https://medium.com/javascript-in-plain-english/create-a-reusable-sidebar-component-with-react-d75cf48a053a
//Used to create SideBar for Dash

//https://react-icons.github.io/react-icons/icons?name=io
//Used it to get the icons

import "../App.css";
import React from "react";
import { IoIosMail, IoMdCalendar, IoMdSettings, IoIosQuote, IoIosPartlySunny, IoIosBook} from 'react-icons/io';

export default function SideBar(props) {
    const {width, height, toggleSettings, toggleMail, toggleQuote, toggleWeather, toggleCalendar, toggleNews} = props;
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
                {/* Settings section */}
                <div className="content">
                    <button
                        onClick={toggleSettings()}
                        className="button"
                    >
                        <IoMdSettings/>
                    </button>
                </div>
                {/* Email section */}
                <div className="content">
                    <button
                        onClick={toggleMail()}
                        className="button"
                    >
                        <IoIosMail/>
                    </button>
                </div>
                <div className="content">
                    <button
                        onClick={toggleCalendar()}
                        className="button"
                    >
                    <IoMdCalendar/>
                    </button>
                </div>
                {/* Quote section */}
                <div className="content">
                    <button
                        onClick={toggleQuote}
                        className="button"
                    >
                        <IoIosQuote/>
                    </button>
                </div>
                {/* Weather section */}
                <div className="content">
                    <button
                        onClick={toggleWeather()}
                        className="button"
                    >
                        <IoIosPartlySunny/>
                    </button>
                </div>
                {/* News section */}
                <div className="content">
                    <button
                        onClick={toggleNews()}
                        className="button"
                    >
                        <IoIosBook/>
                    </button>
                </div>
            </div>
        </React.Fragment>
    );
};
