const Manager = require('../lib/Manager');

test('create a manager object', ()=>{
    const manager = new Manager('Fazle', '101', 'mail@mail.com', 'Of101');
    
    expect(manager.name).toBe('Fazle');
    expect(manager.id).toBe('101');
    expect(manager.email).toBe('mail@mail.com');
    expect(manager.officeNumber).toBe('Of101');
});

test('get name from function getName()', ()=>{
    const manager = new Manager('Fazle', '101', 'mail@mail.com', 'Of101');
    expect(manager.name).toBe('Fazle');

});

test('get id from function getId()', ()=>{
    const manager = new Manager('Fazle', '101', 'mail@mail.com', 'Of101');
    expect(manager.getId()).toBe('101');
});

test('get email from function getEmail()', ()=>{
    const manager = new Manager('Fazle', '101', 'mail@mail.com', 'Of101');
    expect(manager.getEmail()).toBe('mail@mail.com');
});

test('get office number from function getOfficeNumber()', ()=>{
    const manager = new Manager('Fazle', '101', 'mail@mail.com', 'Of101');
    expect(manager.getOfficeNumber()).toBe('Of101');
});

test('get class name from function getRole()', ()=>{
    const manager = new Manager('Fazle', '101', 'mail@mail.com', 'Of101');
    expect(manager.getRole()).toBe('Manager');
});