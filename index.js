const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const pageTemplate = require('./src/page-template');
const fs = require('fs');

// write file Function:
const writeFile = fileContent => {
    fs.writeFile('./dist/index.html', fileContent, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
};

// create manager object:
const createManager = managerData =>{
    const{name, id, email, officeNumber} = managerData;
    manager = new Manager(name, id, email, officeNumber);
    return manager;
}

// create engineer object:
const createEngineer = engineerData =>{
    const{name, id, email, github} = engineerData;
    engineer = new Engineer(name, id, email, github);
    return engineer;
}

// create intern object:
const createIntern = internData =>{
    const{name, id, email, school} = internData;
    intern = new Intern(name, id, email, school);
    return intern;
}


// Prompt for Manager data:
const promptManager = () =>{

    console.log(`
    ==============================
        Add a Project Manager
    ==============================
    `);
    return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: "Please Enter Team Manager's Name: "
    },
    {
        type: 'input',
        name: 'id',
        message: "Please Enter Team Manager's Employee Id: "
    },
    {
        type: 'input',
        name: 'email',
        message: "Please Enter Team Manager's email address: "
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "Please Enter Team Manager's office number: "
    }

])}

// Prompt for Engineer data:
const promptEngineer = () =>{

    console.log(`
    ==============================
        Add an Engineer 
    ==============================
    `);
    return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: "Please Enter Engineer's Name: "
    },
    {
        type: 'input',
        name: 'id',
        message: "Please Enter Engineer's Employee Id: "
    },
    {
        type: 'input',
        name: 'email',
        message: "Please Enter Engineer's email address: "
    },
    {
        type: 'input',
        name: 'github',
        message: "Please Enter Engineer's Github username: "
    }

])}

// Prompt for Intern data:
const promptIntern = () =>{

    console.log(`
    ==============================
        Add an Intern 
    ==============================
    `);
    return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: "Please Enter Intern's Name: "
    },
    {
        type: 'input',
        name: 'id',
        message: "Please Enter Intern's Employee Id: "
    },
    {
        type: 'input',
        name: 'email',
        message: "Please Enter Intern's email address: "
    },
    {
        type: 'input',
        name: 'school',
        message: "Please Enter Intern's school: "
    }

])}


const promptMenu = teamData =>{
    
    if(!teamData.otherEmployeeData){
        teamData.otherEmployeeData = [];
    }
    

    console.log(`
    ==============================
            Main Menu
    ==============================
    `);
    return inquirer.prompt([{
        type: 'list',
        name: 'menu',
        message: 'Select from the following: ',
        choices: ['Add an Engineer', 'Add an Intern', 'Finish building my team']
    }]).then(menuItem =>{
        if(menuItem.menu === 'Add an Engineer'){
            promptEngineer().then(engineerData =>{
                const engineerObj = createEngineer(engineerData);
                teamData.otherEmployeeData.push(engineerObj);
                promptMenu(teamData);
            })
        }else if(menuItem.menu === 'Add an Intern'){
            promptIntern().then(internData =>{
                const internObj = createIntern(internData);
                teamData.otherEmployeeData.push(internObj);
                promptMenu(teamData);
            })
        }else{
            var pageHtml = pageTemplate(teamData);
            writeFile(pageHtml);
        }
    });
}


promptManager()
.then(createManager)
.then(managerObj =>{
    var teamData = {};
    teamData.managerData = managerObj;
    promptMenu(teamData);
})
