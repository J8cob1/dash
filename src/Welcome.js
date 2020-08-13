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
                    to={{x: '-200px', y: '35px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeOne'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '-190px', y: '36px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeTwo'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '-180px', y: '37px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeThree'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '-170px', y: '38px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeFour'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '-160px', y: '39px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeFourOne'/>
                </Tween>

                {/* This part is 'W' second */}
                <Tween 
                    from={{x: '150px'}}
                    to={{x: '-150px', y: '38px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeFive'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '-140px', y: '37px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeSix'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '-130px', y: '36px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeSeven'/>
                </Tween>

                {/* This part is 'W' third */}
                <Tween 
                    from={{x: '150px'}}
                    to={{x: '-120px', y: '-12px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeEight'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '-106px', y: '-14px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeNine'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '-95px', y: '-13px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeTen'/>
                </Tween>

                {/* This part is 'W' four */}
                <Tween 
                    from={{x: '150px'}}
                    to={{x: '-93px', y: '35px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeEleven'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '-85px', y: '80px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeTwelve'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '-71px', y: '84px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeThirteen'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '-71px', y: '85px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeThirteenOne'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '-71px', y: '83px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeThirteenTwo'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '-71px', y: '83px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeThirteenThree'/>
                </Tween>

                {/* This part is 'E' first */}
                <Tween 
                    from={{x: '150px'}}
                    to={{x: '-10px', y: '80px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeEOne'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '0px', y: '80px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeETwo'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '10px', y: '80px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeEThree'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '20px', y: '80px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeEFour'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '30px', y: '80px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeEFive'/>
                </Tween>

                {/* This part is 'E' second */}
                <Tween 
                    from={{x: '150px'}}
                    to={{x: '-10px', y: '90px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeESix'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '-10px', y: '95px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeESeven'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '-10px', y: '100px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeEEight'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '-10px', y: '105px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeENine'/>
                </Tween>

                {/* This part is 'E' third */}
                <Tween 
                    from={{x: '150px'}}
                    to={{x: '0px', y: '97px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeETen'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '10px', y: '97px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeEEleven'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '20px', y: '97px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeETwelve'/>
                </Tween>

                {/* This part is 'E' fourth  */}
                <Tween 
                    from={{x: '150px'}}
                    to={{x: '0px', y: '105px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeEThirteen'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '10px', y: '105px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeEFourteen'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '20px', y: '105px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeEFifteen'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '30px', y: '105px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeESixteen'/>
                </Tween>

                {/* This part is 'L' first */}
                <Tween 
                    from={{x: '150px'}}
                    to={{x: '0px', y: '80px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeLFirst'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '0px', y: '90px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeLSecond'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '0px', y: '100px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeLThird'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '0px', y: '110px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeLFourth'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '0px', y: '115px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeLFifth'/>
                </Tween>

                {/* This part is 'L' second */}
                <Tween 
                    from={{x: '150px'}}
                    to={{x: '10px', y: '115px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeLSixth'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '20px', y: '115px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeLSeventh'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '30px', y: '115px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeLEighth'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '40px', y: '115px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeLNineth'/>
                </Tween>

                {/* This part is 'C' first */}
                <Tween 
                    from={{x: '150px'}}
                    to={{x: '70px', y: '60px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeCFirst'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '60px', y: '50px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeCSecond'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '55px', y: '40px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeCThird'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '45px', y: '30px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeCFourth'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '35px', y: '30px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeCFifth'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '25px', y: '30px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeCSixth'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '15px', y: '30px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeCSeventh'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '10px', y: '30px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeCEighth'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '5px', y: '30px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeCNineth'/>
                </Tween>

                {/* This part is 'C' second */}
                <Tween 
                    from={{x: '150px'}}
                    to={{x: '60px', y: '75px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeCTenth'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '55px', y: '70px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeCEleventh'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '50px', y: '66px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeCTwelfth'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '50px', y: '54px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeCThirteenth'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '46px', y: '54px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeCFourteenth'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '40px', y: '54px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeCFifteenth'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '36px', y: '54px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeCSixteenth'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '30px', y: '54px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeCSeventeenth'/>
                </Tween>

                {/* This part is 'O' first */}
                <Tween 
                    from={{x: '150px'}}
                    to={{x: '70px', y: '70px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeOFirst'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '70px', y: '72px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeOSecond'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '70px', y: '74px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeOThird'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '70px', y: '72px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeOFourth'/>
                </Tween>

                {/* This part is 'O' second */}
                <Tween 
                    from={{x: '150px'}}
                    to={{x: '75px', y: '72px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeOFifth'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '80px', y: '72px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeOSixth'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '85px', y: '72px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeOSeventh'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '90px', y: '58px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeOEighth'/>
                </Tween>

                {/* This part is 'O' third */}
                <Tween 
                    from={{x: '150px'}}
                    to={{x: '83px', y: '52px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeONineth'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '83px', y: '49px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeOTenth'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '83px', y: '50px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeOEleventh'/>
                </Tween>

                {/* This part is 'O' fourth */}
                <Tween 
                    from={{x: '150px'}}
                    to={{x: '83px', y: '59px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeOTwelfth'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '83px', y: '67px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeOThirteenth'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '70px', y: '75px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeOFourteenth'/>
                </Tween>

                {/* This part is 'O' fifth */}
                <Tween 
                    from={{x: '150px'}}
                    to={{x: '60px', y: '75px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeOFifteenth'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '50px', y: '75px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeOSixteenth'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '40px', y: '75px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeOSeventeenth'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '30px', y: '86px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeOEightteenth'/>
                </Tween>

                <Tween 
                    from={{x: '150px'}}
                    to={{x: '30px', y: '105px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeONineteenth'/>
                </Tween>

                {/* This part is 'O' sixth */}
                <Tween 
                    from={{x: '150px'}}
                    to={{x: '30px', y: '110px', rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)">
                    <div className='welcomeOTwenty'/>
                </Tween>

                {/* This part is 'M' first  */}
                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '110px', y: '87px', opacity:1, rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)"
                    duration={1}>
                    <div className='welcomeMFirst'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '115px', y: '95px',  opacity:1, rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)"
                    duration={1}>
                    <div className='welcomeMSecond'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '115px', y: '85px',  opacity:1, rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)"
                    duration={1}>
                    <div className='welcomeMThird'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '115px', y: '75px',  opacity:1, rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)"
                    duration={1}>
                    <div className='welcomeMFourth'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '115px', y: '65px',  opacity:1, rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)"
                    duration={1}>
                    <div className='welcomeMFifth'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '117px', y: '55px',  opacity:1, rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)"
                    duration={1}>
                    <div className='welcomeMSixth'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '125px', y: '100px',  opacity:1, rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)"
                    duration={1}>
                    <div className='welcomeMSeventh'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '124px', y: '145px',  opacity:1, rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)"
                    duration={2}>
                    <div className='welcomeMEighth'/>
                </Tween>

                {/* This part is 'M' second */}
                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '120px', y: '154px',  opacity:1, rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)"
                    duration={2}>
                    <div className='welcomeMNineth'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '125px', y: '162px',  opacity:1, rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)"
                    duration={2}>
                    <div className='welcomeMTenth'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '130px', y: '170px',  opacity:1, rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)"
                    duration={2}>
                    <div className='welcomeMEleventh'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '135px', y: '127px',  opacity:1, rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)"
                    duration={1}>
                    <div className='welcomeMTwelfth'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '138px', y: '83px',  opacity:1, rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)"
                    duration={2}>
                    <div className='welcomeMThirteenth'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '140px', y: '40px',  opacity:1, rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)"
                    duration={2}>
                    <div className='welcomeMFourteenth'/>
                </Tween>

                {/* This part is 'M' third */}
                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '150px', y: '-5px',  opacity:1, rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)"
                    duration={2}>
                    <div className='welcomeMFifteenth'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '160px', y: '-15px',  opacity:1, rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)"
                    duration={2}>
                    <div className='welcomeMSixteenth'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '165px', y: '15px',  opacity:1, rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)"
                    duration={2}>
                    <div className='welcomeMSeventeenth'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '180px', y: '25px',  opacity:1, rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)"
                    duration={2}>
                    <div className='welcomeMEightteenth'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '185px', y: '20px',  opacity:1, rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)"
                    duration={2}>
                    <div className='welcomeMNineteenth'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '190px', y: '30px',  opacity:1, rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)"
                    duration={2}>
                    <div className='welcomeMTwenty'/>
                </Tween>

                {/* This part is 'M' fourth */}
                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '200px', y: '35px',  opacity:1, rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)"
                    duration={2}>
                    <div className='welcomeMTwentyOne'/>
                </Tween>

                {/* This part is 'E' first */}
                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '250px', y: '30px',  opacity:1, rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)"
                    duration={2}>
                    <div className='welcomeSEFirst'/>
                </Tween>
            
                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '250px', y: '20px',  opacity:1, rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)"
                    duration={2}>
                    <div className='welcomeSESecond'/>
                </Tween>
            
                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '250px', y: '10px',  opacity:1, rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)"
                    duration={2}>
                    <div className='welcomeSEThird'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '250px', y: '-10px',  opacity:1, rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)"
                    duration={2}>
                    <div className='welcomeSEFourth'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '250px', y: '-40px',  opacity:1, rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)"
                    duration={2}>
                    <div className='welcomeSEFifth'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '250px', y: '-70px',  opacity:1, rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)"
                    duration={2}>
                    <div className='welcomeSESixth'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '250px', y: '-100px',  opacity:1, rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)"
                    duration={2}>
                    <div className='welcomeSESeventh'/>
                </Tween>

                {/* This part is 'E' second */}
                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '250px', y: '-10px',  opacity:1, rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)"
                    duration={2}>
                    <div className='welcomeSEEighth'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '260px', y: '-10px',  opacity:1, rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)"
                    duration={2}>
                    <div className='welcomeSENineth'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '270px', y: '-10px',  opacity:1, rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)"
                    duration={2}>
                    <div className='welcomeSETenth'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '280px', y: '-10px',  opacity:1, rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)"
                    duration={2}>
                    <div className='welcomeSEEleventh'/>
                </Tween>

                {/* This part is 'E' third */}
                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '250px', y: '-100px',  opacity:1, rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)"
                    duration={2}>
                    <div className='welcomeSETwelfth'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '260px', y: '-100px',  opacity:1, rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)"
                    duration={2}>
                    <div className='welcomeSEThirteenth'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '270px', y: '-100px',  opacity:1, rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)"
                    duration={2}>
                    <div className='welcomeSEFourteenth'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '280px', y: '-100px',  opacity:1, rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)"
                    duration={2}>
                    <div className='welcomeSEFifteenth'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '290px', y: '-100px',  opacity:1, rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)"
                    duration={2}>
                    <div className='welcomeSESixteenth'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '300px', y: '-100px',  opacity:1, rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)"
                    duration={2}>
                    <div className='welcomeSESeventeenth'/>
                </Tween>

                {/* This part is 'E' fourth */}
                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '250px', y: '30px',  opacity:1, rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)"
                    duration={2}>
                    <div className='welcomeSEEightteenth'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '260px', y: '30px',  opacity:1, rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)"
                    duration={2}>
                    <div className='welcomeSENineteenth'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '270px', y: '30px',  opacity:1, rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)"
                    duration={2}>
                    <div className='welcomeSETwenty'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '280px', y: '30px',  opacity:1, rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)"
                    duration={2}>
                    <div className='welcomeSETwentyOne'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '290px', y: '30px',  opacity:1, rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)"
                    duration={2}>
                    <div className='welcomeSETwentyTwo'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '300px', y: '30px',  opacity:1, rotation: 180}} stagger={0.2} ease="elastic.out(1, 0.1)"
                    duration={2}>
                    <div className='welcomeSETwentyThree'/>
                </Tween>
            </div>
        )
    }
}

export default Welcome

