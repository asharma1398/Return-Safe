// Pulls in the `validator` and `is-empty` dependencies.
const Validator = require("validator");
const isEmpty = require("is-empty");

// Exports the function `validateRegisterInput`, which takes in `data` as a parameter (which is coming from our frontend registration form).
module.exports = validateRegisterInput = (data) => {
    // An instance of the `errors` object.
    let errors = {};

    // Converts all empty fields to an empty string before running validation checks (as `validator` functions only works with strings).
    data.name = !isEmpty(data.name) ? data.name : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.password2 = !isEmpty(data.password2) ? data.password2 : "";

    // The validator functions check for empty fields, valid email formats, password requirements, and making sure that the input for the confirmed password is equal to the password that was originally inputted.

    // Checks name.
    if (Validator.isEmpty(data.name)) {
        errors.name = "You must enter a name."
    }

    // Checks email.
    if (Validator.isEmpty(data.email)) {
        errors.email = "You must enter an email address."
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "The email address provided is invalid.";
    }

    // Checks password.
    if (Validator.isEmpty(data.password)) {
        errors.password = "You must enter a password.";
    }

    // Checks length of password.
    if (!Validator.isLength(data.password, { min: 8, max: 20 })) {
        errors.password = "Password must be at least 8 characters.";
    }

    // Checks whether the first password matches the second password.
    if (!Validator.equals(data.password, data.password2)) {
        errors.password2 = "Passwords do not match.";
    }

    // Returns the `errors` object with any and all errors found as well as an `isValid` boolean that checks to see if there are any errors.
    return {
        errors,
        isValid: isEmpty(errors)
    };
};