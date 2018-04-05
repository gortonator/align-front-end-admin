import * as actions from '../actions/align-students-actions';

export const initialState = {
    students: [
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
    ],
    editStudentFilterModal: actions.editStudentFilterModalStatus.CLOSED,
    studentFilters: {
        nameOrIdFilter: null,
        campusFilter: [
            {
                name: "boston",
                isSet: false
            },
            {
                name: "charlotte",
                isSet: false
            },
            {
                name: "seattle",
                isSet: false
            },
            {
                name: "silicon valley",
                isSet: false
            }
        ],
        coopFilter: "All Coop"
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
