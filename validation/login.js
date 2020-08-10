// Pulls in the `validator` and `is-empty` dependencies.
const Validator = require("validator");
const isEmpty = require("is-empty");

// Exports the function `validateRegisterInput`, which takes in `data` as a parameter (which is coming from our frontend login form).
module.exports = validateLoginInput = (data) => {
    let errors = {};

    // Converts all empty fields to an empty string before running validation checks (as `validator` functions only works with strings).
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";

    // Checks email.
    if (Validator.isEmpty(data.email)) {
        errors.email = "You must enter an email address.";
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "The email address provided is invalid.";
    }

    // Checks password.
    if (Validator.isEmpty(data.password)) {
        errors.password = "You must enter a password.";
    }

    // Returns the `errors` object with any and all errors found as well as an `isValid` boolean that checks to see if there are any errors.
    return {
        errors,
        isValid: isEmpty(errors)
    };
};