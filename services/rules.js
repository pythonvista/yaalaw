// Add a validator rule for email address format
const emailRules = [
    (v) => !!v || "Email is required",
    (v) =>
        /.+@.+\..+/.test(v) || "Please enter a valid email address",
];

// Add a required validation rule
const requiredRule = [(v) => !!v || "This field is required"];

const phoneRules = [
    (v) => (v && v.length >= 1) || "Field is required",
    (v) => (v && v.length == 11) || "Not a valid Phone Number ",
];
const inputRules = [(v) => (v && v.length >= 3) || "Field is required"];
const passwdRules = [
    v => !!v || 'Password is required',
    v => v.length >= 8 && /[A-Z]/.test(v) && /[a-z]/.test(v) && /[0-9]/.test(v) && /[$&+,:;=?@#|'<>.^*()%!-]/.test(v) || 'Password must contain at least one uppercase letter, one lowercase letter, one number and a special character and must be 8 characters long',
];
const checkPassword = [
    (v) =>
        !!v ||
        "Password confirmation is required",
    (v) =>
        !v === this.password ||
        "Password does not match",
];
const agree = [(v) => v || "Agree to terms and condition"];
export {
    emailRules,
    passwdRules,
    checkPassword,
    requiredRule,
    inputRules,
    phoneRules,
    agree,
};