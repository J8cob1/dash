// https://casesandberg.github.io/react-color/#api-onChangeComplete
// The following background color picker is a working example from the link above
// It uses the open source library "react-color"
// We then map the picked color to our web app backgrount color

import React, {Component} from 'react';
import reactCSS from 'reactcss';
import { SketchPicker } from 'react-color';


class Background extends Component {
    state = {
        displayColorPicker: false,
        color: {
            r: '77',
            g: '192',
            b: '157',
            a: '100',
        },
    };

    handleClick = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
    };

    handleClose = () => {
        this.setState({ displayColorPicker: false })
    };

    handleChange = (color) => {
        this.setState({ color: color.rgb })
    };

    render() {
        const styles = reactCSS({
            'default': {
                // body: {
                //     background: `rgba(
                //         ${ this.state.color.r }, 
                //         ${ this.state.color.g }, 
                //         ${ this.state.color.b }, 
                //         ${ this.state.color.a })`,
                // },

                color: {
                    width: '36px',
                    height: '14px',
                    borderRadius: '2px',
                    background: `rgba(
                        ${ this.state.color.r }, 
                        ${ this.state.color.g }, 
                        ${ this.state.color.b }, 
                        ${ this.state.color.a })`,
                },

                swatch: {
                    padding: '5px',
                    background: '#fff',
                    borderRadius: '1px',
                    boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
                    display: 'inline-block',
                    cursor: 'pointer',
                },

                popover: {
                    position: 'absolute',
                    zIndex: '2',
                },

                cover: {
                    position: 'fixed',
                    top: '0px',
                    right: '0px',
                    bottom: '0px',
                    left: '0px',
                }
            },
        });

        return (
            <div>
                <div style={ styles.swatch } onClick={ this.handleClick }>
                    <div style={ styles.color } />
                </div>
                {   
                    this.state.displayColorPicker ? 
                        <div style={ styles.popover }>
                            <div style={ styles.cover } onClick={ this.handleClose }/>
                            <SketchPicker color={ this.state.color } onChange={ this.handleChange } />
                        </div> : null 
                }
                <style>
                    {`body { background-color: 
                        rgba(
                            ${ this.state.color.r }, 
                            ${ this.state.color.g }, 
                            ${ this.state.color.b }, 
                            ${ this.state.color.a }
                        ) 
                    }`}
                </style>
            </div>
        )
    }
}

export default Background