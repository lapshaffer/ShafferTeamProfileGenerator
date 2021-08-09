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
    
        })
    })
    
    describe("getEmail", () => {
        it("should return the email of the intern", () => {
    
        })
     })
    
    describe("getRole", () => {
        it("should return 'Intern'", () => {
                
        })
    })

    describe("getSchool", () => {
        it("should return the name of the intern's school", () => {
            
        })
    })
})