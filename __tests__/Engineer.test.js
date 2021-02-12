const Engineer = require('../lib/Engineer');

test('create a Engineer object', ()=>{
    const engineer = new Engineer('Fazle', '101', 'mail@mail.com', 'ryan7998');
    
    expect(engineer.name).toBe('Fazle');
    expect(engineer.id).toBe('101');
    expect(engineer.email).toBe('mail@mail.com');
    expect(engineer.github).toBe('ryan7998');
});

test('get name from function getName()', ()=>{
    const engineer = new Engineer('Fazle', '101', 'mail@mail.com', 'ryan7998');
    expect(engineer.getName()).toBe('Fazle');
});

test('get id from function getId()', ()=>{
    const engineer = new Engineer('Fazle', '101', 'mail@mail.com', 'ryan7998');
    expect(engineer.getId()).toBe('101');
});

test('get email from function getEmail()', ()=>{
    const engineer = new Engineer('Fazle', '101', 'mail@mail.com', 'ryan7998');
    expect(engineer.getEmail()).toBe('mail@mail.com');
});

test('get github from function getGithub()', ()=>{
    const engineer = new Engineer('Fazle', '101', 'mail@mail.com', 'ryan7998');
    expect(engineer.getGithub()).toBe('ryan7998');
});

test('get class name from function getRole()', ()=>{
    const engineer = new Engineer('Fazle', '101', 'mail@mail.com', 'ryan7998');
    expect(engineer.getRole()).toBe('Engineer');
});