import {
    FETCH_MY_PROFILE
} from '../actions/index'

export const initialState = {
    ExtraExperiences: [
        {
            endDate: "04-01-2019",
            companyName: "Amazon",
            description: "Intern",
            title: "Intern",
            extraExperienceId: 8,
            startDate: "01-01-2019"
        }
    ],

    Projects: [
        {
            endDate: "12-31-2017",
            description: "Intern",
            projectName: "CNAO",
            projectId: 5,
            startDate: "12-12-2017"
        }
    ],

    Courses: [
        {
            courseName: "Intensive Foundations of CS",
            description: "Intensive Foundations of CS",
            courseId: "CS 5001"
        },
        {
            courseName: "Discrete and Data Structures",
            description: "Discrete and Data Structures",
            courseId: "CS 5002"
        },
        {
            courseName: "Object-Oriented Design",
            description: "Object-Oriented Design",
            courseId: "CS 5004"
        },
        {
            courseName: "Algorithms",
            description: "Algorithms",
            courseId: "CS 5006"
        },
        {
            courseName: "Computer Systems",
            description: "Computer Systems",
            courseId: "CS 5007"
        }
    ],

    WorkExperiences: [
        {
            workExperienceId: 1,
            companyName: "Amazon.com",
            startDate: "May 2017",
            endDate: "Sept 2017",
            currentJob: true,
            coop: true,
            title: "Software Engineer Intern",
            description: 'Work as SDE',
        },
        {
            workExperienceId: 2,
            neuId: 12345,
            companyName:"Zillow",
            startDate: 'May 2017',
            endDate: 'Sept 2017',
            currentJob: true,
            coop: true,
            title: 'Software Engineer',
            description: 'Work as SDE',
        },
    ],

    studentRecord: {
        neuId: "004",
        publicId: 0,
        entryYear: 2017,
        lastName: "Wood",
        address: "360 Huntington Ave",
        expectedLastYear: 2020,
        visible: false,
        gender: "M",
        city: "Boston",
        campus: "BOSTON",
        degree: "MASTERS",
        firstName: "Charles",
        entryTerm: "FALL",
        enrollmentStatus: "FULL_TIME",
        scholarship: false,
        middleName: "new",
        expectedLastTerm: "SUMMER",
        email: "Charles004@gmail.com",
        phone: "+1 (206)306-3178",
        address: "225 Terry Ave, Seattle, WA",
        linkedin: "www.linkedin.com/jesremy",
        github: "www.github.com/jeremy",
        facebook: "www.facebook.com/jeremy",
        website: "www.jeremy.com/home",
        summary: 'Hi, I am Yudong. I am a M.S. candidate in Computer Science from Northeastern University-Seattle' +
        'campus. Graduate date: June, 2018 (Expected) Please feel free to contact me via ' +
        'wangyudong53138@gmail.com',
        skill: "Java C C++",
    },

    Privacies: {
        visibleToPublic: true,
        github: true,
        website: true,
        address: true,
        neuId: "004",
        facebook: true,
        photo: true,
        project: true,
        linkedin: true,
        skill: true,
        course: true,
        extraExperience: true,
        publicId: 0,
        email: true,
        coop: true,
        phone: true
    }
};

export default function myProfileReducer(state = initialState,
    {type, payload}) {
    switch (type) {
        case FETCH_MY_PROFILE:
            return payload;
        default:
            return state;
    }
}
