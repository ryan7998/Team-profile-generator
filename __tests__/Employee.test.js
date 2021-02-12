const Employee = require('../lib/Employee.js');

test('creates a Employee Object', ()=>{
    const employee = new Employee('Fazle', '101', 'mail@mail.com');

    expect(employee.name).toBe('Fazle');
    expect(employee.id).toBe('101');
    expect(employee.email).toBe('mail@mail.com');
});

test('get name from function getName()', ()=>{
    const employee = new Employee('Fazle', '101', 'mail@mail.com');

    expect(employee.getName()).toBe('Fazle');
});

test('get id from function getId()', ()=>{
    const employee = new Employee('Fazle', '101', 'mail@mail.com');

    expect(employee.getId()).toBe('101');
});

test('get email from function getEmail()', ()=>{
    const employee = new Employee('Fazle', '101', 'mail@mail.com');

    expect(employee.getEmail()).toBe('mail@mail.com');
});

test('get class name from function getRole()', ()=>{
    const employee = new Employee('Fazle', '101', 'mail@mail.com');

    expect(employee.getRole()).toBe('Employee');
});