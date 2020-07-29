// console.log("Testing");

// Grabbing name,email,phone with their id's
const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone-no");

let valid_name = false;
let valid_email = false;
let valid_phone = false;

// checking whether i have grabbed the id's or not
// console.log(name);
// console.log(email);

// Adding blur events on name,email,phone

// FOR NAME
name.addEventListener("blur",()=>{
    // console.log("Blur");

    // validating name
    // the user name must be start with alphabet only
    // the length of user name must be 2 or more than 2
    // the user can put his first name or last name it is upto user 
    let regex_name = /^([a-zA-Z]){2,10}\s*?[a-zA-Z?]*$/i;

    // getting input from textfield of name 
    let getName = name.value;

    if(regex_name.test(getName))
    {
    console.log("name Valid");
    valid_name = true;

    // if name is valid 
    // Dynamically removing  "is-invalid"class
    name.classList.remove("is-invalid")
    }
    else
    {
        valid_name = false;
    console.log("name invalid");

    // if name is invalid the box turns red
    // Dynamically inserting "is-invalid"class
    name.classList.add("is-invalid")
    }

})





// FOR EMAIL
email.addEventListener("blur", ()=>{
    let regex_email = /\w+\.*\-*\_*\W\w+.com$/i;
    // const regex_email = /^([0-9a-zA-Z]){2,30}\W[0-9a-zA-Z]*.com$/i;
    let getEmail = email.value;
    if(regex_email.test(getEmail))
    {
        console.log("valid email");
        valid_email = true;
        email.classList.remove("is-invalid");
        
    }
    else
    {
        valid_email = false;
        console.log("invalid email");
        email.classList.add("is-invalid");
        
    }
})


// FOR PHONE NUMBER
phone.addEventListener("blur",()=>{
    const regex_phone = /^(\d){10}$/;
    const getPhoneNo = phone.value;
    if(regex_phone.test(getPhoneNo))
    {
        console.log("valid phone");
        valid_phone = true;
        phone.classList.remove("is-invalid");
    }
    else
    {
        valid_phone = false;
        console.log("invalid phone");
        phone.classList.add("is-invalid");
    }
})



// Grabbing submit button with id submit
let submit = document.getElementById("submit");
submit.addEventListener("click",(e)=>{
    
    console.log("button clicked");
    e.preventDefault();

    // show is class of the dismissible alert bar that will display alert bar when we click submit button
    // we are adding show class dynamically

    if(valid_name && valid_email && valid_phone)
    {
    let alertbar = document.getElementById("alert-bar");
    alertbar.classList.add("show");
    // alertbar.classList.remove("show");
    $('#alert-bar1').hide();
    $('#alert-bar').show();

    }
    else
    {
        let alertbar1 = document.getElementById("alert-bar1");
        alertbar1.classList.add("show");

         $('#alert-bar1').show();
        $('#alert-bar').hide();
    }

    

    
       
   
})