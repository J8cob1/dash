// https://bitworking.github.io/react-gsap/#installation
// Read documents in the above links, learn how to use gsap to make project has animation

import React, { Component } from 'react'
import {Controls, PlayState, Tween} from 'react-gsap'
import './WelcomeStyle.css'

class Welcome extends Component {
    render() {
        return (
            <div>
                {/* This part is 'W' first */}
                <Tween 
                    from={{x: '150px'}}
                    to={{x: '-150px', y: '10px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeOne'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '-140px', y: '11px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeTwo'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '-130px', y: '12px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeThree'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '-120px', y: '13px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeFour'/>
                </Tween>

                {/* This part is 'W' second */}
                <Tween 
                    from={{x: '150px'}}
                    to={{x: '-110px', y: '12px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeFive'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '-100px', y: '11px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeSix'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '-90px', y: '10px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeSeven'/>
                </Tween>

                {/* This part is 'W' third */}
                <Tween 
                    from={{x: '150px'}}
                    to={{x: '-80px', y: '11px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeEight'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '-70px', y: '12px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeNine'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '-60px', y: '13px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeTen'/>
                </Tween>

                {/* This part is 'W' four */}
                <Tween 
                    from={{x: '150px'}}
                    to={{x: '-50px', y: '12px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeEleven'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '-40px', y: '11px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeTwelve'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '-30px', y: '10px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeThirteen'/>
                </Tween>

                {/* This part is 'E' first */}
                <Tween 
                    from={{x: '150px'}}
                    to={{x: '-10px', y: '10px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeEOne'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '0px', y: '10px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeETwo'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '10px', y: '10px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeEThree'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '20px', y: '10px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeEFour'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '30px', y: '10px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeEFive'/>
                </Tween>

                {/* This part is 'E' second */}
                <Tween 
                    from={{x: '150px'}}
                    to={{x: '-10px', y: '20px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeESix'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '-10px', y: '20px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeESeven'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '-10px', y: '20px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeEEight'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '-10px', y: '25px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeENine'/>
                </Tween>

                {/* This part is 'E' third */}
                <Tween 
                    from={{x: '150px'}}
                    to={{x: '0px', y: '20px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeETen'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '10px', y: '20px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeEEleven'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '20px', y: '20px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeETwelve'/>
                </Tween>

                {/* This part is 'E' fourth  */}
                <Tween 
                    from={{x: '150px'}}
                    to={{x: '0px', y: '25px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeEThirteen'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '10px', y: '25px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeEFourteen'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '20px', y: '25px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeEFifteen'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '30px', y: '25px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeESixteen'/>
                </Tween>

                {/* This part is 'L' first */}
                <Tween 
                    from={{x: '150px'}}
                    to={{x: '0px', y: '10px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeLFirst'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '0px', y: '20px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeLSecond'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '0px', y: '30px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeLThird'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '0px', y: '40px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeLFourth'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '0px', y: '40px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeLFifth'/>
                </Tween>

                {/* This part is 'L' second */}
                <Tween 
                    from={{x: '150px'}}
                    to={{x: '10px', y: '40px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeLSixth'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '20px', y: '40px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeLSeventh'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '30px', y: '40px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeLEighth'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '40px', y: '40px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeLNineth'/>
                </Tween>

                {/* This part is 'C' first */}
                
            </div>
        )
    }
}

export default Welcome

