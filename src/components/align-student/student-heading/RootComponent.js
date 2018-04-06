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
                    <StudentSearch applyFilters={this.props}/>
                </div>
                <a className={'add-filter-button'}
                   href={""}
                   onClick={this.props.onAddFilterButtonClick}>
                    Edit Filters
                </a>

            </div>

        );
    }
}

export default props => (
    <div>
        <div style={{'overflow' : 'auto'}}>
            <span className={"student-heading"}>Align Students</span>
            <StudentSearch applyFilters={props.applyFilters} studentFilters={props.studentFilters}/>
        </div>
        <a className={'add-filter-button'}
           href={""}
           onClick={props.onAddFilterButtonClick}>
            Edit Filters
        </a>
    </div>
);