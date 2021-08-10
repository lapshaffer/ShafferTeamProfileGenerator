// TODO:
// write out inquirer prompts to record answers on each teammate
    // look up how to split inquirer into branching paths based on user input
    // Manager's info is first
    // Print HTML skeleton and manager card after first inquire
        // .then another prompt based on selection of next employee
        // append cards to HTML file at the end of each new employee prompt

const inquirer = require('inquirer');

const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

const teamMembers = [];

const managerQuestions = [
    {
        type: 'input',
        message: 'Hello, team manager! Please enter your name.',
        name: 'managerName'
    },
    {
        type: 'input',
        message: 'Please enter your ID.',
        name: 'managerId'
    },
    {
        type: 'input',
        message: 'Please enter your email address.',
        name: 'managerEmail'
    },
    {
        type: 'input',
        message: 'Please enter your office number',
        name: 'managerOfficeNumber'
    },
    {
        type: 'list',
        message: 'Which team member type would you like to add next?',
        choices: ['Engineer', 'Intern', 'None'],
        name: 'nextMember'
    }
];

const engineerQuestions = [
    {
        type: 'input',
        message: "Please enter the name of this engineer",
        name: 'engineerName'
    },
    {
        type: 'input',
        message: 'Please enter the ID for this engineer',
        name: 'engineerId'
    },
    {
        type: 'input',
        message: 'Please enter the email address for this engineer',
        name: 'engineerEmail'
    },
    {
        type: 'input',
        message: 'Please enter the GitHub username for this engineer',
        name: 'engineerGithub'
    },
    {
        type: 'list',
        message: 'Which team member type would you like to add next?',
        choices: ['Engineer', 'Intern', 'None'],
        name: 'nextMember' 
    }
];

const internQuestions = [
    {
        type: 'input',
        message: 'Please enter the name of this intern',
        name: 'internName'
    },
    {
        type: 'input',
        message: 'Please enter the ID for this intern',
        name: 'internId'
    },
    {
        type: 'input',
        message: 'Please enter the email address for this intern',
        name: 'internEmail',
    },
    {
        type: 'input',
        message: 'Please enter the school this intern attends',
        name: 'internSchool'
    },
    {
        type: 'list',
        message: 'Which team member type would you like to add next?',
        choices: ['Engineer', 'Intern', 'None'],
        name: 'nextMember'
    }
];

function managerInquire() {
    inquirer
        .prompt(managerQuestions)
        .then(responses => {
            const manager = new Manager(responses.managerName, responses.managerId, responses.managerEmail, responses.managerOfficeNumber);
            teamMembers.push(manager);
            if (responses.nextMember === 'Engineer') {
                engineerInquire();
            } else if (responses.nextMember === 'Intern') {
                internInquire();
            } else {

            }
        })
    };

function engineerInquire() {
    inquirer
        .prompt(engineerQuestions)
        .then(responses => {
            const engineer = new Engineer(responses.engineerName, responses.engineerId, responses.engineerEmail, responses.engineerGithub);
            teamMembers.push(engineer);
            if (responses.nextMember === 'Engineer') {
                engineerInquire();
            } else if (responses.nextMember === 'Intern') {
                internInquire();
            } else {

            }
        })
    };

function internInquire() {
    inquirer
        .prompt(internQuestions)
        .then(responses => {
            const intern = new Intern(responses.internName, responses.internId, responses.internEmail, responses.internSchool);
            teamMembers.push(intern);
            if (responses.nextMember === 'Engineer') {
                engineerInquire();
            } else if (responses.nextMember === 'Intern') {
                internInquire();
            } else {

            }
        })
    };

managerInquire()