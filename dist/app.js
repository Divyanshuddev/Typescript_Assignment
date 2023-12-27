var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Implement the User_data interface in the User class
class User {
    constructor() {
        this.loaded = false;
    }
    // Method to get user data from HTML elements
    getdata() {
        const fname = document.getElementById("firstname");
        this.first_name = fname.value;
        const lname = document.getElementById("lastname");
        this.last_name = lname.value;
        const gen = document.getElementById("gender");
        this.gender = gen.value;
        const addres = document.getElementById("address");
        this.address = addres.value;
        const mobile = document.getElementById("mobile");
        this.mobile_no = mobile.value;
        const email = document.getElementById("email");
        this.emailid = email.value;
        const passw = document.getElementById("password");
        this.password = passw.value;
    }
    // Method to perform validation on user data
    validation() {
        var error_message = "";
        if (this.first_name !== "") {
            console.log(this.first_name);
        }
        else {
            error_message = error_message + "The first name should not be empty. \n";
        }
        // ... (similar blocks for other fields)
        if (error_message === "") {
            return true;
        }
        else {
            return false;
        }
    }
}
// Create an instance of the User class
const obj = new User();
// Function to perform asynchronous validation
let valid = () => __awaiter(this, void 0, void 0, function* () {
    if (obj.validation()) {
        obj.loaded = true;
        return "Validated";
    }
    else {
        obj.loaded = true;
        throw new Error("Not validated");
    }
});
// Asynchronous function to validate and log the result
function validateAndLog() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield valid();
            const loader = document.getElementById('loader');
            loader.style.display = 'none';
            console.log(result);
            window.open("./index.html", "_self");
        }
        catch (error) {
            console.error(`error: ${error.message}`);
        }
    });
}
// Function to initiate the validation process
function call() {
    let loader = document.getElementById('loader');
    loader.style.display = 'block';
    obj.getdata();
    obj.validation();
    // Use setTimeout to simulate an asynchronous delay
    setTimeout(() => {
        validateAndLog();
    }, 2000);
}
