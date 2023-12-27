// Define an interface for User_data
interface User_data {
    getdata(): void;
    validation(): boolean;
}

// Implement the User_data interface in the User class
class User implements User_data {
    // Properties for user data
    public first_name: string;
    public last_name: string;
    public gender: string;
    public address: string;
    public mobile_no: string;
    public emailid: string;
    public password: string;
    public loaded: boolean = false;

    // Method to get user data from HTML elements
    getdata(): void {
        const fname = document.getElementById("firstname") as HTMLInputElement;
        this.first_name = fname.value;
        const lname = document.getElementById("lastname") as HTMLInputElement;
        this.last_name = lname.value;
        const gen = document.getElementById("gender") as HTMLInputElement;
        this.gender = gen.value;
        const addres = document.getElementById("address") as HTMLInputElement;
        this.address = addres.value;
        const mobile = document.getElementById("mobile") as HTMLInputElement;
        this.mobile_no = mobile.value;
        const email = document.getElementById("email") as HTMLInputElement;
        this.emailid = email.value;
        const passw = document.getElementById("password") as HTMLInputElement;
        this.password = passw.value;
    }

    // Method to perform validation on user data
    validation(): boolean {
        var error_message: string = "";
        if (this.first_name !== "") {
            console.log(this.first_name);
        } else {
            error_message = error_message + "The first name should not be empty. \n";
        }
        // ... (similar blocks for other fields)

        if (error_message === "") {
            return true;
        } else {
            return false;
        }
    }
}

// Create an instance of the User class
const obj = new User();

// Function to perform asynchronous validation
let valid = async () => {
    if (obj.validation()) {
        obj.loaded = true;
        return "Validated";
    } else {
        obj.loaded = true;
        throw new Error("Not validated");
    }
};

// Asynchronous function to validate and log the result
async function validateAndLog() {
    try {
        const result = await valid();
        const loader: any = document.getElementById('loader');
        loader.style.display = 'none';
        console.log(result);
        window.open("./index.html","_self");
    } catch (error) {
        console.error(`error: ${error.message}`);
    }
}

// Function to initiate the validation process
function call() {
    let loader: any = document.getElementById('loader');
    loader.style.display = 'block';
    obj.getdata();
    obj.validation();

    // Use setTimeout to simulate an asynchronous delay
    setTimeout(() => {
        validateAndLog();
    }, 2000);

}
