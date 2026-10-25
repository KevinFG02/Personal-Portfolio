let emailcheckbox = document.getElementById("mailList");
let meeting = document.getElementById("meeting-option");
let otherbox = document.getElementById("otherbox");

document.getElementById("contact-form").onsubmit = () => {
    let isValid = true;

    clearErrors();

    // Validate first name
    let fname = document.getElementById("fname").value.trim();
    if (fname === ""){
        document.getElementById("error-fname").style.display = "inline-block";
        isValid = false;
    }

    // Validate last name
    let lname = document.getElementById("lname").value.trim();
    if (lname === ""){
        document.getElementById("error-lname").style.display = "inline-block";
        isValid = false;
    }

    // Validate Linkedin URL
    let linkedinurl = document.getElementById("linkedin").value.trim();
    let linkedinurlsub = linkedinurl.slice(0, 24);
    let linkedinvalid = "https://linkedin.com/in/";
    let containurl = linkedinurlsub.includes(linkedinvalid);
    
    if(linkedinurl != ""){
        if(!containurl){
            document.getElementById("error-linkedin").style.display = "inline-block";
            isValid = false;
        }
    }

    // Validate optional email
    let email = document.getElementById("user-email").value.trim();

    if(email != ""){
        if(!email.includes('@') || !email.includes('.')){
            document.getElementById("error-email").style.display = "inline-block";
            isValid = false;
        }
    }

    // Validate meeting options
    let meetingValue = meeting.value;
    if(meetingValue === "none"){
        document.getElementById("error-meeting").style.display = "inline-block";
        isValid = false;
    }
    
    // Validate email format checkbox
    let emailcheckboxvalid = emailcheckbox.checked;

    if (emailcheckboxvalid) {
        if(email === "" || !email.includes('@') || !email.includes('.')){
            document.getElementById("error-format").style.display = "inline-block";
            isValid = false;
        }
    }

    // Do not submit the form if data is in-valid
    return isValid;
};

function clearErrors(){
    let errors = document.getElementsByClassName("error");
    for(let i=0; i < errors.length; i++){
        errors[i].style.display = "none";
    }
}

function otherMeeting(){
    if(meeting.value === "other"){
        otherbox.style.display = "block";
    } else {
        otherbox.style.display = "none";
    }
}

function emailFormat(){
    let emailcheckboxvalid = emailcheckbox.checked;
    let emailformat = document.getElementById("emailformatfieldset");

    if (emailcheckboxvalid) {
        emailformat.style.display = "block";
    } else {
        emailformat.style.display = "none";
    }
}

emailcheckbox.addEventListener('change', emailFormat);
meeting.addEventListener('change', otherMeeting);