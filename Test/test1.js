const listofstudent = {
    "nine": [
        {
            "classA": [
                {"name": "Mg Mg", "age": "23"},
                {"name": "Aung Aung", "age": "23"}
            ]
        },
        {
            "classB": [
                {"name": "Hla Hla", "age": "23"},
                {"name": "Ba Nyar", "age": "23"}
            ]
        },
        {
            "classC": [
                {"name": "Min Ko Ko Thein", "age": "23"},
                {"name": "Tin May", "age": "23"}
            ]
        },
        {
            "classD": [
                {"name": "Pyae Phyo Aung", "age": "23"},
                {"name": "Bandar", "age": "23"}
            ]
        }
    ],
    "ten": [
        {
            "classA": [
                {"name": "Mg Mg", "age": "23"},
                {"name": "Aung Aung","age": "23"}
            ]
        },
        {
            "classB": [
                {"name": "Hla Hla", "age": "23"},
                {"name": "Ba Nyar", "age": "23"}
            ]
        },
        {
            "classC": [
                {"name": "Min Ko Ko Thein", "age": "23"},
                {"name": "Tin May", "age": "23"}
            ]
        },
        {
            "classD": [
                {"name": "Min Ko Ko Thein", "age": "23"},
                {"name": "Tin May", "age": "23"}
            ]
        }
    ]
};
function createTable(container, data) {
    const table = document.createElement('table');
    container.appendChild(table);

    const headerRow = table.insertRow();
    ['Class', 'Name', 'Age'].forEach(function(headerText) {
        const header = document.createElement('th');
        header.innerHTML = headerText;
        headerRow.appendChild(header);
    });

    data.forEach(function(studentdata) {
        for (const className in studentdata) {
            studentdata[className].forEach(function(student) {
                const row = table.insertRow();
                [className, student.name || '-', student.age || '-'].forEach(function(cellText) {
                    const cell = row.insertCell();
                    cell.innerHTML = cellText;

                    if (cellText === 'Ba Nyar') {
                        const result = document.getElementById('result');
                        result.innerHTML = 'The Index of th student named ' + cellText + ' is in array[' + data.indexOf(studentdata) + ']';
                    }
                });
            });
        }
    });
}
createTable(document.getElementById('grade9Table'), listofstudent.nine);
createTable(document.getElementById('grade10Table'), listofstudent.ten);




