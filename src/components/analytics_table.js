import React from 'react';

export default function (props){

  if(props.analytics && props.chartSelected=="gender-ratio"){
      // const yearsList=[
      //     {"year":"2018","male":400,"female":500},
      //     {"year":"2017","male":500,"female":400},
      //     {"year":"2016","male":700,"female":300},
      //     {"year":"2015","male":600,"female":500},
      //     {"year":"2014","male":800,"female":1000}
      // ];
      var i=0;
      // var sortHeaders=Object.keys(yearsList[0]).map((header)=>{
      //   return <option key={header} value={header}>{header}</option
      // });
      // listOfRows= yearsList.map((year)=>{

      const listOfYears= props.analytics.yearlyratio.map((year)=>{
          i=i+1;
          return <tr key={year.year}><td>{i}</td><td>{year.year}</td><td>{year.male}</td><td>{year.female}</td></tr>
      });
      return (
          <table className="table table-bordered">
            <thead>
            <tr>
                <th className="text-align-center">No.</th>
                <th className="text-align-center">Year</th>
                <th className="text-align-center">Male</th>
                <th className="text-align-center">Female</th>
            </tr>
            </thead>
            <tbody>
                {listOfYears}
            </tbody>
        </table>);
  }
  if(props.analytics && props.chartSelected=="company"){
    const studlist=[{
        "name":"student A",
        "nuid":"0012345"
    },{
        "name":"student B",
        "nuid":"0012346"
    },{
        "name":"student C",
        "nuid":"0012347"
    }];
      const listOfStudent= studlist.map((student)=>{
      // const listOfStudent= props.analytics.students.map((student)=>{
          return <tr key={student.nuid}><td>{student.nuid}</td><td>{student.name}</td></tr>
      });
      return (<table className="table table-bordered">
          <thead>
          <tr>
              <th className="text-align-center">Nuid</th>
              <th className="text-align-center">Student Name</th>
          </tr>
          </thead>
          <tbody>
          {listOfStudent}
          </tbody>
      </table>);
  }
  if(props.analytics && props.chartSelected=="top-employers"){
      const listOfCompanies=[
        {"name":"Amazon","students":"90"},
        {"name":"Apple","students":"80"},
        {"name":"IBM","students":"95"},
        {"name":"Facebook","students":"85"},
        {"name":"MathWorks","students":"75"},
        {"name":"Google","students":"45"},
        {"name":"HubSpot","students":"55"},
        {"name":"NYL","students":"110"},
        {"name":"Palantir","students":"60"},
        {"name":"Fidelity","students":"70"}].map((company)=>{
      // const listOfCompanies= props.analytics.employers.map((company)=>{
          return <tr key={company.name}><td>{company.name}</td><td>{company.students}</td></tr>
      });
      return (<table className="table table-bordered">
          <thead>
          <tr>
              <th className="text-align-center">Company Name</th>
              <th className="text-align-center">Students Count</th>
          </tr>
          </thead>
          <tbody>
          {listOfCompanies}
          </tbody>
      </table>);
  }
}
