//Backend Logic
export function UserDate(day, month, year) {
  this.d = day;
  this.m= month;
  this.year = year;
}

UserDate.prototype.findY = function() {
  if(this.m > 10) {
    this.Y = this.year - 1;
  } else {
    this.Y = this.year;
  }
};

UserDate.prototype.findy = function() {
  let yearString = this.Y.toString();
  let Y = yearString.split("");
  this.y = parseInt(Y.slice(2).join(""));
};

UserDate.prototype.findc = function() {
  let yearString = this.Y.toString();
  let Y = yearString.split("");
  this.c = parseInt(Y.slice(0, 2).join(""));
};

UserDate.prototype.getDay = function() {
  let d = this.d;
  let m = this.m;
  let y = this.y;
  let c = this.c;
  this.w = (d + Math.floor((2.6*m-.2)) + y + Math.floor((y/4)) + Math.floor((c/4)) - (2*c))%7;
};

UserDate.prototype.getDayName = function() {
  switch (this.w) {
  case 0:
    this.dayName = "Sunday";
    break;
  case 1:
    this.dayName = "Monday";
    break;
  case 2:
    this.dayName = "Tuesday";
    break;
  case 3:
    this.dayName = "Wednesday";
    break;
  case 4:
    this.dayName = "Thursday";
    break;
  case 5:
    this.dayName = "Friday";
    break;
  case 6:
    this.dayName = "Saturday";
  }
};
