import {UserDate} from "./../src/js/backend.js";

describe("UserDate", function() {

  let test;
  beforeEach(function() {
    UserDate.prototype.findY = function() {
      if(this.m > 10) {
        this.Y = this.year - 1;
      } else {
        this.Y = this.year;
      }
    };
    test = new UserDate(1, 11, 2000);
  });

  it("store user input in constructor 'UserDate' parameters", function() {
    let test1 = new UserDate(1, 11, 2000);
    expect(test1.d).toEqual(1);
    expect(test1.m).toEqual(11);
    expect(test1.year).toEqual(2000);
  });

  it("if selected month's option value is greater than 10, reduce entered year by 1", function() {
    UserDate.prototype.findY = function() {
      if(this.m > 10) {
        this.Y = this.year - 1;
      } else {
        this.Y = this.year;
      }
    };
    test.findY();
    expect(test.Y).toEqual(1999);
  });

  it('remove last two digits from object Y key', function() {
    UserDate.prototype.findy = function() {
      let yearString = this.Y.toString();
      let Y = yearString.split("");
      this.y = parseInt(Y.slice(2).join(""));
    };
    test.findY();
    test.findy();
    expect(test.y).toEqual(99);
  });

  it('remove last first digits from object Y key', function() {
    UserDate.prototype.findc = function() {
      let yearString = this.Y.toString();
      let Y = yearString.split("");
      this.c = parseInt(Y.slice(0, 2).join(""));
    };
    test.findY();
    test.findc();
    expect(test.c).toEqual(19);
  });

  it('', function() {

  });

});
