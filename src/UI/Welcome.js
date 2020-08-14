// https://bitworking.github.io/react-gsap/#installation
// https://bitworking.github.io/react-gsap/src-components-tween
// https://bitworking.github.io/react-gsap/src-components-timeline
// Read documents in the above links, learn how to use react-gsap to make project has animation

import React, { Component } from 'react'
import {Tween} from 'react-gsap'
import './WelcomeStyle.css'

class Welcome extends Component {
    render() {
        return (
            <div>
                {/* This part is 'W' first */}
                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '-200px', y: '35px', opacity: 1}} 
                    repeat={2}
                    stagger={0.1} 
                    ease="elastic.out(1, 0.1)"
                    duration={2}>
                    <div className='welcomeOne'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '-190px', y: '36px', opacity: 1}} 
                    repeat={2}
                    stagger={0.2} 
                    ease="elastic.out(1, 0.1)"
                    duration={3}>
                    <div className='welcomeTwo'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '-180px', y: '37px', opacity: 1}} 
                    repeat={2}
                    stagger={0.3} 
                    ease="elastic.out(1, 0.1)"
                    duration={4}>
                    <div className='welcomeThree'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '-170px', y: '38px', opacity: 1}} 
                    repeat={2}
                    stagger={0.4} 
                    ease="elastic.out(1, 0.1)"
                    duration={5}>
                    <div className='welcomeFour'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '-160px', y: '39px', opacity: 1}} 
                    repeat={2}
                    stagger={0.5} 
                    ease="elastic.out(1, 0.1)"
                    duration={6}>
                    <div className='welcomeFourOne'/>
                </Tween>

                {/* This part is 'W' second */}
                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '-150px', y: '38px', opacity: 1}} 
                    repeat={2}
                    stagger={0.6} 
                    ease="elastic.out(1, 0.1)"
                    duration={7}>
                    <div className='welcomeFive'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '-140px', y: '37px', opacity: 1}} 
                    repeat={2}
                    stagger={0.7} 
                    ease="elastic.out(1, 0.1)"
                    duration={8}>
                    <div className='welcomeSix'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '-130px', y: '36px', opacity: 1}} 
                    repeat={2}
                    stagger={0.8} 
                    ease="elastic.out(1, 0.1)"
                    duration={9}>
                    <div className='welcomeSeven'/>
                </Tween>

                {/* This part is 'W' third */}
                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '-120px', y: '-12px', opacity: 1}} 
                    repeat={2}
                    stagger={0.9} 
                    ease="elastic.out(1, 0.1)"
                    duration={10}>
                    <div className='welcomeEight'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '-106px', y: '-14px', opacity: 1}} 
                    repeat={2}
                    stagger={1.0} 
                    ease="elastic.out(1, 0.1)"
                    duration={11}>
                    <div className='welcomeNine'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '-95px', y: '-13px', opacity: 1}} 
                    repeat={2}
                    stagger={1.1} 
                    ease="elastic.out(1, 0.1)"
                    duration={12}>
                    <div className='welcomeTen'/>
                </Tween>

                {/* This part is 'W' four */}
                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '-93px', y: '35px', opacity: 1}} 
                    repeat={2}
                    stagger={1.2} 
                    ease="elastic.out(1, 0.1)"
                    duration={13}>
                    <div className='welcomeEleven'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '-85px', y: '80px', opacity: 1}} 
                    repeat={2}
                    stagger={1.3} 
                    ease="elastic.out(1, 0.1)"
                    duration={14}>
                    <div className='welcomeTwelve'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '-71px', y: '84px', opacity: 1}} 
                    repeat={2}
                    stagger={1.4} 
                    ease="elastic.out(1, 0.1)"
                    duration={15}>
                    <div className='welcomeThirteen'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '-71px', y: '85px', opacity: 1}} 
                    repeat={2}
                    stagger={1.5} 
                    ease="elastic.out(1, 0.1)"
                    duration={16}>
                    <div className='welcomeThirteenOne'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '-71px', y: '83px', opacity: 1}} 
                    repeat={2}
                    stagger={1.6} 
                    ease="elastic.out(1, 0.1)"
                    duration={17}>
                    <div className='welcomeThirteenTwo'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '-71px', y: '83px', opacity: 1}} 
                    repeat={2}
                    stagger={1.7} 
                    ease="elastic.out(1, 0.1)"
                    duration={18}>
                    <div className='welcomeThirteenThree'/>
                </Tween>

                {/* This part is 'E' first */}
                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '-10px', y: '80px', opacity: 1}} 
                    repeat={2}
                    stagger={1.8} 
                    ease="elastic.out(1, 0.1)"
                    duration={19}>
                    <div className='welcomeEOne'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '0px', y: '80px', opacity: 1}} 
                    repeat={2}
                    stagger={1.9} 
                    ease="elastic.out(1, 0.1)"
                    duration={20}>
                    <div className='welcomeETwo'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '10px', y: '80px', opacity: 1}} 
                    repeat={2}
                    stagger={2.0} 
                    ease="elastic.out(1, 0.1)"
                    duration={21}>
                    <div className='welcomeEThree'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '20px', y: '80px', opacity: 1}} 
                    repeat={2}
                    stagger={2.1} 
                    ease="elastic.out(1, 0.1)"
                    duration={22}>
                    <div className='welcomeEFour'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '30px', y: '80px', opacity: 1}} 
                    repeat={2}
                    stagger={2.2} 
                    ease="elastic.out(1, 0.1)"
                    duration={23}>
                    <div className='welcomeEFive'/>
                </Tween>

                {/* This part is 'E' second */}
                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '-10px', y: '90px', opacity: 1}} 
                    repeat={2}
                    stagger={2.3} 
                    ease="elastic.out(1, 0.1)"
                    duration={24}>
                    <div className='welcomeESix'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '-10px', y: '95px', opacity: 1}} 
                    repeat={2}
                    stagger={2.4} 
                    ease="elastic.out(1, 0.1)"
                    duration={25}>
                    <div className='welcomeESeven'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '-10px', y: '100px', opacity: 1}} 
                    repeat={2}
                    stagger={2.5} 
                    ease="elastic.out(1, 0.1)"
                    duration={26}>
                    <div className='welcomeEEight'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '-10px', y: '105px', opacity: 1}} 
                    repeat={2}
                    stagger={2.6} 
                    ease="elastic.out(1, 0.1)"
                    duration={27}>
                    <div className='welcomeENine'/>
                </Tween>

                {/* This part is 'E' third */}
                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '0px', y: '97px', opacity: 1}} 
                    repeat={2}
                    stagger={2.7} 
                    ease="elastic.out(1, 0.1)"
                    duration={28}>
                    <div className='welcomeETen'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '10px', y: '97px', opacity: 1}} 
                    repeat={2}
                    stagger={2.8} 
                    ease="elastic.out(1, 0.1)"
                    duration={29}>
                    <div className='welcomeEEleven'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '20px', y: '97px', opacity: 1}} 
                    repeat={2}
                    stagger={2.9} 
                    ease="elastic.out(1, 0.1)"
                    duration={30}>
                    <div className='welcomeETwelve'/>
                </Tween>

                {/* This part is 'E' fourth  */}
                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '0px', y: '105px', opacity: 1}} 
                    repeat={2}
                    stagger={3.0} 
                    ease="elastic.out(1, 0.1)"
                    duration={31}>
                    <div className='welcomeEThirteen'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '10px', y: '105px', opacity: 1}} 
                    repeat={2}
                    stagger={3.1} 
                    ease="elastic.out(1, 0.1)"
                    duration={32}>
                    <div className='welcomeEFourteen'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '20px', y: '105px', opacity: 1}} 
                    repeat={2}
                    stagger={3.2} 
                    ease="elastic.out(1, 0.1)"
                    duration={33}>
                    <div className='welcomeEFifteen'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '30px', y: '105px', opacity: 1}} 
                    repeat={2}
                    stagger={3.3} 
                    ease="elastic.out(1, 0.1)"
                    duration={34}>
                    <div className='welcomeESixteen'/>
                </Tween>

                {/* This part is 'L' first */}
                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '0px', y: '80px', opacity: 1}} 
                    repeat={2}
                    stagger={3.4} 
                    ease="elastic.out(1, 0.1)"
                    duration={35}>
                    <div className='welcomeLFirst'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '0px', y: '90px', opacity: 1}} 
                    repeat={2}
                    stagger={3.5} 
                    ease="elastic.out(1, 0.1)"
                    duration={36}>
                    <div className='welcomeLSecond'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '0px', y: '100px', opacity: 1}} 
                    repeat={2}
                    stagger={3.6} 
                    ease="elastic.out(1, 0.1)"
                    duration={37}>
                    <div className='welcomeLThird'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '0px', y: '110px', opacity: 1}} 
                    repeat={2}
                    stagger={3.7} 
                    ease="elastic.out(1, 0.1)"
                    duration={38}>
                    <div className='welcomeLFourth'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '0px', y: '115px', opacity: 1}} 
                    repeat={2}
                    stagger={3.8} 
                    ease="elastic.out(1, 0.1)"
                    duration={39}>
                    <div className='welcomeLFifth'/>
                </Tween>

                {/* This part is 'L' second */}
                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '10px', y: '115px', opacity: 1}} 
                    repeat={2}
                    stagger={3.9} 
                    ease="elastic.out(1, 0.1)"
                    duration={40}>
                    <div className='welcomeLSixth'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '20px', y: '115px', opacity: 1}} 
                    repeat={2}
                    stagger={4.0} 
                    ease="elastic.out(1, 0.1)"
                    duration={41}>
                    <div className='welcomeLSeventh'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '30px', y: '115px', opacity: 1}} 
                    repeat={2}
                    stagger={4.1} 
                    ease="elastic.out(1, 0.1)"
                    duration={42}>
                    <div className='welcomeLEighth'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '40px', y: '115px', opacity: 1}} 
                    repeat={2}
                    stagger={4.2} 
                    ease="elastic.out(1, 0.1)"
                    duration={43}>
                    <div className='welcomeLNineth'/>
                </Tween>

                {/* This part is 'C' first */}
                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '70px', y: '60px', opacity: 1}} 
                    repeat={2}
                    stagger={4.3} 
                    ease="elastic.out(1, 0.1)"
                    duration={44}>
                    <div className='welcomeCFirst'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '60px', y: '50px', opacity: 1}} 
                    repeat={2}
                    stagger={4.4} 
                    ease="elastic.out(1, 0.1)"
                    duration={45}>
                    <div className='welcomeCSecond'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '55px', y: '40px', opacity: 1}} 
                    repeat={2}
                    stagger={4.5} 
                    ease="elastic.out(1, 0.1)"
                    duration={46}>
                    <div className='welcomeCThird'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '45px', y: '30px', opacity: 1}} 
                    repeat={2}
                    stagger={4.6} 
                    ease="elastic.out(1, 0.1)"
                    duration={47}>
                    <div className='welcomeCFourth'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '35px', y: '30px', opacity: 1}} 
                    repeat={2}
                    stagger={4.7} 
                    ease="elastic.out(1, 0.1)"
                    duration={48}>
                    <div className='welcomeCFifth'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '25px', y: '30px', opacity: 1}} 
                    repeat={2}
                    stagger={4.8} 
                    ease="elastic.out(1, 0.1)"
                    duration={49}>
                    <div className='welcomeCSixth'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '15px', y: '30px', opacity: 1}} 
                    repeat={2}
                    stagger={4.9} 
                    ease="elastic.out(1, 0.1)"
                    duration={50}>
                    <div className='welcomeCSeventh'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '10px', y: '30px', opacity: 1}} 
                    repeat={2}
                    stagger={5.0} 
                    ease="elastic.out(1, 0.1)"
                    duration={51}>
                    <div className='welcomeCEighth'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '5px', y: '30px', opacity: 1}} 
                    repeat={2}
                    stagger={5.1} 
                    ease="elastic.out(1, 0.1)"
                    duration={52}>
                    <div className='welcomeCNineth'/>
                </Tween>

                {/* This part is 'C' second */}
                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '60px', y: '75px', opacity: 1}} 
                    repeat={2}
                    stagger={5.2} 
                    ease="elastic.out(1, 0.1)"
                    duration={53}>
                    <div className='welcomeCTenth'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '55px', y: '70px', opacity: 1}} 
                    repeat={2}
                    stagger={5.3} 
                    ease="elastic.out(1, 0.1)"
                    duration={54}>
                    <div className='welcomeCEleventh'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '50px', y: '66px', opacity: 1}} 
                    repeat={2}
                    stagger={5.4} 
                    ease="elastic.out(1, 0.1)"
                    duration={55}>
                    <div className='welcomeCTwelfth'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '50px', y: '54px', opacity: 1}} 
                    repeat={2}
                    stagger={5.5} 
                    ease="elastic.out(1, 0.1)"
                    duration={56}>
                    <div className='welcomeCThirteenth'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '46px', y: '54px', opacity: 1}} 
                    repeat={2}
                    stagger={5.6} 
                    ease="elastic.out(1, 0.1)"
                    duration={57}>
                    <div className='welcomeCFourteenth'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '40px', y: '54px', opacity: 1}} 
                    repeat={2}
                    stagger={5.7} 
                    ease="elastic.out(1, 0.1)"
                    duration={58}>
                    <div className='welcomeCFifteenth'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '36px', y: '54px', opacity: 1}} 
                    repeat={2}
                    stagger={5.8} 
                    ease="elastic.out(1, 0.1)"
                    duration={59}>
                    <div className='welcomeCSixteenth'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '30px', y: '54px', opacity: 1}} 
                    repeat={2}
                    stagger={5.9} 
                    ease="elastic.out(1, 0.1)"
                    duration={60}>
                    <div className='welcomeCSeventeenth'/>
                </Tween>

                {/* This part is 'O' first */}
                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '70px', y: '70px', opacity: 1}} 
                    repeat={2}
                    stagger={6.0} 
                    ease="elastic.out(1, 0.1)"
                    duration={61}>
                    <div className='welcomeOFirst'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '70px', y: '72px', opacity: 1}} 
                    repeat={2}
                    stagger={6.1} 
                    ease="elastic.out(1, 0.1)"
                    duration={62}>
                    <div className='welcomeOSecond'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '70px', y: '74px', opacity: 1}} 
                    repeat={2}
                    stagger={6.2} 
                    ease="elastic.out(1, 0.1)"
                    duration={63}>
                    <div className='welcomeOThird'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '70px', y: '72px', opacity: 1}} 
                    repeat={2}
                    stagger={6.3} 
                    ease="elastic.out(1, 0.1)"
                    duration={64}>
                    <div className='welcomeOFourth'/>
                </Tween>

                {/* This part is 'O' second */}
                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '75px', y: '72px', opacity: 1}} 
                    repeat={2}
                    stagger={6.4} 
                    ease="elastic.out(1, 0.1)"
                    duration={65}>
                    <div className='welcomeOFifth'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '80px', y: '72px', opacity: 1}} 
                    repeat={2}
                    stagger={6.5} 
                    ease="elastic.out(1, 0.1)"
                    duration={66}>
                    <div className='welcomeOSixth'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '85px', y: '72px', opacity: 1}} 
                    repeat={2}
                    stagger={6.6} 
                    ease="elastic.out(1, 0.1)"
                    duration={67}>
                    <div className='welcomeOSeventh'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '90px', y: '58px', opacity: 1}} 
                    repeat={2}
                    stagger={6.7} 
                    ease="elastic.out(1, 0.1)"
                    duration={68}>
                    <div className='welcomeOEighth'/>
                </Tween>

                {/* This part is 'O' third */}
                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '83px', y: '52px', opacity: 1}} 
                    repeat={2}
                    stagger={6.8} 
                    ease="elastic.out(1, 0.1)"
                    duration={69}>
                    <div className='welcomeONineth'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '83px', y: '49px', opacity: 1}} 
                    repeat={2}
                    stagger={6.9} 
                    ease="elastic.out(1, 0.1)"
                    duration={70}>
                    <div className='welcomeOTenth'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '83px', y: '50px', opacity: 1}} 
                    stagger={7.0} 
                    ease="elastic.out(1, 0.1)"
                    duration={71}>
                    <div className='welcomeOEleventh'/>
                </Tween>

                {/* This part is 'O' fourth */}
                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '83px', y: '59px', opacity: 1}} 
                    repeat={2}
                    stagger={7.1} 
                    ease="elastic.out(1, 0.1)"
                    duration={72}>
                    <div className='welcomeOTwelfth'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '83px', y: '67px', opacity: 1}} 
                    repeat={2}
                    stagger={7.2} 
                    ease="elastic.out(1, 0.1)"
                    duration={73}>
                    <div className='welcomeOThirteenth'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '70px', y: '75px', opacity: 1}} 
                    repeat={2}
                    stagger={7.3} 
                    ease="elastic.out(1, 0.1)"
                    duration={74}>
                    <div className='welcomeOFourteenth'/>
                </Tween>

                {/* This part is 'O' fifth */}
                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '60px', y: '75px', opacity: 1}} 
                    repeat={2}
                    stagger={7.4} 
                    ease="elastic.out(1, 0.1)"
                    duration={75}>
                    <div className='welcomeOFifteenth'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '50px', y: '75px', opacity: 1}} 
                    repeat={2}
                    stagger={7.5} 
                    ease="elastic.out(1, 0.1)"
                    duration={76}>
                    <div className='welcomeOSixteenth'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '40px', y: '75px', opacity: 1}} 
                    repeat={2}
                    stagger={7.6} 
                    ease="elastic.out(1, 0.1)"
                    duration={77}>
                    <div className='welcomeOSeventeenth'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '30px', y: '86px', opacity: 1}} 
                    repeat={2}
                    stagger={7.7} 
                    ease="elastic.out(1, 0.1)"
                    duration={78}>
                    <div className='welcomeOEightteenth'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '30px', y: '105px', opacity: 1}} 
                    repeat={2}
                    stagger={7.8} 
                    ease="elastic.out(1, 0.1)"
                    duration={79}>
                    <div className='welcomeONineteenth'/>
                </Tween>

                {/* This part is 'O' sixth */}
                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '30px', y: '110px', opacity: 1}} 
                    repeat={2}
                    stagger={7.9} 
                    ease="elastic.out(1, 0.1)"
                    duration={80}>
                    <div className='welcomeOTwenty'/>
                </Tween>

                {/* This part is 'M' first  */}
                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '110px', y: '87px', opacity:1}} 
                    repeat={2}
                    stagger={8.0} 
                    ease="elastic.out(1, 0.1)"
                    duration={81}>
                    <div className='welcomeMFirst'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '115px', y: '95px',  opacity:1}} 
                    repeat={2}
                    stagger={8.1} 
                    ease="elastic.out(1, 0.1)"
                    duration={82}>
                    <div className='welcomeMSecond'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '115px', y: '85px',  opacity:1}} 
                    repeat={2}
                    stagger={8.2} 
                    ease="elastic.out(1, 0.1)"
                    duration={83}>
                    <div className='welcomeMThird'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '115px', y: '75px',  opacity:1}} 
                    repeat={2}
                    stagger={8.3} 
                    ease="elastic.out(1, 0.1)"
                    duration={84}>
                    <div className='welcomeMFourth'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '115px', y: '65px',  opacity:1}} 
                    repeat={2}
                    stagger={8.4} 
                    ease="elastic.out(1, 0.1)"
                    duration={85}>
                    <div className='welcomeMFifth'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '117px', y: '55px',  opacity:1}} 
                    repeat={2}
                    stagger={8.5} 
                    ease="elastic.out(1, 0.1)"
                    duration={86}>
                    <div className='welcomeMSixth'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '125px', y: '100px',  opacity:1}} 
                    repeat={2}
                    stagger={8.6} 
                    ease="elastic.out(1, 0.1)"
                    duration={87}>
                    <div className='welcomeMSeventh'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '124px', y: '145px',  opacity:1}} 
                    repeat={2}
                    stagger={8.7} 
                    ease="elastic.out(1, 0.1)"
                    duration={88}>
                    <div className='welcomeMEighth'/>
                </Tween>

                {/* This part is 'M' second */}
                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '120px', y: '154px',  opacity:1}} 
                    repeat={2}
                    stagger={8.8} 
                    ease="elastic.out(1, 0.1)"
                    duration={89}>
                    <div className='welcomeMNineth'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '125px', y: '162px',  opacity:1}} 
                    repeat={2}
                    stagger={8.9} 
                    ease="elastic.out(1, 0.1)"
                    duration={90}>
                    <div className='welcomeMTenth'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '130px', y: '170px',  opacity:1}} 
                    repeat={2}
                    stagger={9.0} 
                    ease="elastic.out(1, 0.1)"
                    duration={91}>
                    <div className='welcomeMEleventh'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '135px', y: '127px',  opacity:1}} 
                    repeat={2}
                    stagger={9.1} 
                    ease="elastic.out(1, 0.1)"
                    duration={92}>
                    <div className='welcomeMTwelfth'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '138px', y: '83px',  opacity:1}} 
                    repeat={2}
                    stagger={9.2} 
                    ease="elastic.out(1, 0.1)"
                    duration={93}>
                    <div className='welcomeMThirteenth'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '140px', y: '40px',  opacity:1}} 
                    repeat={2}
                    stagger={9.3} 
                    ease="elastic.out(1, 0.1)"
                    duration={94}>
                    <div className='welcomeMFourteenth'/>
                </Tween>

                {/* This part is 'M' third */}
                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '150px', y: '-5px',  opacity:1}} 
                    repeat={2}
                    stagger={9.4} 
                    ease="elastic.out(1, 0.1)"
                    duration={95}>
                    <div className='welcomeMFifteenth'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '160px', y: '-15px',  opacity:1}} 
                    repeat={2}
                    stagger={9.5} 
                    ease="elastic.out(1, 0.1)"
                    duration={96}>
                    <div className='welcomeMSixteenth'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '165px', y: '15px',  opacity:1}} 
                    repeat={2}
                    stagger={9.6} 
                    ease="elastic.out(1, 0.1)"
                    duration={97}>
                    <div className='welcomeMSeventeenth'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '180px', y: '25px',  opacity:1}} 
                    repeat={2}
                    stagger={9.7} 
                    ease="elastic.out(1, 0.1)"
                    duration={98}>
                    <div className='welcomeMEightteenth'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '185px', y: '20px',  opacity:1}} 
                    repeat={2}
                    stagger={9.8} 
                    ease="elastic.out(1, 0.1)"
                    duration={99}>
                    <div className='welcomeMNineteenth'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '190px', y: '30px',  opacity:1}} 
                    repeat={2}
                    stagger={9.9} 
                    ease="elastic.out(1, 0.1)"
                    duration={100}>
                    <div className='welcomeMTwenty'/>
                </Tween>

                {/* This part is 'M' fourth */}
                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '200px', y: '35px',  opacity:1}} 
                    repeat={2}
                    stagger={10.0} 
                    ease="elastic.out(1, 0.1)"
                    duration={101}>
                    <div className='welcomeMTwentyOne'/>
                </Tween>

                {/* This part is 'E' first */}
                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '250px', y: '30px',  opacity:1}} 
                    repeat={2}
                    stagger={10.1} 
                    ease="elastic.out(1, 0.1)"
                    duration={102}>
                    <div className='welcomeSEFirst'/>
                </Tween>
            
                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '250px', y: '20px',  opacity:1}} 
                    repeat={2}
                    stagger={10.2} 
                    ease="elastic.out(1, 0.1)"
                    duration={103}>
                    <div className='welcomeSESecond'/>
                </Tween>
            
                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '250px', y: '10px',  opacity:1}} 
                    repeat={2}
                    stagger={10.3} 
                    ease="elastic.out(1, 0.1)"
                    duration={104}>
                    <div className='welcomeSEThird'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '250px', y: '-10px',  opacity:1}} 
                    repeat={2}
                    stagger={10.4} 
                    ease="elastic.out(1, 0.1)"
                    duration={105}>
                    <div className='welcomeSEFourth'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '250px', y: '-40px',  opacity:1}} 
                    repeat={2}
                    stagger={10.5} 
                    ease="elastic.out(1, 0.1)"
                    duration={106}>
                    <div className='welcomeSEFifth'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '250px', y: '-70px',  opacity:1}} 
                    repeat={2}
                    stagger={10.6} 
                    ease="elastic.out(1, 0.1)"
                    duration={107}>
                    <div className='welcomeSESixth'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '250px', y: '-100px',  opacity:1}} 
                    repeat={2}
                    stagger={10.7} 
                    ease="elastic.out(1, 0.1)"
                    duration={108}>
                    <div className='welcomeSESeventh'/>
                </Tween>

                {/* This part is 'E' second */}
                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '250px', y: '-10px',  opacity:1}} 
                    repeat={2}
                    stagger={10.8} 
                    ease="elastic.out(1, 0.1)"
                    duration={109}>
                    <div className='welcomeSEEighth'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '260px', y: '-10px',  opacity:1}} 
                    repeat={2}
                    stagger={10.9} 
                    ease="elastic.out(1, 0.1)"
                    duration={110}>
                    <div className='welcomeSENineth'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '270px', y: '-10px',  opacity:1}} 
                    repeat={2}
                    stagger={11.0} 
                    ease="elastic.out(1, 0.1)"
                    duration={111}>
                    <div className='welcomeSETenth'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '280px', y: '-10px',  opacity:1}} 
                    repeat={2}
                    stagger={11.1} 
                    ease="elastic.out(1, 0.1)"
                    duration={112}>
                    <div className='welcomeSEEleventh'/>
                </Tween>

                {/* This part is 'E' third */}
                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '250px', y: '-100px',  opacity:1}} 
                    repeat={2}
                    stagger={11.2} 
                    ease="elastic.out(1, 0.1)"
                    duration={113}>
                    <div className='welcomeSETwelfth'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '260px', y: '-100px',  opacity:1}} 
                    repeat={2}
                    stagger={11.3} 
                    ease="elastic.out(1, 0.1)"
                    duration={114}>
                    <div className='welcomeSEThirteenth'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '270px', y: '-100px',  opacity:1}} 
                    repeat={2}
                    stagger={11.4} 
                    ease="elastic.out(1, 0.1)"
                    duration={115}>
                    <div className='welcomeSEFourteenth'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '280px', y: '-100px',  opacity:1}} 
                    repeat={2}
                    stagger={11.5} 
                    ease="elastic.out(1, 0.1)"
                    duration={116}>
                    <div className='welcomeSEFifteenth'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '290px', y: '-100px',  opacity:1}} 
                    repeat={2}
                    stagger={11.6} 
                    ease="elastic.out(1, 0.1)"
                    duration={117}>
                    <div className='welcomeSESixteenth'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '300px', y: '-100px',  opacity:1}} 
                    repeat={2}
                    stagger={11.7} 
                    ease="elastic.out(1, 0.1)"
                    duration={118}>
                    <div className='welcomeSESeventeenth'/>
                </Tween>

                {/* This part is 'E' fourth */}
                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '250px', y: '30px',  opacity:1}} 
                    repeat={2}
                    stagger={11.8} 
                    ease="elastic.out(1, 0.1)"
                    duration={119}>
                    <div className='welcomeSEEightteenth'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '260px', y: '30px',  opacity:1}} 
                    repeat={2}
                    stagger={11.9} 
                    ease="elastic.out(1, 0.1)"
                    duration={120}>
                    <div className='welcomeSENineteenth'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '270px', y: '30px',  opacity:1}} 
                    repeat={2}
                    stagger={12.0} 
                    ease="elastic.out(1, 0.1)"
                    duration={121}>
                    <div className='welcomeSETwenty'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '280px', y: '30px',  opacity:1}} 
                    repeat={2}
                    stagger={12.1} 
                    ease="elastic.out(1, 0.1)"
                    duration={122}>
                    <div className='welcomeSETwentyOne'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '290px', y: '30px',  opacity:1}} 
                    repeat={2}
                    stagger={12.2} 
                    ease="elastic.out(1, 0.1)"
                    duration={123}>
                    <div className='welcomeSETwentyTwo'/>
                </Tween>

                <Tween 
                    from={{x: '150px', opacity: 0}}
                    to={{x: '300px', y: '30px',  opacity:1}} 
                    repeat={2}
                    stagger={12.3} 
                    ease="elastic.out(1, 0.1)"
                    duration={124}>
                    <div className='welcomeSETwentyThree'/>
                </Tween>
            </div>
        )
    }
}

export default Welcome

