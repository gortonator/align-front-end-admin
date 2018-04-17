import React from 'react';

export default function (props){
    console.log("in analytics_filter");
  return (<div className="analytics-filter">
        <div className="analytics-query-header text-align-center large-font col-sm-12" >Queries</div>
        <div className="analytics-query col-sm-12" onClick={props.toggleGenderRatio}>Gender Ratio</div>
        <div className={props.genderRatioFlag+" analytics-options col-sm-12"}>
                <div>
                    <label>Choose Campus:</label>
                </div>
            {props.getCampusOptions(props.campusOptions)}
            <button type="Submit" onClick={props.getGenderRatioChart}>Submit</button>
        </div>
        <div className="analytics-query col-sm-12" onClick={props.toggleCompany}>Filter students by company</div>
        <div className={props.companyFlag+" analytics-options col-sm-12"}>
            <div>
                <label>Choose Campus:</label>
            </div>
            {props.getCampusOptions(props.campusOptions)}
            <hr />
            <div>
            <label>Enter Company Name</label>
            <input type="text" placeholder="Company Name" onChange={ e => props.onCompanyChange(e.target.value)}/>
            </div>
            <hr />
            <div className="form-group">
                <label>Select Year</label>
                <select className="form-control custom-select" type="text" onChange={ e => props.onYearChange(e.target.value)}>
                    {props.getYears(props.degreeYearOptions)}
                </select>
            </div>
            <button type="Submit" onClick={props.getCompanyChart}>Submit</button>
        </div>
        <div className="analytics-query col-sm-12" onClick={props.toggleTop10Employers}>Top 10 Employers</div>
        <div className={"analytics-options col-sm-12 "+props.top10EmployersFlag}>
          <div>
              <label>Choose Campus:</label>
          </div>
          {props.getCampusOptions(props.campusOptions)}
          <hr />
          <div className="form-group">
              <label>Select Year</label>
              <select className="form-control custom-select" type="text" onChange={ e => props.onYearChange(e.target.value)}>
                  {props.getYears(props.degreeYearOptions)}
              </select>
          </div>
            <button type="Submit" onClick={props.getTop10EmployersChart}>Submit</button>
        </div>

      <div className="analytics-query col-sm-12" onClick={props.toggleCoopStudents}>Co-op Students</div>
      <div className={"analytics-options col-sm-12 "+props.coopStudentsFlag}>
          <div>
              <label>Choose Campus:</label>
          </div>
          {props.getCampusOptions(props.campusOptions)}
          <hr />
          <div className="form-group">
              <label>Select Year</label>
              <select className="form-control custom-select" type="text" onChange={ e => props.onYearChange(e.target.value)}>
                  {props.getYears(props.degreeYearOptions)}
              </select>
          </div>
          <button type="Submit" onClick={props.getCoopStudentChart}>Submit</button>
      </div>

      <div className="analytics-query col-sm-12" onClick={props.toggleWorking}>Working Students</div>
      <div className={"analytics-options col-sm-12 "+props.workingFlag}>
          <div>
              <label>Choose Campus:</label>
          </div>
          {props.getCampusOptions(props.campusOptions)}
          <hr />
          <div className="form-group">
              <label>Select Year</label>
              <select className="form-control custom-select" type="text" onChange={ e => props.onYearChange(e.target.value)}>
                  {props.getYears(props.degreeYearOptions)}
              </select>
          </div>
          <button type="Submit" onClick={props.getWorkingChart}>Submit</button>
      </div>

      <div className="analytics-query col-sm-12" onClick={props.toggleTop10Electives}>Top 10 Electives</div>
      <div className={"analytics-options col-sm-12 "+props.top10ElectivesFlag}>
          <div>
              <label>Choose Campus:</label>
          </div>
          {props.getCampusOptions(props.campusOptions)}
          <hr />
          <div className="form-group">
              <label>Select Year</label>
              <select className="form-control custom-select" type="text" onChange={ e => props.onYearChange(e.target.value)}>
                  {props.getYears(props.degreeYearOptions)}
              </select>
          </div>
          <button type="Submit" onClick={props.getTop10ElectivesChart}>Submit</button>
      </div>

      <div className="analytics-query col-sm-12" onClick={props.toggleUndergradInstitutions}>Undergrad Institutions</div>
      <div className={"analytics-options col-sm-12 "+props.UndergradInstitutionsFlag}>
          <div>
              <label>Choose Campus:</label>
          </div>
          {props.getCampusOptions(props.campusOptions)}
          <hr />
          <div className="form-group">
              <label>Select Year</label>
              <select className="form-control custom-select" type="text" onChange={ e => props.onYearChange(e.target.value)}>
                  {props.getYears(props.degreeYearOptions)}
              </select>
          </div>
          <button type="Submit" onClick={props.getUndergradInstitutionsChart}>Submit</button>
      </div>

      <div className="analytics-query col-sm-12" onClick={props.toggleTop10BachelorsDegree}>Top 10 Bachelors Degree</div>
      <div className={"analytics-options col-sm-12 "+props.top10BachelorsDegreeFlag}>
          <div>
              <label>Choose Campus:</label>
          </div>
         {props.getCampusOptions(props.campusOptions)}
          <hr />
          <div className="form-group">
              <label>Select Year</label>
              <select className="form-control custom-select" type="text" onChange={ e => props.onYearChange(e.target.value)}>
                  {props.getYears(props.degreeYearOptions)}
              </select>
          </div>
          <button type="Submit" onClick={props.getTop10BachelorsDegreeChart}>Submit</button>
      </div>
  </div>);
}
