import React from 'react';
import {FILTER_MODAL_STATUSES} from '../AlignStudent';
import {CAMPUSES, ENROLLMENT_STATUSES, GENDER_OPTIONS, initialState} from "../../../reducers/align-students";

import CampusFilter from './filters/CampusFilter';
import CoopFilter from './filters/CoopFilter';
import ApplyButton from './controls/ApplyButton';
import Heading from './filters/Heading';
import EnrollmentStatusFilter from './filters/EnrollmentStatusFilter';
import GenderFilter from './filters/GenderFilter';
import MiscellaneousFilters from './filters/miscellaneous-filters/MiscellaneousFilters';
import RaceFilter from './filters/RaceFilter';
import UndergradMajorFilter from './filters/UndergradMajorFilter';
import CloseButton from './controls/CloseButton';

const defaultStudentFilter = {
    nameOrId: '',
    campus: {
        [CAMPUSES.BOSTON.value] : false,
        [CAMPUSES.CHARLOTTE.value] : false,
        [CAMPUSES.SEATTLE.value] : false,
        [CAMPUSES.SILICONVALLEY.value] : false
    },
    enrollmentStatus: {
        [ENROLLMENT_STATUSES.FULLTIME.value] : false,
        [ENROLLMENT_STATUSES.PARTTIME.value] : false,
        [ENROLLMENT_STATUSES.INACTIVE.value] : false,
        [ENROLLMENT_STATUSES.DROPOUT.value] : false
    },
    coop: '',
    gender: GENDER_OPTIONS.ANY.value,
    race: '',
    undergradMajor: '',
    nuUndergrad: false
};

class EditStudentFilterModal extends React.Component {
    constructor(props){
        super(props);
        this.state = JSON.parse(JSON.stringify(props.studentFilters));

        this.isCampusChosen = this.isCampusChosen.bind(this);
        this.toggleCampusOption = this.toggleCampusOption.bind(this);

        this.isEnrollmentStatusChosen = this.isEnrollmentStatusChosen.bind(this);
        this.toggleEnrollmentStatusOption = this.toggleEnrollmentStatusOption.bind(this);

        this.isTogglableOptionChosen = this.isTogglableOptionChosen.bind(this);
        this.toggleFilterOption = this.toggleFilterOption.bind(this);

        this.handleCoopFilterChange = this.handleCoopFilterChange.bind(this);
        this.handleGenderFilterChange = this.handleGenderFilterChange.bind(this);
        this.handleRaceFilterChange = this.handleRaceFilterChange.bind(this);
        this.handleUndergradMajorFilterChange = this.handleUndergradMajorFilterChange.bind(this);
        this.toggleNuUndergrad = this.toggleNuUndergrad.bind(this);

        this.applyFilters = this.applyFilters.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.clearAllFilters = this.clearAllFilters.bind(this);
    }

    isCampusChosen(campus){
        return this.state.campus.indexOf(campus) !== -1;
    }

    toggleCampusOption(campus){
        const index = this.state.campus.indexOf(campus);
        const newCampus = JSON.parse(JSON.stringify(this.state.campus));
        if (index === -1){
            newCampus.push(campus);
            this.setState({
                campus: newCampus
            });
        } else{
            newCampus.splice(index,1);
            this.setState({
                campus: newCampus
            });
        }
    }

    isTogglableOptionChosen(option,filter){
        return this.state[filter].indexOf(option) !== -1;
    }

    toggleFilterOption(option,filter){
        const index = this.state[filter].indexOf(option);
        const newFilter = JSON.parse(JSON.stringify(this.state[filter]));
        if (index === -1){
            newFilter.push(option);
            this.setState({
                [filter]: newFilter
            });
        } else{
            newFilter.splice(index,1);
            this.setState({
                [filter]: newFilter
            });
        }
    }

    isEnrollmentStatusChosen(status){
        return this.state.enrollmentStatus.indexOf(status) !== -1;
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

    handleCoopFilterChange(e) {
        this.setState(
            {
                coop: e.target.value
            }
        );
    }

    handleGenderFilterChange(e){
        this.setState(
            {
                gender: e.target.value
            }
        );
    }

    handleRaceFilterChange(e){
        this.setState(
            {
                race: e.target.value
            }
        );
    }

    handleUndergradMajorFilterChange(e){
        this.setState(
            {
                undergradMajor: e.target.value
            }
        );
    }

    toggleNuUndergrad(){
        this.setState(
            {
                nuUndergrad: !this.state.nuUndergrad
            }
        );
    }

    applyFilters(){
        this.props.applyFilters(this.state);
        this.props.closeModal();
    }

    closeModal(){
        this.props.closeModal();
    }

    clearAllFilters(){
        this.setState({
            ...JSON.parse(JSON.stringify(defaultStudentFilter)),
            nameOrId: this.state.nameOrId
        });
    }

    render(){
        return (
            this.props.modalStatus === FILTER_MODAL_STATUSES.OPENED &&
            <div className={"edit-student-filter-modal"} style={{"width": "28%", height: window.innerHeight}}>

                <CloseButton closeModal={this.closeModal}/>

                <Heading clearAllFilters={this.clearAllFilters}/>

                <CampusFilter isCampusChosen={campus => this.isTogglableOptionChosen(campus,'campus')}
                              toggleCampusOption={campus => this.toggleFilterOption(campus,'campus')}/>

                <EnrollmentStatusFilter isEnrollmentStatusChosen={enrollmentStatus =>
                    this.isTogglableOptionChosen(enrollmentStatus,'enrollmentStatus')}
                                        toggleEnrollmentStatusOption={enrollmentStatus =>
                                            this.toggleFilterOption(enrollmentStatus,'enrollmentStatus')}/>

                <CoopFilter onChange={this.handleCoopFilterChange}
                            value={this.state.coop}/>

                <GenderFilter onChange={this.handleGenderFilterChange}
                              value={this.state.gender}/>

                <RaceFilter onChange={this.handleRaceFilterChange}
                            value={this.state.race}/>

                <UndergradMajorFilter onChange={this.handleUndergradMajorFilterChange}
                                      value={this.state.undergradMajor}/>

                <MiscellaneousFilters onNuUndergradToggle={this.toggleNuUndergrad}
                                      nuUndergradChecker={this.state.nuUndergrad}/>

                <ApplyButton applyFilters={this.applyFilters}/>

            </div>
        );
    }
}

export default EditStudentFilterModal;

