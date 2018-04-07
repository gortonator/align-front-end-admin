import React from 'react';
import Heading from '../../redux-bindings/align-students/StudentHeading';
import Table from '../../redux-bindings/align-students/StudentTable';
import AppliedFilters from "../../redux-bindings/align-students/AppliedFilters";
import FilterModal from "../../redux-bindings/align-students/FilterModal";

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
            filterModalStatus: FILTER_MODAL_STATUSES.CLOSED
        };
        this.openFilterModal = this.openFilterModal.bind(this);
        this.closeFilterModal = this.closeFilterModal.bind(this);
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

    render(){
        return (
            <div className={'align-student'}>
                {
                    this.state.filterModalStatus === FILTER_MODAL_STATUSES.OPENED &&
                    <FilterModal closeModal={this.closeFilterModal}
                                 modalStatus={this.state.filterModalStatus}/>
                }
                <Heading openFilterModal={this.openFilterModal}/>
                <AppliedFilters/>
                <hr/>
                <Table/>
            </div>
        );
    }
}

export default AlignStudent;

