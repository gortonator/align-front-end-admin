import React from 'react';
import StudentProfileViewport from './StudentProfileViewport';


class StudentProfileModal extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const visibility = {display: this.props.modalOpened ? "block" : "none"};
        return (
            <div style={visibility} className={"profile-modal"}>
                {this.props.modalOpened ? <StudentProfileViewport onCloseButtonClick={this.props.onCloseButtonClick}/> : null}
            </div>
        )
    }
}

export default StudentProfileModal;
