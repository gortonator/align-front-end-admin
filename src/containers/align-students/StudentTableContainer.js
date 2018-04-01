import StudentTable from '../../components/align-students/StudentTable';
import {connect} from 'react-redux';

function mapStateToProps(state){
    return {
        students: students
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

export default connect(mapStateToProps,mapDispatchToProps)(StudentTable);