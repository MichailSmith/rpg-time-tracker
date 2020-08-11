import React from "react";
const y = 31536000;
const m = 2592000;
const d = 86400;
const h = 3600;

class DndDate {
  seconds: number;
  startingYear: number;
  monthNames: { [key: string]: number };
  //monthMap: Map<string, number>;

  constructor(seconds: number = 0, startingYear: number = 1494) {
    this.seconds = seconds + startingYear * y + 32227200;
    this.startingYear = startingYear;
    this.monthNames = {
      //Check for leap year to add ShieldMeet
      Hammer: Math.floor(this.seconds / y) % 4 === 0 ? m + 2 * d : m + d,
      Alturiak: m,
      Ches: m,
      Tarsakh: m + d,
      Mirtul: m,
      Kythorn: m,
      Flamerule: m + d,
      Eleasis: m,
      Eleint: m + d,
      Marpenoth: m,
      Ukar: m + d,
      Nightal: m,
    };
    //this.monthMap = new Map(Object.entries(this.monthNames));
  }

  getMonth() {
    return 0;
  }

  public toString = (): string => {
    //we might have to use and iterator and a lambda function instead of these modulus operators due to the periodic nature of
    //Shieldmeet and the holidays
    let year = Math.floor(this.seconds / y);
    let passedLeapDaysAsSeconds =
      year % 4 === 0 ? Math.floor(year / 4 - 1) : Math.floor(year / 4);
    let secondsWLeaps = this.seconds - passedLeapDaysAsSeconds * d;
    //years and leap days are accounted for, now rendering the date within the current year begins
    let preppedMonthInput = secondsWLeaps % y;
    console.log(preppedMonthInput);
    let month = "Hammer";
    let sentinel = true;
    Object.entries(this.monthNames).forEach(([key, value]) => {
      console.log(preppedMonthInput);
      if (preppedMonthInput <= value) {
        if (sentinel === true) {
          secondsWLeaps = preppedMonthInput;
          month = key;
          sentinel = false;
          console.log(preppedMonthInput);
        }
      } else {
        preppedMonthInput -= value;
      }
    });
    //secondsWLeaps = Math.floor(month % m);
    //month = Math.floor(month / m);
    //let month = Math.floor((secondsWLeaps % y) / m);

    // if (month === "hi" || 3 || 6 || 8 || 10) {
    //   //add Midwinter, Greengrass, Midsummer, Highharvestide, The Feast of the Moon
    // }
    let day = Math.floor(secondsWLeaps / d);
    let hour = Math.floor((secondsWLeaps % d) / h);
    let minute = Math.floor((secondsWLeaps % h) / 60);
    let second = Math.floor(secondsWLeaps % 60);
    return `Day: ${
      day + 1
    } Month: ${month} Year: ${year}DR Time: ${hour}:${minute}:${second}`;
  };
}
