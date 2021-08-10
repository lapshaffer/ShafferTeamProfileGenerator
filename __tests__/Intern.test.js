// TODO:
// test the following functions:
    // getName()
    // getId()
    // getEmail()
    // getRole(), must return Intern
    // getSchool()

const Intern = require("../lib/Intern");

describe("Intern", () => {
     describe("getName", () => {
        it("should return the name of the intern", () => {
            const name = "Name";

            const intern = new Intern(name);

            expect(intern.getName()).toEqual(name);

        })
    })
    
    describe("getId", () => {
        it("should return the id of the intern", () => {
            const id = "ID";

            const name = "Name";

            const intern = new Intern(name, id);

            expect(intern.getId()).toEqual(id);
        })
    })
    
    describe("getEmail", () => {
        it("should return the email of the intern", () => {
            const email = "Email";

            const id = "ID";

            const name = "Name";

            const intern = new Intern(name, id, email);

            expect(intern.getEmail()).toEqual(email);
        })
     })
    
    describe("getRole", () => {
        it("should return 'Intern'", () => {
            const role = "Intern";

            const intern = new Intern(role);

            expect(intern.getRole()).toEqual(role);
        })
    })

    describe("getSchool", () => {
        it("should return the name of the intern's school", () => {
            const school = "School";

            const email = "Email";

            const id = "ID";

            const name = "Name";

            const intern = new Intern(name, id, email, school);

            expect(intern.getSchool()).toEqual(school);
        })
    })
})