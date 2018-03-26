import AlignStudentTable from '../../components/align-students/AlignStudentTable';
import {connect} from 'react-redux';

function mapStateToProps(state){
    return {
        students: state.students.students
    };
}

function mapDispatchToProps(dispatch){
    return {

    };
}

const students = [
    {
        name: 'a',
        nuid: '1',
        major: 'm',
        race: 'r',
        gender: 'f'
    },
    {
        name: 'a',
        nuid: '1',
        major: 'm',
        race: 'r',
        gender: 'f'
    },
    {
        name: 'a',
        nuid: '1',
        major: 'm',
        race: 'r',
        gender: 'f'
    },
    {
        name: 'a',
        nuid: '1',
        major: 'm',
        race: 'r',
        gender: 'f'
    },
    {
        name: 'a',
        nuid: '1',
        major: 'm',
        race: 'r',
        gender: 'female'
    },

];

export default connect(mapStateToProps,mapDispatchToProps)(AlignStudentTable);