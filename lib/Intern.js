// TODO:
// Create Intern class w/ spaces for inquirer inputs. Must include:
    // name
    // id
    // email
    // getName()
    // getId()
    // getEmail()
    // getRole()
    // school
    // getSchool()

const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {

        super(name, id, email);

        this.school = school

    };

    getName() {
        return this.name;
    };

    getId() {
        return this.id;
    };

    getEmail() {
        return this.email;
    };

    getRole() {
        return "Intern";
    };

    getSchool() {
        return this.school;
    }
}

module.exports = Intern