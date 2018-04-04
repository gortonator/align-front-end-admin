import React from 'react';
import StudentSearch from './StudentSearch';

class AlignStudentHeading extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div style={{"overflow" : "auto"}}>
                <span className={"student-heading"}>Align Students</span>
                <StudentSearch students={students}/>
            </div>
        );
    }
}

const students = [
    {
        nuid: "1",
        name: "A",
        gpa: "1",
        campus: "Boston"
    },
    {
        nuid: "2",
        name: "C",
        gpa: "4",
        campus: "Silicon Valley"
    },
    {
        nuid: "3",
        name: "D",
        gpa: "3",
        campus: "Seattle"
    },
    {
        nuid: "4",
        name: "B",
        gpa: "2",
        campus: "Charlotte"
    }
];

export default AlignStudentHeading;