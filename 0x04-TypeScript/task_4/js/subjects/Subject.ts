/// <reference path='./Teacher.ts' />

namespace Subjects {
    export class Subject {
        teacher: Teacher | undefined;

        constructor() {};

        setTeacher(teacher: Teacher): void {
            this.teacher = teacher;
        }
    }
}
