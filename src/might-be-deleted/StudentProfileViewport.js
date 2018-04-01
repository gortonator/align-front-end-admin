import React from 'react';

class StudentProfileViewport extends React.Component{
    constructor(props){
        super(props);
        // this.state = {
        //     display: "none"
        // };
        // this.show = this.show.bind(this);
    }

    // componentWillMount(){
    //     setInterval(this.show,1000);
    // }
    //
    // show(){
    //     this.setState({
    //        display: "block"
    //     });
    // }

    render(){
        return (
            <div className={"student-profile-viewport"}>
                <span className={"glyphicon glyphicon-remove student-modal-closer"}
                      onClick={this.props.onCloseButtonClick}/>
            </div>);
    }

}

export default StudentProfileViewport;