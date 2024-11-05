function employees(input){
    let employee = {};
    
    for (let emp of input) {
        employee.name = emp;
        employee.personalNum = emp.length;

        console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNum}`)
    }
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )