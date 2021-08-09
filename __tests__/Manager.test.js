// TODO:
// test the following functions:
    // getName()
    // getId()
    // getEmail()
    // getRole(), must return Manager

const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("getName", () => {
        it("should return the name of the manager", () => {
            const name = "Name";

            const manager = new Manager(name);

            expect(manager.getName()).toEqual(name);

        })
    })
    
    describe("getId", () => {
        it("should return the id of the manager", () => {
    
        })
    })
    
    describe("getEmail", () => {
        it("should return the email of the manager", () => {
    
        })
    })
    
    describe("getRole", () => {
        it("should return 'Manager'", () => {
                
        })
    })
})