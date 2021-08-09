// TODO:
// test the following functions:
    // getName()
    // getId()
    // getEmail()
    // getRole(), must return Engineer
    // getGithub()

const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("getName", () => {
         it("should return the name of the engineer", () => {
            const name = "Name";

            const engineer = new Engineer(name);

            expect(engineer.getName()).toEqual(name);
        })
    })
    
    describe("getId", () => {
            it("should return the id of the engineer", () => {
    
         })
    })
    
    describe("getEmail", () => {
        it("should return the email of the engineer", () => {
    
        })
    })
    
    describe("getRole", () => {
        it("should return 'Engineer'", () => {
                
        })
    })

    describe("getGithub", () => {
        it("should return the Github username of the engineer", () => {

        })
    })
})