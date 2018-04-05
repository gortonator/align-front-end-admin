import React from 'react';
import StudentSearch from './StudentSearch';

class AlignStudentHeading extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <div style={{'overflow' : 'auto'}}>
                    <span className={"student-heading"}>Align Students</span>
                    <StudentSearch/>
                </div>
                <a className={'add-filter-button'}
                   href={""}
                   onClick={this.props.onAddFilterButtonClick}>
                    Add Filter
                </a>

            </div>

        );
    }
}

export default AlignStudentHeading;