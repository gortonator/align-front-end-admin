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
        value: "any"
    },
    MALE: {
        displayName: 'Male',
        value: "male"
    },
    FEMALE: {
        displayName: 'Female',
        value: "female"
    }
};

export const ASYNC_ACTION_STATUSES = {
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
        nuid: "2",
        name: "B",
        email: "123",
        enrollmentStatus: "ft",
        degreeYear: "2018"
    },
    {
        nuid: "3",
        name: "C",
        email: "123",
        enrollmentStatus: "ft",
        degreeYear: "2018"
    },
    {
        nuid: "4",
        name: "D",
        email: "123",
        enrollmentStatus: "ft",
        degreeYear: "2018"
    },
    {
        nuid: "5",
        name: "E",
        email: "123",
        enrollmentStatus: "ft",
        degreeYear: "2018"
    }
];

const initialStudentProfiles = [
    {
        nuid: "1",
        retrievalStatus: ASYNC_ACTION_STATUSES.SUCCESS,
        personalInformation: {name: 'haha'},
        notes: [
            {
                noteId: '1',
                title: '1',
                desc: '1'
            },
            {
                noteId: '2',
                title: '2',
                desc: '2'
            }
        ]
    }
];

export const initialState = {
    students: {
        retrievalStatus: ASYNC_ACTION_STATUSES.SUCCESS,
        items: initialStudents
    },
    studentFilters: {
        nameOrId: '',
        campus: [],
        enrollmentStatus: [],
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
    },
    studentProfiles: initialStudentProfiles
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
                    retrievalStatus: ASYNC_ACTION_STATUSES.ONGOING
                }
            });
        case actions.ACCEPT_RETRIEVAL_FAILURE:
            return Object.assign({},state,{
                failedAttempt: null,
                students: {
                    ...state.students,
                    retrievalStatus: ASYNC_ACTION_STATUSES.SUCCESS
                }
            });
        case actions.STUDENT_PROFILE_RETRIEVAL_REQUEST:
            const studentProfiles = JSON.parse(JSON.stringify(state.studentProfiles));
            studentProfiles.push({
                nuid: action.nuid,
                retrievalStatus: ASYNC_ACTION_STATUSES.ONGOING,
                notes: [],
                personalInformation: null
            });
            return Object.assign({},state,{
                studentProfiles: studentProfiles
            });
        default:
            return state;
    }
}

