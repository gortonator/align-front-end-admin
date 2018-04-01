import React from 'react';
import VirtualizedSelect from 'react-virtualized-select';

class StudentTableFilterBar extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const coopOptions = [
            {label:"all coop", value:"All Coop"},
            {label: "google", value: "google"},
            {label: "amazon", value: "amazon"},
            {label: "twitter", value: "twitter"}
        ];
        const campusOptions = [
            {label:"all campus", value:"All Campus"},
            {label: "boston", value: "Boston"},
            {label: "charlotte", value: "Charlotte"},
            {label: "silicon valey", value: "Silicon Valley"},
            {label: "seattle", value: "Seattle"}
        ];
        return (
          <div className={"student-table-filter-bar"}>
              <VirtualizedSelect
                  value={this.props.studentFilters.coopFilter}
                  options={coopOptions}
                  onChange={({value}) => this.props.onCoopFilterChanged(value)}
                  clearable={false}
                  className={"student-table-filter"}/>
              <VirtualizedSelect
                  value={this.props.studentFilters.campusFilter}
                  options={campusOptions}
                  onChange={({value}) => this.props.onCampusFilterChanged(value)}
                  clearable={false}
                  className={"student-table-filter"}/>
              <span style={{float: "right"}}>
                  {this.props.studentFilters.nameOrIdFilter && this.props.studentFilters.nameOrIdFilter.length > 0 && ("showing: " + this.props.studentFilters.nameOrIdFilter)}
              </span>
          </div>
        );
    }
}

export default StudentTableFilterBar;