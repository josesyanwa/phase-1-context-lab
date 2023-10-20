/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

/*const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}*/
// Helper function to create an employee record
const { expect } = require("chai");

describe("The payroll system", function () {
  let employee; // Initialize an employee record

  // This hook runs before each "it" block
  beforeEach(function () {
    employee = createEmployeeRecord("Gray", "Worm", "Security", 1);
  });

  describe("populates a record from an Array", function () {
    it("has a function called createEmployeeRecord", function () {
      expect(createEmployeeRecord).to.exist;
    });

    describe("createEmployeeRecord", function () {
      it("populates a firstName field from the 0th element", function () {
        expect(employee.firstName).to.equal("Gray");
      });

      it("populates a familyName field from the 1st element", function () {
        expect(employee.familyName).to.equal("Worm");
      });

      it("populates a title field from the 2nd element", function () {
        expect(employee.title).to.equal("Security");
      });

      it("populates a payPerHour field from the 3rd element", function () {
        expect(employee.payPerHour).to.equal(1);
      });

      it("initializes a field, timeInEvents, to hold an empty Array", function () {
        expect(employee.timeInEvents).to.eql([]);
      });

      it("initializes a field, timeOutEvents, to hold an empty Array", function () {
        expect(employee.timeOutEvents).to.eql([]);
      });
    });
  });
});

