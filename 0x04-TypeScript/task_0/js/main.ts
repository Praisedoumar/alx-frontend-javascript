interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Anna',
    lastName: 'Smith',
    age: 17,
    location: 'New York',
};

const student2: Student = {
    firstName: 'Betty',
    lastName: 'Smith',
    age: 16,
    location: 'New York',
};

const studentsList: Student[] = [student1, student2];

// Table rendering
const table = document.createElement('table');

const thead = document.createElement('thead');
const headerRow = document.createElement('tr');

headerRow.innerHTML = '<th>First Name</th><th>Location</th>';
thead.appendChild(headerRow);

const tbody = document.createElement('tbody');
studentsList.forEach((student) => {
    const row = document.createElement('tr');
    row.innerHTML = `<td>${student.firstName}</td><td>${student.location}</td>`;
    tbody.appendChild(row);
});

table.appendChild(thead);
table.appendChild(tbody);

document.body.appendChild(table);
