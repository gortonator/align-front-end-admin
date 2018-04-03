import * as actions from '../actions/align-students-actions';

export const CAMPUS_NAMES = {
    boston: 'boston',
    charlotte: 'charlotte',
    seattle: 'seattle',
    siliconValley: 'siliconValley'
};

export const ENROLLMENT_STATUSES = {
    fullTime: 'fullTime',
    partTime: 'partTime',
    inactive: 'inactive',
    dropOut: 'dropOut'
};

export const GENDER_OPTION_VALUE = {
    any: 'Any',
    male: 'Male',
    female: 'Female'
};

const initialStudents = [
    {
        nuid: "1",
        name: "A",
        email: "123",
        enrollmentStatus: "ft",
        degreeYear: "2018"
    },
    {
        nuid: "1",
        name: "A",
        email: "123",
        enrollmentStatus: "ft",
        degreeYear: "2018"
    },
    {
        nuid: "1",
        name: "A",
        email: "123",
        enrollmentStatus: "ft",
        degreeYear: "2018"
    },
    {
        nuid: "1",
        name: "A",
        email: "123",
        enrollmentStatus: "ft",
        degreeYear: "2018"
    },
    {
        nuid: "1",
        name: "A",
        email: "123",
        enrollmentStatus: "ft",
        degreeYear: "2018"
    },
    {
        nuid: "1",
        name: "A",
        email: "123",
        enrollmentStatus: "ft",
        degreeYear: "2018"
    },
    {
        nuid: "1",
        name: "A",
        email: "123",
        enrollmentStatus: "ft",
        degreeYear: "2018"
    },
    {
        nuid: "1",
        name: "A",
        email: "123",
        enrollmentStatus: "ft",
        degreeYear: "2018"
    },
    {
        nuid: "1",
        name: "A",
        email: "123",
        enrollmentStatus: "ft",
        degreeYear: "2018"
    },
    {
        nuid: "1",
        name: "A",
        email: "123",
        enrollmentStatus: "ft",
        degreeYear: "2018"
    },
    {
        nuid: "1",
        name: "A",
        email: "123",
        enrollmentStatus: "ft",
        degreeYear: "2018"
    },
    {
        nuid: "1",
        name: "A",
        email: "123",
        enrollmentStatus: "ft",
        degreeYear: "2018"
    },
    {
        nuid: "1",
        name: "A",
        email: "123",
        enrollmentStatus: "ft",
        degreeYear: "2018"
    },
    {
        nuid: "1",
        name: "A",
        email: "123",
        enrollmentStatus: "ft",
        degreeYear: "2018"
    },
    {
        nuid: "1",
        name: "A",
        email: "123",
        enrollmentStatus: "ft",
        degreeYear: "2018"
    },
    {
        nuid: "1",
        name: "A",
        email: "123",
        enrollmentStatus: "ft",
        degreeYear: "2018"
    }
];

export const initialState = {
    students: initialStudents,
    editStudentFilterModal: actions.editStudentFilterModalStatus.CLOSED,
    studentFilters: {
        nameOrId: null,
        campus: {
            [CAMPUS_NAMES.boston] : false,
            [CAMPUS_NAMES.charlotte] : false,
            [CAMPUS_NAMES.seattle] : false,
            [CAMPUS_NAMES.siliconValley] : false
        },
        enrollmentStatus: {
            [ENROLLMENT_STATUSES.fullTime] : false,
            [ENROLLMENT_STATUSES.partTime] : false,
            [ENROLLMENT_STATUSES.inactive] : false,
            [ENROLLMENT_STATUSES.dropOut] : false
        },
        coop: '',
        gender: GENDER_OPTION_VALUE.any,
        race: '',
        undergradMajor: '',
        nuUndergrad: false
    },
    overviewDeepReport: actions.overviewDeepReportModalStatus.CLOSED
};

export default function adminApp(state=initialState,action){
    console.log(state);
    switch(action.type){
        case actions.SET_NAME_OR_ID_FILTER:
            return Object.assign({},state, {
                students: state.students.slice(1,3),
                studentFilters: {
                    ...state.studentFilters,
                    nameOrIdFilter: action.filter
                }
            });
        case actions.SET_CAMPUS_FILTER:
            return Object.assign({},state, {
                students: state.students.slice(1,3),
                studentFilters: {
                    ...state.studentFilters,
                    campusFilter: action.campus
                }
            });
        case actions.SET_COOP_FILTER:
            return Object.assign({},state, {
                students: state.students.slice(1,3),
                studentFilters: {
                    ...state.studentFilters,
                    coopFilter: action.coop
                }
            });
        case actions.OPEN_EDIT_STUDENT_FILTER_MODAL:
            return Object.assign({},state,{
                editStudentFilterModal: actions.editStudentFilterModalStatus.OPENED
            });
        case actions.CLOSE_EDIT_STUDENT_FILTER_MODAL:
            return Object.assign({},state,{
                editStudentFilterModal: actions.editStudentFilterModalStatus.CLOSED
            });
        case actions.SHOW_NU_UNDERGRAD_PROPORTION:
            return Object.assign({},state,{
                overviewDeepReport: actions.overviewDeepReportModalStatus.SHOW_UNDERGRAD_PROPORTION
            });
        case actions.SHOW_ALIGN_ALUMNI_JOBS:
            return Object.assign({},state,{
                overviewDeepReport: actions.overviewDeepReportModalStatus.SHOW_ALUMNI_JOBS
            });
        case actions.SHOW_ALIGN_COOPS:
            return Object.assign({},state,{
                overviewDeepReport: actions.overviewDeepReportModalStatus.SHOW_COOPS
            });
        case actions.CLOSE_OVERVIEW_DEEPER_REPORT_MODAL:
            return Object.assign({},state,{
                overviewDeepReport: actions.overviewDeepReportModalStatus.CLOSED
            });
        default:
            return state;
    }
}

