// Task 1
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

// Task 2
interface Directors extends Teacher {
    numberOfReports: number;
}

// Task 3
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => `${firstName[0]}. ${lastName}`;

// Task 4
interface StudentInterface {
    workOnHomework(): string;
    displayName(): string;
}

interface StudentConstructor {
    new (firstName: string, lastName: string): StudentInterface;
}

const StudentClass: StudentConstructor = class StudentClass implements StudentInterface {
    constructor(private firstName: string, private lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    workOnHomework(): string {
        return 'Currently working';
    }
    displayName(): string {
        return `${this.firstName}`;
    }
}
