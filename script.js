// window.alert("This is an Accessible Form UI. Please fill out the form and submit it. If there are any errors, they will be displayed below the respective fields. Thank you for your cooperation!");


function formValidate() {

    // Declare variables

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let pass = document.getElementById("pass").value.trim();
    let word = document.getElementById("word").value.trim();

    // Declare error variables without .value

    let error1 = document.getElementById("error1");
    let error2 = document.getElementById("error2");
    let error3 = document.getElementById("error3");
    let error4 = document.getElementById("error4");

    let isValid = true;

    // Name Validation 

    if (name === "") {
        error1.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> Name is required';
        isValid = false;
    } else if (name.length < 3 || name.length > 20) {
        error1.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> Write a valid Name';
        isValid = false;
    } else {
        error1.innerHTML = "";
    }

    // Email Validation

    if (email === "") {
        error2.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> Email is required';
        isValid = false;
    } else if (email.indexOf("@gmail.com") === -1) {
        error2.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> Write a valid Email';
        isValid = false;
    } else {
        error2.innerHTML = "";
    }

    // Password Validation

    if (pass === "") {
        error3.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> Password is required';
        isValid = false;
    } else if (pass.length < 8) {
        error3.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> Password must be at least 8 characters';
        isValid = false;
    } else {
        error3.innerHTML = "";
    }

    // Password Confirmation Validation

    if (word === "") {
        error4.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> Please Confirm your Password';
        isValid = false;
    } else if (word !== pass) {
        error4.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> Passwords do not match';
        isValid = false;
    } else {
        error4.innerHTML = "";
    }

    return isValid;

}

//  Show/Hide Password Functionality

// Complete Real-time 

function updateProgress() {
    
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let pass = document.getElementById("pass").value;
    let word = document.getElementById("word").value;

    let totalFields = 4;
    let filledFieldsCount = 0;

    if (name.length >= 3) filledFieldsCount++;
    if (email.length > 5 && email.includes("@") && email.includes(".")) filledFieldsCount++;
    if (pass.length >= 8) filledFieldsCount++;
    if (word.length >= 8 && word === pass) filledFieldsCount++;

    let percentage = Math.round((filledFieldsCount / totalFields) * 100);

    // تحديث النص إذا كان موجوداً
    let perText = document.getElementById('perText');
    if (perText) {
        perText.innerText = percentage + "%";
    }

    // تحديث الدائرة بأمان تام
    const circle = document.querySelector('.progress-ring__circle');
    if (circle) {
        const radius = circle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;
        
        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        const offset = circumference - (percentage / 100) * circumference;
        circle.style.strokeDashoffset = offset;
    }

    let success = document.getElementById("button");
    if (percentage === 100) {
        success.style.backgroundColor = "#006400"; // Change to green when all fields are filled
        circle.style.stroke = "#006400"; // Change circle color to green
    }
}