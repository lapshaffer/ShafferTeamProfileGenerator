const inquirer = require('inquirer');
const fs = require('fs');
// pull the sortEmployees and generateHTML functions from the page-builder.js file
const functions = require('./page-builder')
// pull the classes for each employee type from their respective files
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
// each employee will be pushed into this array once all of their appropriate questions have been answered
const teamMembers = [];
// array of questions for the manager, ie, the person who is running this program
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
// array of questions for each engineer
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
// array of questions for each intern
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
// Ask the manager-specific questions in the terminal, then select a new employee type
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
                generateHtml(teamMembers);
            }
        })
    };
// ask engineer-specific questions in terminal, then select next employee type
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
                generateHtml(teamMembers);
            }
        })
    };
// ask intern-specific questions in terminal, then select next employee type
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
                generateHtml(teamMembers);
            }
        })
    };
// if no other employees are selected, run this function to start generating the HTML on the page-builder.js file
function generateHtml(teamMembers) {
    fs.writeFile('./dist/team.html', functions.sortEmployees(teamMembers),
        err => err ? console.log(err) : console.log('Your team.html file is in the ./dist folder'));
}

module.exports = {managerInquire}