import React from 'react';
import {editStudentFilterModalStatus} from '../../actions/align-students-actions';
import {initialState} from "../../reducers/align-students";

import CampusFilter from './student-filters/CampusFilter';
import CoopFilter from './student-filters/CoopFilter';
import EditStudentFilterControl from './student-filters/EditStudentFilterControl';
import EditStudentFilterHeading from './student-filters/EditStudentFilterHeading';
import EnrollmentStatusFilter from './student-filters/EnrollmentStatusFilter';
import GenderFilter from './student-filters/GenderFilter';
import MiscellaneousFilters from './student-filters/MiscellaneousFilters';
import RaceFilter from './student-filters/RaceFilter';


const defaultStudentFilter = JSON.parse(JSON.stringify(initialState.studentFilters));

class EditStudentFilterModal extends React.Component {
    constructor(props){
        super(props);
        this.state = JSON.parse(JSON.stringify(props.studentFilters));

        this.isCampusChosen = this.isCampusChosen.bind(this);
        this.toggleCampusOption = this.toggleCampusOption.bind(this);

        this.isEnrollmentStatusChosen = this.isEnrollmentStatusChosen.bind(this);
        this.toggleEnrollmentStatusOption = this.toggleEnrollmentStatusOption.bind(this);

        this.onCancelButtonClick = this.onCancelButtonClick.bind(this);
        this.clearAllFilters = this.clearAllFilters.bind(this);
    }

    componentDidUpdate(){
        console.log(this.state);
    }

    isCampusChosen(campus){
        return this.state.campus[campus];
    }

    toggleCampusOption(campus){
        return (e => {
            e.preventDefault();
            this.setState({
                campus: {
                    ...this.state.campus,
                    [campus] : !this.state.campus[campus]
                }
            });
        });
    }

    isEnrollmentStatusChosen(status){
        return this.state.enrollmentStatus[status];
    }

    toggleEnrollmentStatusOption(status){
        return (e =>{
            e.preventDefault();
            this.setState({
                enrollmentStatus: {
                    ...this.state.enrollmentStatus,
                    [status] : !this.state.enrollmentStatus[status]
                }
            });
        });
    }

    onCancelButtonClick(e){
        e.preventDefault();
        this.setState(JSON.parse(JSON.stringify(this.props.studentFilters)));
        this.props.closeModal();
    }

    clearAllFilters(e){
        e.preventDefault();
        this.setState(JSON.parse(JSON.stringify(defaultStudentFilter)));
    }

    render(){
        return (
            this.props.editStudentFilterModal === editStudentFilterModalStatus.OPENED &&
            <div className={"edit-student-filter-modal"} style={{"width": (0.27 * window.innerWidth), height: window.innerHeight}}>

                <EditStudentFilterHeading clearAllFilters={this.clearAllFilters}/>

                <CampusFilter isCampusChosen={this.isCampusChosen}
                              toggleCampusOption={this.toggleCampusOption}/>

                <EnrollmentStatusFilter isEnrollmentStatusChosen={this.isEnrollmentStatusChosen}
                                        toggleEnrollmentStatusFilterOption={this.toggleEnrollmentStatusOption}/>

                <CoopFilter/>

                <GenderFilter/>

                <RaceFilter/>

                <MiscellaneousFilters/>

                <EditStudentFilterControl onCancelButtonClick={this.onCancelButtonClick}/>

            </div>
        );
    }
}

export default EditStudentFilterModal;

