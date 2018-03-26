import React from 'react';
import {editStudentFilterModalStatus} from '../../actions/align-student-actions';
import TogglableFilter from './TogglableFIlter';

const defaultStudentFilter = {
    nameOrIdFilter: null,
    campusFilter: [
        {
            name: "boston",
            isSet: false
        },
        {
            name: "charlotte",
            isSet: false
        },
        {
            name: "seattle",
            isSet: false
        },
        {
            name: "silicon valley",
            isSet: false
        }
    ],
    coopFilter: "All Coop"
};

class EditStudentFilterModal extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            studentFilters: JSON.parse(JSON.stringify(props.studentFilters)),
            editStudentFilterModal: props.editStudentFilterModal
        };
        this.isCampusChosen = this.isCampusChosen.bind(this);
        this.toggleCampusFilter = this.toggleCampusFilter.bind(this);
        this.onCancelButtonClick = this.onCancelButtonClick.bind(this);
        this.clearAllFilters = this.clearAllFilters.bind(this);
    }

    isCampusChosen(campus){
        return this.state.studentFilters.campusFilter.find(c => c.name === campus).isSet;
    }

    toggleCampusFilter(e){
        e.preventDefault();
        const campus = e.target.innerHTML.toLowerCase();
        const newCampusFilter = JSON.parse(JSON.stringify(this.state.studentFilters.campusFilter));
        newCampusFilter.find((c,i) => {
            if (c.name === campus){
                newCampusFilter[i].isSet = !newCampusFilter[i].isSet;
                return true;
            }
        });
        this.setState({
            studentFilters: {
                campusFilter: newCampusFilter
            }
        });
    }

    onCancelButtonClick(e){
        e.preventDefault();
        this.setState({
            studentFilters: JSON.parse(JSON.stringify(this.props.studentFilters))
        });
        this.props.closeModal();
    }

    clearAllFilters(e){
        e.preventDefault();
        this.setState({
            studentFilters: JSON.parse(JSON.stringify(defaultStudentFilter))
        });
    }

    render(){
        return (
            this.props.editStudentFilterModal === editStudentFilterModalStatus.OPENED &&
            <div className={"edit-student-filter-modal"} style={{"width": "25%", height: window.innerHeight}}>
                <h3>Edit Filters</h3>
                <a href={""}
                   className={"clear-filter-link"}
                   onClick={this.clearAllFilters}>
                    Clear all filters
                </a>

                <h4>Campus</h4>
                <div>
                    <TogglableFilter containerStyle={"campus-filter-container"}
                                     filterStyle={"campus-filter " +
                                     (this.isCampusChosen("boston") ? "campus-filter-selected" : "campus-filter-unselected")}
                                     onToggle={this.toggleCampusFilter}
                                     name={'Boston'}/>
                    <TogglableFilter containerStyle={"campus-filter-container"}
                                     filterStyle={"campus-filter " +
                                     (this.isCampusChosen("charlotte") ? "campus-filter-selected" : "campus-filter-unselected")}
                                     onToggle={this.toggleCampusFilter}
                                     name={'Charlotte'}/>
                    <TogglableFilter containerStyle={"campus-filter-container"}
                                     filterStyle={"campus-filter " +
                                     (this.isCampusChosen("seattle") ? "campus-filter-selected" : "campus-filter-unselected")}
                                     onToggle={this.toggleCampusFilter}
                                     name={'Seattle'}/>
                    <TogglableFilter containerStyle={"campus-filter-container"}
                                     filterStyle={"campus-filter " +
                                     (this.isCampusChosen("silicon valley") ? "campus-filter-selected" : "campus-filter-unselected")}
                                     onToggle={this.toggleCampusFilter}
                                     name={'Silicon Valley'}/>
                </div>
                <div className={"edit-student-filter-modal-button-container"}>
                    <a href={""} className={"edit-student-filter-modal-button"}>
                        Apply
                    </a>
                </div>
                <div className={"edit-student-filter-modal-button-container"}>
                    <a href={""} className={"edit-student-filter-modal-button"} onClick={this.onCancelButtonClick}>
                        Cancel
                    </a>
                </div>

            </div>
        );
    }
}

export default EditStudentFilterModal;