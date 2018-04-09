import React from 'react';
import Heading from '../../redux-bindings/align-students/StudentHeading';
import Table from '../../redux-bindings/align-students/StudentTable';
import AppliedFilters from "../../redux-bindings/align-students/AppliedFilters";
import FilterModal from "../../redux-bindings/align-students/FilterModal";
import ProfileModals from "../../redux-bindings/align-students/ProfileModals";
import { CSSTransition } from 'react-transition-group';

// Edit Student Filters Modal Statuses
export const FILTER_MODAL_STATUSES = {
    CLOSED: 'CLOSED',
    OPENED: 'OPENED'
};

class AlignStudent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            openedProfiles: [],
            filterModalStatus: FILTER_MODAL_STATUSES.CLOSED,
            activeProfile: ''
        };

        this.openFilterModal = this.openFilterModal.bind(this);
        this.closeFilterModal = this.closeFilterModal.bind(this);
        this.openProfileModal = this.openProfileModal.bind(this);
        this.closeProfileModal = this.closeProfileModal.bind(this);
    }

    closeFilterModal(){
        this.setState({
            filterModalStatus: FILTER_MODAL_STATUSES.CLOSED
        });
    }

    openFilterModal(){
        this.setState({
            filterModalStatus: FILTER_MODAL_STATUSES.OPENED
        });
    }

    openProfileModal(nuid){
        const profileFound = this.state.openedProfiles.find(p => p === nuid);
        if ( profileFound !== undefined){
            this.setState(
                {
                    activeProfile: nuid
                }
            );
        } else{
            this.setState(prevState => {
                const openedProfiles = JSON.parse(JSON.stringify(prevState.openedProfiles));
                openedProfiles.push(nuid);
                return {
                    openedProfiles: openedProfiles
                };
            });
        }
    }

    closeProfileModal(nuid){
        const profileIndex = this.state.openedProfiles.indexOf(nuid);
        if (profileIndex !== undefined){
            this.setState(prevState => {
                const openedProfiles = JSON.parse(JSON.stringify(prevState.openedProfiles));
                openedProfiles.splice(profileIndex,1);
                console.log(openedProfiles,profileIndex);
                return {
                    openedProfiles: openedProfiles
                };
            });
        }
    }

    render(){
        return (
            <div className={'align-student'}>
                {/*{*/}
                    {/*this.state.filterModalStatus === FILTER_MODAL_STATUSES.OPENED &&*/}
                    {/*<FilterModal closeModal={this.closeFilterModal}*/}
                                 {/*modalStatus={this.state.filterModalStatus}/>*/}
                {/*}*/}

                <CSSTransition timeout={300}
                               unmountOnExit
                               in={this.state.filterModalStatus === FILTER_MODAL_STATUSES.OPENED}
                               classNames={'student-filter-modal'}>
                    <FilterModal closeModal={this.closeFilterModal}/>
                </CSSTransition>



                <Heading openFilterModal={this.openFilterModal}/>
                <AppliedFilters/>
                <hr/>
                <Table openProfileModal={this.openProfileModal}/>
                <ProfileModals openedProfiles={this.state.openedProfiles}
                               activeProfile={this.state.activeProfile}
                               closeProfileModal={this.closeProfileModal}
                               openProfileModal={this.openProfileModal}/>
            </div>
        );
    }
}

export default AlignStudent;

