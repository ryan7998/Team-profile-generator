const Intern = require('../lib/Intern');

test('create a Engineer object', ()=>{
    const intern = new Intern('Fazle', '101', 'mail@mail.com', 'UOfT');
    
    expect(intern.name).toBe('Fazle');
    expect(intern.id).toBe('101');
    expect(intern.email).toBe('mail@mail.com');
    expect(intern.school).toBe('UOfT');
});

test('get name from function getName()', ()=>{
    const intern = new Intern('Fazle', '101', 'mail@mail.com', 'UOfT');
    expect(intern.getName()).toBe('Fazle');
});

test('get id from function getId()', ()=>{
    const intern = new Intern('Fazle', '101', 'mail@mail.com', 'UOfT');
    expect(intern.getId()).toBe('101');
});

test('get email from function getEmail()', ()=>{
    const intern = new Intern('Fazle', '101', 'mail@mail.com', 'UOfT');
    expect(intern.getEmail()).toBe('mail@mail.com');
});

test('get school from function getSchool()', ()=>{
    const intern = new Intern('Fazle', '101', 'mail@mail.com', 'UOfT');
    expect(intern.getSchool()).toBe('UOfT');
});

test('get class name from function getRole()', ()=>{
    const intern = new Intern('Fazle', '101', 'mail@mail.com', 'UOfT');
    expect(intern.getRole()).toBe('Intern');
});