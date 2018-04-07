import React from 'react';
import NavBar from './nav-bar/NavBar';
import Notes from './notes/Notes';

export const PROFILE_MODAL_DISPLAY_CONTENT = {
    PROFILE: 'PROFILE',
    NOTES: 'NOTES'
};

const PROFILE_MODAL_INITIAL_POSITION = {
    positionX: 100,
    positionY: 100
};

const PROFILE_MODAL_DIMENSIONS = {
    width: 600,
    height: 400
};

class ProfileModal extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            display: PROFILE_MODAL_DISPLAY_CONTENT.PROFILE,
            positionX: PROFILE_MODAL_INITIAL_POSITION.positionX,
            positionY: PROFILE_MODAL_INITIAL_POSITION.positionY,
            mouseX: -1,
            mouseY: -1,
            dragging: false
        };
        this.changeDisplay = this.changeDisplay.bind(this);
        this.startDragging = this.startDragging.bind(this);
        this.dragging =this.dragging.bind(this);
        this.endDragging = this.endDragging.bind(this);
    }

    componentDidUpdate(props,state){
        if (this.state.dragging && !state.dragging) {
            document.addEventListener('mousemove', this.dragging)
            document.addEventListener('mouseup', this.endDragging)
        }
        if (!this.state.dragging && state.dragging) {
            document.removeEventListener('mousemove', this.dragging)
            document.removeEventListener('mouseup', this.endDragging)
        }
    }

    changeDisplay(d){
        this.setState({
           display: d
        });
    }

    startDragging(x,y){
        this.setState({
            mouseX: x,
            mouseY: y,
            dragging: true
        });
    }

    dragging(e){
        const x = e.clientX;
        const y = e.clientY;
        this.setState(prevState => {
            return {
                mouseX: x,
                mouseY: y,
                positionX: confineHorizontalPosition(prevState.positionX + x - prevState.mouseX),
                positionY: confineVerticalPosition(prevState.positionY + y - prevState.mouseY)
            }
        });
    }

    endDragging(){
        this.setState({
            dragging: false
        });
    }

    render(){
        var children;
        switch(this.state.display){
            case PROFILE_MODAL_DISPLAY_CONTENT.PROFILE:
                children = null;
                break;
            case PROFILE_MODAL_DISPLAY_CONTENT.NOTES:
                children = <Notes/>;
                break;
            default:
                children = null;
                break;
        }
        return (
            <div style={
                {
                    'width' : PROFILE_MODAL_DIMENSIONS.width + 'px',
                    'height': PROFILE_MODAL_DIMENSIONS.height + 'px',
                    'left' : this.state.positionX + 'px',
                    'top': this.state.positionY + 'px',
                    'zIndex': (this.props.active ? '7' : '3')
                }
            }
                 className={'student-profile-modal'}  >
                <NavBar closeModal={this.props.closeModal}
                        display={this.state.display}
                        changeDisplay={this.changeDisplay}
                        numberOfNotes={4}
                        startDragging={this.startDragging}
                        dragging={this.dragging}
                        endDragging={this.endDragging}
                        isDragging={this.state.dragging}/>
                {children}
            </div>
        );
    }
}

export default ProfileModal;

function confineHorizontalPosition(x){
    if (x  < 0){
        return 0;
    }
    if ((x >= 0) && (x + PROFILE_MODAL_DIMENSIONS.width <= window.innerWidth)){
        return x;
    }
    if (x + PROFILE_MODAL_DIMENSIONS.width > window.innerWidth){
        return window.innerWidth - PROFILE_MODAL_DIMENSIONS.width;
    }
}

function  confineVerticalPosition(y) {
    if (y  < 0){
        return 0;
    }
    if ((y >= 0) && (y + PROFILE_MODAL_DIMENSIONS.height <= window.innerHeight)){
        return y;
    }
    if (y + PROFILE_MODAL_DIMENSIONS.height > window.innerHeight){
        return window.innerHeight - PROFILE_MODAL_DIMENSIONS.height;
    }
}