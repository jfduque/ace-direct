/*
                                 NOTICE

This (software/technical data) was produced for the U. S. Government under
Contract Number HHSM-500-2012-00008I, and is subject to Federal Acquisition
Regulation Clause 52.227-14, Rights in Data-General. No other use other than
that granted to the U. S. Government, or to those acting on behalf of the U. S.
Government under that Clause is authorized without the express written
permission of The MITRE Corporation. For further information, please contact
The MITRE Corporation, Contracts Management Office, 7515 Colshire Drive,
McLean, VA 22102-7539, (703) 983-6000.

                        ©2018 The MITRE Corporation.
*/

module.exports = {
  isUniqueId(uniqueId) {
    let isFormatCorrect = false;
    if (uniqueId) isFormatCorrect = (!Number.isNaN(uniqueId) && (uniqueId.toString().length < 32) && (uniqueId.toString().indexOf('.') !== -1));
    return isFormatCorrect;
  },
  isDtmfDigit(dtmf) {
    let isFormatCorrect = false;
    if (dtmf) isFormatCorrect = (!Number.isNaN(dtmf) && (dtmf.toString().length === 1));
    return isFormatCorrect;
  },
  isChannel(channel) {
    let isFormatCorrect = false;
    if (channel) {
      const re = /^SIP.{0,30}$/;
      isFormatCorrect = re.test(channel);
    }
    return isFormatCorrect;
  },
  isPasswordComplex(password) {
    let isFormatCorrect = false;
    if (password) {
      const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,15}$/;
      isFormatCorrect = re.test(password);
    }
    console.log(`isPasswordComplex ${isFormatCorrect}`);
    return isFormatCorrect;
  },
  isUsernameValid(username) {
    let isFormatCorrect = false;
    if (username) {
      const legalChars = /^[a-zA-Z0-9_]+$/; // allow letters, numbers, and underscores
      isFormatCorrect = ((username.length >= 4) && (username.length <= 10)
        && (legalChars.test(username)));
    }
    console.log(`isUsernameValid ${isFormatCorrect}`);
    return isFormatCorrect;
  },
  isEmailValid(email) {
    let isFormatCorrect = false;
    if (email) {
      const legalChars = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      isFormatCorrect = ((email.length >= 1) && (email.length <= 40) && (legalChars.test(email)));
    }
    console.log(`isEmailValid ${isFormatCorrect}`);
    return isFormatCorrect;
  },
  isVrsNumberValid(phone) {
    let isFormatCorrect = false;
    if (phone) {
      const legalChars = /^\d{10}$/;
      isFormatCorrect = ((phone.length === 10) && (legalChars.test(phone)));
    }
    return isFormatCorrect;
  },
  isPhoneValid(phone) {
    let isFormatCorrect = false;
    if (phone) {
      const legalChars = /^[1-9]\d{2}-\d{3}-\d{4}/;
      isFormatCorrect = ((phone.length >= 1) && (phone.length <= 12) && (legalChars.test(phone)));
    }
    console.log(`isPhoneValid ${isFormatCorrect} ${phone}`);
    return isFormatCorrect;
  },
  isNameValid(name) {
    let isFormatCorrect = false;
    if (name) {
      // const legalChars = /^[A-Za-z\/\s\.'-]+$/;
      const legalChars = /^[A-Za-z/\s.'-]+$/;
      isFormatCorrect = ((name.length >= 1) && (name.length <= 20) && (legalChars.test(name)));
    }
    console.log(`isNameValid ${isFormatCorrect} ${name}`);
    return isFormatCorrect;
  }
};
