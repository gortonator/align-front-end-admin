import React from 'react';

export default function (props){
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

  </div>);
}
