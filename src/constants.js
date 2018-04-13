export const ASYNC_ACTION_STATUSES = {
    ONGOING: 'ONGOING',
    SUCCESS: 'SUCCESS',
    FAILURE: 'FAILURE'
};

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
    GRADUATED: {
        displayName: 'Graduated',
        value: "GRADUATED"
    },
    INACTIVE: {
        displayName: 'Inactive',
        value: "INACTIVE"
    },
    DROPOUT: {
        displayName: 'Dropped Out',
        value: "DROPPED_OUT"
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

export const NOTE_CREATION_PLACE_HOLDER = 'NOTE_CREATION_PLACE_HOLDER';

export const NUMBER_OF_STUDENTS_PER_PAGE = 20;

export const BASE_URL = 'http://asd2.ccs.neu.edu:8081';

export const REQUIRED_COURSE_WORK = {
    FUNDAMENTALS: {
        displayName: 'Fundamentals',
        courses: ['CS 5001'],
        value: 'FUNDAMENTALS'
    },
    DISCRETESTRUCTURES: {
        displayName: "Discrete Structures",
        courses: ['CS 5002'],
        value: 'DISCRETE_STRUCTURES'
    },
    OBJECTORIENTEDDESIGN: {
        displayName: 'Object-Oriented Design',
        courses: ['CS 5003', 'CS 5004'],
        value: 'OBJECT-OREINTED_DESIGN'
    },
    OTHERFUNDATIONCOURSES: {
        displayName: 'Other Foundation Courses',
        courses: ['CS 5006', 'CS 5007'],
        value: 'OTHER_FUNDATION_COURSES'
    },
    DEVELOPMENT: {
        displayName: 'Development',
        courses: ['CS 5500', 'CS 5600'],
        value: 'DEVELOPMENT'
    },
    AlGORITHMS: {
        displayName: 'Algorithms',
        courses: ['CS 5800'],
        value: 'ALGORITHMS'
    }
};