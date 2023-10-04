/// <reference path='./React.ts' />

namespace Subjects {
    export interface Teacher {
        experienceTeachingJava?: number;
    }

    export class Java extends Subject {
        getRequirements(): string {
            return 'Here is the list of requirements for Java';
        }

        getAvailableTeacher(): string {
            if (this.teacher.hasOwnProperty('experienceTeachingJava')) {
                return `Available Teacher: ${this.teacher.firstName}`;
            }
            return 'No available teacher';
        }
    }

    export const cTeacher: Teacher = {
        firstName: 'Mary',
        lastName: 'Poppins',
        experienceTeachingC: 10,
    };
    export const react = new React();
    export const java = new Java();
    export const cpp = new Cpp();
}
