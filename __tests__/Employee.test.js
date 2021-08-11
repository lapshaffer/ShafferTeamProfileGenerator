const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("getName", () => {
        it("should return the name of the employee", () => {
            const name = "Name";

            const employee = new Employee(name);

            expect(employee.getName()).toEqual(name);
        })
    });

    describe("getId", () => {
        it("should return the id of the employee", () => {
            const id = "ID";

            const name = "Name"

            const employee = new Employee(name, id);

            expect(employee.getId()).toEqual(id);
        })
    });

    describe("getEmail", () => {
        it("should return the email of the employee", () => {
            const email = "Email";

            const id = "ID";

            const name = "Name"

            const employee = new Employee(name, id, email);

            expect(employee.getEmail()).toEqual(email);
        })
    });

    describe("getRole", () => {
        it("should return 'Employee'", () => {
            const role = "Employee";

            const employee = new Employee(role);

            expect(employee.getRole()).toEqual(role);
        })
    });
})