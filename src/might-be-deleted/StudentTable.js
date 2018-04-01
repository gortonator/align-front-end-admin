import React from 'react';
import { Column, Table } from 'react-virtualized';

class StudentTable extends React.Component{
    constructor(props){
        super(props);
        this.rowGetter = this.rowGetter.bind(this);
        this.nameColumnCellRenderer = this.nameColumnCellRenderer.bind(this);
    }

    rowGetter({index}){
        return this.props.students[index];
    }

    nameColumnCellRenderer({cellData}){
        if (cellData == null) {
            return '';
        } else {
            return (
                <a href={""} onClick={this.props.onStudentClick}>
                    {String(cellData)}
                </a>);
        }
    }

    render(){
        return (
            <Table headerHeight={40}
                   height={300}
                   rowCount={this.props.students.length}
                   rowHeight={40}
                   width={600}
                   rowGetter={this.rowGetter}
                   className={"student-table"}
                   rowClassName={({index}) => index === -1? "":"student-table-row"} headerStyle={{"font-size": "15px", "font-weight":"normal"}}>
                <Column dataKey='nuid'
                        width={100}
                        label='nuid'
                        flexGrow={1}/>
                <Column dataKey='name'
                        width={100}
                        label='name'
                        flexGrow={1}
                        cellRenderer={this.nameColumnCellRenderer}/>
                <Column dataKey='gpa'
                        width={50}
                        label='gpa'
                        flexGrow={1}/>
                <Column dataKey='campus'
                        width={100}
                        label='campus'
                        flexGrow={1}/>
            </Table>
        );
    }
}

export default StudentTable;