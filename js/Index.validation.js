class Validation {
  isValidFirstName(firstName) {
    if (!this.isValidMessage(firstName)) {
      return false;
    }

    return true;
  }

  isValidLastName(lastName) {
    if (!this.isValidMessage(lastName)) {
      return false;
    }
    if (lastName.length < 2) {
      return false;
    }
    if (firstName[0].toLowerCase() === firstName[0]) {
      return false;
    }
    if (firstName.slice(1).toLowerCase !== firstName.slice(1)) {
      return false;
    }

    return true;
  }

  isValidEmail(email) {
    return true;
  }

  isValidMessage(message) {
    if (typeof message !== 'string' || message === '') {
      return false;
    }
    console.log(message);
    return true;
  }

  isValidPhoneNumber(number) {
    if (typeof number === 'string' || number === '') {
      return false;
    }
    for (let i = 0; i < number.length; i++) {
      const numberCount = number[i];
      if (numberCount < 9) {
        return false;
      }
      console.log(number);
      return true;
    }
  }
  // is Nan
  isValidMonthName(month, lang) {
    const monthName = {
      lt: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      en: [
        'Sausis',
        'Vasaris',
        'Kovas',
        'Balandis',
        'Geguze',
        'Birzelis',
        'Liepa',
        'Rugpjutis',
        'Rugsėjis',
        'Spalis',
        'Lapkritis',
        'Gruodis',
      ],
    };
    if (!monthName[lang].includes(month)) {
      console.error('ERROR: Month has to be with proper name');
      return false;
    }
    return true;
  }

  isValidWeekdayName(weekday, lang) {
    const WeekdayName = {
      lt: [
        'Pirmadienis',
        'Antradienis',
        'Treciadienis',
        'Ketvirtadienis',
        'Penktadienis',
        'Sestadienis',
        'Sekmadienis',
      ],
      en: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
    };
    if (!WeekdayName[lang].includes(weekday)) {
      console.error('ERROR: Weekday has to be with proper name');
      return false;
    }
    return true;
  }

  isValidPersonID() {
    return true;
  }
}

module.exports = Validation;
class Validation {
  isValidFirstName(firstName) {
    if (firstName === undefined) {
      return false;
    }
    return true;
  }
