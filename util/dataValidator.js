// https://www.npmjs.com/package/password-validator
import passwordValidator from 'password-validator';

// This function check the validation of password: 
export const checkPasswordValidation = (password) => {
    // Create a schema
    const schema = new passwordValidator();
    // Add properties to it
    schema
        .is().min(6)                                    // Minimum length 6
        .is().max(100)                                  // Maximum length 100
        .has().uppercase()                              // Must have uppercase letters
        .has().lowercase()                              // Must have lowercase letters
        .has().digits(2)                                // Must have at least 2 digits
    //.has().not().spaces()                           // Should not have spaces
    //.is().not().oneOf(['Passw0rd', 'Password123']); // Password minimum length must be between 6 and 100 characters / it must have an uppercase letter, a lower uppercase letter and at least two digits
    console.log(schema.validate(password));
    const validationResult = schema.validate(password);
    return validationResult;
}
