import * as actions from '../actions/align-students-actions';

export const CAMPUSES = {
    BOSTON: {
        displayName: 'Boston',
        value: 'BOSTON'
    },
    CHARLOTTE: {
        displayName: 'Charlotte',
        value: 'CHARLOTTE'
    },
    SEATTLE: {
        displayName: 'Seattle',
        value: "SEATTLE"
    },
    SILICONVALLEY: {
        displayName: 'Silicon Valley',
        value: "SILICON_VALLEY"
    }
};

export const ENROLLMENT_STATUSES = {
    FULLTIME: {
        displayName: 'Full Time',
        value: "FULL_TIME"
    },
    PARTTIME: {
        displayName: 'Part Time',
        value: "PART_TIME"
    },
    INACTIVE: {
        displayName: 'Inactive',
        value: "INACTIVE"
    },
    DROPOUT: {
        displayName: 'Drop Out',
        value: "DROP_OUT"
    }
};

export const GENDER_OPTIONS = {
    ANY: {
        displayName: 'Any',
        value: "A"
    },
    MALE: {
        displayName: 'Male',
        value: "M"
    },
    FEMALE: {
        displayName: 'Female',
        value: "F"
    }
};

export const STUDENT_RETRIEVAL_STATUSES = {
    ONGOING: 'ONGOING',
    SUCCESS: 'SUCCESS',
    FAILURE: 'FAILURE'
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
    students: {
        retrievalStatus: STUDENT_RETRIEVAL_STATUSES.SUCCESS,
        items: initialStudents
    },
    editStudentFilterModal: actions.editStudentFilterModalStatus.CLOSED,
    studentFilters: {
        nameOrId: '',
        campus: {
            [CAMPUSES.BOSTON.value] : false,
            [CAMPUSES.CHARLOTTE.value] : false,
            [CAMPUSES.SEATTLE.value] : false,
            [CAMPUSES.SILICONVALLEY.value] : false
        },
        enrollmentStatus: {
            [ENROLLMENT_STATUSES.FULLTIME.value] : false,
            [ENROLLMENT_STATUSES.PARTTIME.value] : false,
            [ENROLLMENT_STATUSES.INACTIVE.value] : false,
            [ENROLLMENT_STATUSES.DROPOUT.value] : false
        },
        coop: '',
        gender: GENDER_OPTIONS.ANY.value,
        race: '',
        undergradMajor: '',
        nuUndergrad: false
    },
    overviewDeepReport: actions.overviewDeepReportModalStatus.CLOSED
};

export function getMultiSelectableFilterDisplay(f,options){
    const optionsSelected = [];
    Object.keys(options).forEach(o => {
        if (f[options[o].value]){
            optionsSelected.push(options[o].displayName);
        }
    });
    return optionsSelected.join(' | ');
}

export default function alignStudent(state=initialState,action){
    switch(action.type){
        case actions.SET_NAME_OR_ID_FILTER:
            return Object.assign({},state, {
                students: state.students.slice(1,3),
                studentFilters: {
                    ...state.studentFilters,
                    nameOrId: action.filter
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
        case actions.STUDENT_RETRIEVAL_REQUEST:
            console.log('go!');
            return Object.assign({},state,{
                students: {
                    ...state.students,
                    retrievalStatus: STUDENT_RETRIEVAL_STATUSES.ONGOING
                }
            });
        default:
            return state;
    }
}

