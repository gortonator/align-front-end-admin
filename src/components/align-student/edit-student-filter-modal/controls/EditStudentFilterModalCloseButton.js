import React from 'react';

class EditStudentFilterModalCloseButton extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            hovering: false
        };
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
    }

    onMouseEnter(){
        this.setState({
            hovering: true
        });
    }

    onMouseLeave(){
        this.setState({
            hovering: false
        });
    }

    render(){
        return (
            <a className={'edit-student-filter-modal-close-button'}
               href={''}
               onMouseEnter={this.onMouseEnter}
               onMouseLeave={this.onMouseLeave}
               onClick={this.props.onClick}>

                {/*
                    This svg was created by FontAwesome and has been modified by the developer.
                */}

                <svg aria-hidden="true"
                     role="img"
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 384 512">
                    <path className={'edit-student-filter-modal-close-button-' +
                    (this.state.hovering ? 'hover' : 'normal')}
                          d="M323.1 441l53.9-53.9c9.4-9.4 9.4-24.5 0-33.9L279.8 256l97.2-97.2c9.4-9.4 9.4-24.5 0-33.9L323.1 71c-9.4-9.4-24.5-9.4-33.9 0L192 168.2 94.8 71c-9.4-9.4-24.5-9.4-33.9 0L7 124.9c-9.4 9.4-9.4 24.5 0 33.9l97.2 97.2L7 353.2c-9.4 9.4-9.4 24.5 0 33.9L60.9 441c9.4 9.4 24.5 9.4 33.9 0l97.2-97.2 97.2 97.2c9.3 9.3 24.5 9.3 33.9 0z"/>
                </svg>

            </a>
        );
    }
}

export default EditStudentFilterModalCloseButton;