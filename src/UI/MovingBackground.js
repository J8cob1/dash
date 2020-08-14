//https://github.com/VincentGarreau/particles.js/
//For basic understanding of all the different options
import React from "react";
import Particles from 'react-particles-js';
function MovingBackground() {
    return (
        <div
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: -100,
                opacity: "70%"
            }}
        >
            <Particles
                params={{
                    particles: {
                        number: {
                            value: 200
                        },
                        color: {
                            value: "#000000"
                        },
                        shape: {
                            type: "circle",
                            stroke: {
                                width: 2,
                                color: "#000000"
                            }
                        },
                        size: {
                            value: 3,
                            random: true,
                        },
                        line_linked: {
                            enable: true,
                            distance: 125,
                            color: "#000000",
                            opacity: 0.3,
                            width: 0.5
                        },
                        move: {
                            enable: true,
                            speed: 1,
                            bounce: false,
                            random: true
                        }
                    }
                }}
            />
        </div>
    );
}

export default MovingBackground;