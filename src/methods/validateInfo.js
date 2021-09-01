const validateInfo = (values) => {
    let errors = {};

    //Username check
    if (!values.username.trim()) {
        errors.username = "Username required";
    };

    //Password check & validation
    if (!values.password) {
        errors.password = "Password is required";
    } else if (values.password.length < 6) {
        errors.password = "Password does not meet the length requirements";
    };

    if (!values.password2) {
        errors.password2 = "Password is required";
    } else if (values.password2 !== values.password) {
        errors.password2 = "Passwords do not match";
    };

    return errors;
};

export default validateInfo;
