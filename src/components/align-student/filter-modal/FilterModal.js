import React from 'react';
import {FILTER_MODAL_STATUSES} from '../AlignStudent';
import {CAMPUSES, ENROLLMENT_STATUSES, GENDER_OPTIONS, initialState} from "../../../reducers/align-students";

import CampusFilter from './filters/CampusFilter';
import CoopFilter from './filters/CoopFilter';
import ApplyButton from './controls/ApplyButton';
import Heading from './filters/Heading';
import EnrollmentStatusFilter from './filters/EnrollmentStatusFilter';
import GenderFilter from './filters/GenderFilter';
import MiscellaneousFilters from './filters/miscellaneous-filters/RootComponent';
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

    toggleNuUndergrad(e){
        e.preventDefault();
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

                <CampusFilter optionChecker={this.isCampusChosen}
                              onOptionToggle={this.toggleCampusOption}/>

                <EnrollmentStatusFilter optionChecker={this.isEnrollmentStatusChosen}
                                        onOptionToggle={this.toggleEnrollmentStatusOption}/>

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

