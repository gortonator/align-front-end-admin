import React from 'react';

class AlignStudentTable extends React.Component{
    constructor(props){
        super(props);
        this.mapStudentsToRows = this.mapStudentsToRows.bind(this);
    }

    mapStudentsToRows(){
        return this.props.students.map(
            student => (
                <div className={"student-table-row"}>
                    <div className={"id-cell student-table-cell"}>
                        {student.nuid}
                    </div>
                    <div className={"name-cell student-table-cell"}>
                        {student.name}
                    </div>
                    <div className={"major-cell student-table-cell"}>
                        {student.undergrad_degree}
                    </div>
                    <div className={"race-cell student-table-cell"}>
                        {student.campus}
                    </div>
                </div>)
        );
    }

    render(){
        return (
            <div className={"student-table"}>
                <div className={"student-table-head"}>
                    <div className={"id-cell student-table-cell"}>
                        NUID
                    </div>
                    <div className={"name-cell student-table-cell"}>
                        Name
                    </div>
                    <div className={"major-cell student-table-cell"}>
                        Undergrad Major
                    </div>
                    <div className={"race-cell student-table-cell"}>
                        Campus
                    </div>
                </div>
                {this.mapStudentsToRows()}
            </div>
        );
    }
}

export default AlignStudentTable;