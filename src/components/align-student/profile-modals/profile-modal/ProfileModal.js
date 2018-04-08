import React from 'react';
import NavBar from './nav-bar/NavBar';
import Notes from './notes/Notes';
import {ASYNC_ACTION_STATUSES} from "../../../../reducers/align-students";
import RetrievalOngoingMessage from "../../../common/data-retrieval-messages/RetrievalOngoingMessage";
import RetrievalFailureMessage from '../../../common/data-retrieval-messages/RetrievalFailureMessage';

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
            dragging: false,
            profile: null
        };
        this.changeDisplay = this.changeDisplay.bind(this);
        this.startDragging = this.startDragging.bind(this);
        this.dragging =this.dragging.bind(this);
        this.endDragging = this.endDragging.bind(this);
    }

    componentDidMount(){
        const profileFound = this.props.studentProfiles.find(p => p.nuid === this.props.nuid);
        if (profileFound === undefined){
            this.props.retrieveStudentProfile(this.props.nuid);
        } else{
            this.setState({
                profile: profileFound
            });
        }
    }

    componentDidUpdate(props,state){
        if (this.state.dragging && !state.dragging) {
            document.addEventListener('mousemove', this.dragging);
            document.addEventListener('mouseup', this.endDragging);
        }
        if (!this.state.dragging && state.dragging) {
            document.removeEventListener('mousemove', this.dragging);
            document.removeEventListener('mouseup', this.endDragging);
        }
        if (JSON.stringify(this.props.studentProfiles) !== JSON.stringify(props.studentProfiles)){
            this.setState({
                profile: this.props.studentProfiles.find(p => p.nuid === this.props.nuid)
            });
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
        return (
            <div style={
                {
                    'width' : PROFILE_MODAL_DIMENSIONS.width + 'px',
                    'height': PROFILE_MODAL_DIMENSIONS.height + 'px',
                    'left' : this.state.positionX + 'px',
                    'top': this.state.positionY + 'px',
                    'zIndex': (this.props.isActive ? '7' : '3')
                }
            }
                 className={'student-profile-modal'}
                 onClick={ e => {
                     e.preventDefault();
                     this.props.activateThisModal();}}>
                <NavBar closeModal={this.props.closeModal}
                        display={this.state.display}
                        changeDisplay={this.changeDisplay}
                        numberOfNotes={4}
                        startDragging={this.startDragging}
                        dragging={this.dragging}
                        endDragging={this.endDragging}
                        isDragging={this.state.dragging}
                        name={this.props.name}
                        profile={this.state.profile}/>
                {getDisplayContent(this.state.profile,this.state.display)}
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

const notes = [
    {
        noteId: '1',
        title: '1',
        desc: '1'
    },
    {
        noteId: '2',
        title: '2',
        desc: '2'
    }
];

function getDisplayContent(profile,display,onCancel,onRetry){
    if (profile === null){
        return null;
    } else {
        switch (profile.retrievalStatus){
            case ASYNC_ACTION_STATUSES.ONGOING:
                return <RetrievalOngoingMessage message={'Retrieving profile...'}/>;
            case ASYNC_ACTION_STATUSES.FAILURE:
                return <RetrievalFailureMessage message={'Profile retrieval failed.'}/>
            case ASYNC_ACTION_STATUSES.SUCCESS:
            {
                if (profile.personalInformation === null) return null;
                var children;
                switch(display){
                    case PROFILE_MODAL_DISPLAY_CONTENT.PROFILE:
                        return JSON.stringify(profile.personalInformation);
                    case PROFILE_MODAL_DISPLAY_CONTENT.NOTES:
                        return <Notes notes={profile.notes}/>;
                    default:
                        return null;
                }
            }

        }
    }
}