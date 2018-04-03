import React from 'react';

export default function (props) {

    if (props.analytics && props.chartSelected == "gender-ratio") {
        var i = 0;
        const chartHeaders = props.chartHeaders.map((head) => {
            return <th key={head.value} className="text-align-center">{head.label}</th>;
        });
        // console.log(props.analytics);
        const listOfYears = props.analytics.map((year) => {
            i = i + 1;
            return <tr key={year.entryYear}>
                <td>{i}</td>
                <td>{year.entryYear}</td>
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
    if (props.analytics && props.chartSelected == "company") {
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
    if (props.analytics && props.chartSelected == "top-employers") {
        var i = 0;

        const chartHeaders = props.chartHeaders.map((head) => {
            return <th key={head.value} className="text-align-center">{head.label}</th>;
        });

        const listOfCompanies = props.analytics.map((company) => {
            i = i + 1;
            return <tr key={company.name}>
                <td>{i}</td>
                <td>{company.companyName}</td>
                <td>{company.totalStudents}</td>
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

    if (props.analytics && props.chartSelected == "coop-students") {
        var i = 0;
        const chartHeaders = props.chartHeaders.map((head) => {
            return <th key={head.value} className="text-align-center">{head.label}</th>;
        });
        const studentsList = props.analytics.map((student) => {
            i = i + 1;
            var x = 0;
            return <tr key={student.neuId}>
                <td>{i}</td>
                <td>{student.neuId}</td>
                <td>{student.firstName+" "+student.lastName}</td>
                <td>{student.companies.map((company) => {
                        if (x > 0)
                            return "," + company;
                        x = x + 1;
                        return company;
                    })}
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

    if (props.analytics && props.chartSelected == "working") {
        var i = 0;
        const chartHeaders = props.chartHeaders.map((head) => {
            return <th key={head.value} className="text-align-center">{head.label}</th>;
        });
        const studentsList = props.analytics.map((student) => {
            i = i + 1;
            var x = 0;
            return <tr key={i}>
                <td>{i}</td>
                <td>{student.neuId}</td>
                <td>{student.firstName+" "+student.lastName}</td>
                <td>{student.companies?student.companies[0]:""}</td>
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

    if (props.analytics && props.chartSelected == "top-electives") {
        var i = 0;
        const chartHeaders = props.chartHeaders.map((head) => {
            return <th key={head.value} className="text-align-center">{head.label}</th>;
        });
        const electivesList = props.analytics.map((elective) => {
            i = i + 1;
            var x = 0;
            return <tr key={elective.courseName}>
                <td>{i}</td>
                <td>{elective.courseName}</td>
                <td>{elective.totalStudents}</td>
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

    if (props.analytics && props.chartSelected == "undergrad-institutions") {
        var i = 0;
        const chartHeaders = props.chartHeaders.map((head) => {
            return <th key={head.value} className="text-align-center">{head.label}</th>;
        });
        const institutionList = props.analytics.map((institution) => {
            i = i + 1;
            var x = 0;
            return <tr key={institution.institutionName}>
                <td>{i}</td>
                <td>{institution.institutionName}</td>
                <td>{institution.totalStudents}</td>
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

    if (props.analytics && props.chartSelected == "top-bachelor-degrees") {
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
