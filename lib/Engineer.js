// TODO:
// Create Engineer class w/ spaces to input inquirer inputs. Must include:
    // name
    // id
    // email
    // getName()
    // getId()
    // getEmail()
    // getRole()
    // github
    // getGithub()

const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {

        super(name, id, email);

        this.github = github;
    };

    getName() {
        return this.name;
    };

    getRole() {
        return "Engineer";
    };
}

module.exports = Engineer