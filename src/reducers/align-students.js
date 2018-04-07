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

const NUMBER_OF_STUDENTS_PER_PAGE = 20;

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
        retrievalStatus: STUDENT_RETRIEVAL_STATUSES.FAILURE,
        items: initialStudents
    },
    studentFilters: {
        nameOrId: '123',
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
    failedAttempt: null,
    pagination:{
        total: '20',
        current: '1'
    }
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
        case actions.STUDENT_RETRIEVAL_REQUEST:
            return Object.assign({},state,{
                students: {
                    ...state.students,
                    retrievalStatus: STUDENT_RETRIEVAL_STATUSES.ONGOING
                }
            });
        case actions.ACCEPT_RETRIEVAL_FAILURE:
            return Object.assign({},state,{
                failedAttempt: null,
                students: {
                    ...state.students,
                    retrievalStatus: STUDENT_RETRIEVAL_STATUSES.SUCCESS
                }
            });
        default:
            return state;
    }
}

