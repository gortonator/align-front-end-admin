import React from 'react';
// import StudentSearch from './StudentSearch';

class AlignStudentHeading extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div style={{"overflow" : "auto"}}>
                <span className={"student-heading"}>Align Students</span>
                {/*<StudentSearch students={students}/>*/}
            </div>
        );
    }
}

const students = [
    {
        nuid: "1",
        name: "A",
        undergrad_degree: "CS",
        campus: "Boston"
    },
    {
        nuid: "2",
        name: "C",
        undergrad_degree: "CS",
        campus: "Silicon Valley"
    },
    {
        nuid: "3",
        name: "D",
        undergrad_degree: "IS",
        campus: "Seattle"
    },
    {
        nuid: "4",
        name: "B",
        undergrad_degree: "IS",
        campus: "Charlotte"
    }
];

export default AlignStudentHeading;