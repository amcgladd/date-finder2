import {UserDate} from "./../src/main.js";

describe("UserDate", function() {

  it("Hassan's bday equals Wednesday", function() {
    var hassansBDay = new UserDate(16, 10, 1987);
    hassansBDay.findY();
    hassansBDay.findy();
    hassansBDay.findc();
    hassansBDay.getDay();
    hassansBDay.getDayName();
    expect(hassansBDay.dayName).toEqual("Wednesday");
  });

});
