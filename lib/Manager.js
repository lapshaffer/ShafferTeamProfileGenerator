// TODO:
// Create Manager class w/ spaces for inquirer inputs. Must include:
    // name
    // id
    // email
    // getName()
    // getId()
    // getEmail()
    // getRole()
    // officeNumber

const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {

        super(name, id, email);

        this.officeNumber = officeNumber; 

    };

    getName() {
        return this.name;
    };

    getRole() {
        return "Manager";
    };
}

module.exports = Manager