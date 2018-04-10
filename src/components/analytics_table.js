import React from 'react';

export default function (props) {

    if (props.analytics && props.chartSelected == "gender-ratio") {
        // console.log(props.analytics);
        if(props.analytics.length==0)
return (<h4> No Data found ! </h4>);
        else{
          var i = 0;
          const chartHeaders = props.chartHeaders.map((head) => {
              return <th key={head.value} className="text-align-center">{head.label}</th>;
          });
        const listOfYears = props.analytics.map((year) => {
            i = i + 1;
            return <tr key={year.year}>
                <td>{i}</td>
                <td>{year.year}</td>
                <td>{year.male}</td>
                <td>{year.female}</td>
            </tr>
        });
        return (
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th className="text-align-center">No.</th>
                    {chartHeaders}
                </tr>
                </thead>
                <tbody>
                {listOfYears}
                </tbody>
            </table>);
    }
  }
    if (props.analytics && props.chartSelected == "company") {
          if(props.analytics.length==0)
  return (<h4> No Data found ! </h4>);
  else{
        var i = 0;
        const chartHeaders = props.chartHeaders.map((head) => {
            return <th key={head.value} className="text-align-center">{head.label}</th>;
        });

        const listOfStudents = props.analytics.map((student) => {
            i = i + 1;
            return <tr key={student.nuid}>
                <td>{i}</td>
                <td>{student.nuid}</td>
                <td>{student.name}</td>
            </tr>
        });
        return (<table className="table table-bordered">
            <thead>
            <tr>
                <th className="text-align-center">No.</th>
                {chartHeaders}
            </tr>
            </thead>
            <tbody>
            {listOfStudents}
            </tbody>
        </table>);
    }
  }
    if (props.analytics && props.chartSelected == "top-employers") {
      if(props.analytics.length==0)
return (<h4> No Data found ! </h4>);
else{
        var i = 0;

        const chartHeaders = props.chartHeaders.map((head) => {
            return <th key={head.value} className="text-align-center">{head.label}</th>;
        });

        const listOfCompanies = props.analytics.map((company) => {
            i = i + 1;
            return <tr key={company.name}>
                <td>{i}</td>
                <td>{company.name}</td>
                <td>{company.students}</td>
            </tr>
        });
        return (<table className="table table-bordered">
            <thead>
            <tr>
                <th className="text-align-center">No.</th>
                {chartHeaders}
            </tr>
            </thead>
            <tbody>
            {listOfCompanies}
            </tbody>
        </table>);
    }
  }

    if (props.analytics && props.chartSelected == "coop-students") {
      if(props.analytics.length==0)
return (<h4> No Data found ! </h4>);
else{
        var i = 0;
        const chartHeaders = props.chartHeaders.map((head) => {
            return <th key={head.value} className="text-align-center">{head.label}</th>;
        });
        const studentsList = props.analytics.map((student) => {
            i = i + 1;
            var x = 0;
            return <tr key={student.nuid}>
                <td>{i}</td>
                <td>{student.nuid}</td>
                <td>{student.name}</td>
                <td>{student.companies ? student.companies.map((company) => {
                        if (x > 0)
                            return "," + company;
                        x = x + 1;
                        return company;
                    }):null}
                </td>
            </tr>
        });
        return (
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th className="text-align-center">No.</th>
                    {chartHeaders}
                </tr>
                </thead>
                <tbody>
                {studentsList}
                </tbody>
            </table>);
    }
  }

    if (props.analytics && props.chartSelected == "working") {
      if(props.analytics.length==0)
return (<h4> No Data found ! </h4>);
else{
        var i = 0;
        const chartHeaders = props.chartHeaders.map((head) => {
            return <th key={head.value} className="text-align-center">{head.label}</th>;
        });
        const studentsList = props.analytics.map((student) => {
            i = i + 1;
            var x = 0;
            return <tr key={i}>
                <td>{i}</td>
                <td>{student.nuid}</td>
                <td>{student.name}</td>
                <td>{student.company}</td>
            </tr>
        });
        return (
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th className="text-align-center">No.</th>
                    {chartHeaders}
                </tr>
                </thead>
                <tbody>
                {studentsList}
                </tbody>
            </table>);
    }
  }

    if (props.analytics && props.chartSelected == "top-electives") {
      if(props.analytics.length==0)
return (<h4> No Data found ! </h4>);
else{
        var i = 0;
        const chartHeaders = props.chartHeaders.map((head) => {
            return <th key={head.value} className="text-align-center">{head.label}</th>;
        });
        const electivesList = props.analytics.map((elective) => {
            i = i + 1;
            var x = 0;
            return <tr key={elective.elective}>
                <td>{i}</td>
                <td>{elective.elective}</td>
                <td>{elective.students}</td>
            </tr>
        });
        return (
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th className="text-align-center">No.</th>
                    {chartHeaders}
                </tr>
                </thead>
                <tbody>
                {electivesList}
                </tbody>
            </table>);
    }
  }

    if (props.analytics && props.chartSelected == "undergrad-institutions") {
      if(props.analytics.length==0)
return (<h4> No Data found ! </h4>);
else{
        var i = 0;
        const chartHeaders = props.chartHeaders.map((head) => {
            return <th key={head.value} className="text-align-center">{head.label}</th>;
        });
        const institutionList = props.analytics.map((institution) => {
            i = i + 1;
            var x = 0;
            return <tr key={institution.name}>
                <td>{i}</td>
                <td>{institution.name}</td>
                <td>{institution.count}</td>
            </tr>
        });
        return (
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th className="text-align-center">No.</th>
                    {chartHeaders}
                </tr>
                </thead>
                <tbody>
                {institutionList}
                </tbody>
            </table>);
    }
  }

    if (props.analytics && props.chartSelected == "top-bachelor-degrees") {
      if(props.analytics.length==0)
return (<h4> No Data found ! </h4>);
else{
        var i = 0;
        const chartHeaders = props.chartHeaders.map((head) => {
            return <th key={head.value} className="text-align-center">{head.label}</th>;
        });
        const DegreeList = props.analytics.map((degree) => {
            i = i + 1;
            var x = 0;
            return <tr key={degree.degree}>
                <td>{i}</td>
                <td>{degree.degree}</td>
                <td>{degree.students}</td>
            </tr>
        });
        return (
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th className="text-align-center">No.</th>
                    {chartHeaders}
                </tr>
                </thead>
                <tbody>
                {DegreeList}
                </tbody>
            </table>);
    }
  }
}
