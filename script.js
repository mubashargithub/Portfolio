    document.querySelector('.nav_logo').addEventListener('click', function() {
        document.querySelector('.navbar').classList.toggle('active');
    });



function scrollToContact() {
    const contactSection = document.getElementById('Contact');
    contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

function scrollToProjects(){
    const projectsSection = document.getElementById('Projects');
    projectsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

document.getElementById('downloadCvBtn').addEventListener('click', function() {
    // Create temporary link
    const link = document.createElement('a');
    link.href = 'MubasharResume.pdf';
    link.download = 'Mubashar_Gill_CV.pdf'; // The filename users will see
    
    // Trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Optional: Add visual feedback
    this.textContent = 'Downloading...';
    setTimeout(() => {
        this.textContent = 'Download CV';
    }, 2000);
});

let con_input_fullname = document.getElementById("con-input-fullname");
let con_input_email = document.getElementById("con-input-email");
let con_input_message = document.getElementById("con-input-message");
let contact_me_btn = document.getElementById("contact-me-btn");
let con_me_btn_is = document.getElementById("con_me_btn_itself");
contact_me_btn.addEventListener('click',()=>{

    // if(con_input_fullname.value === ""){
    //         con_input_fullname.focus();

    // }

        if (con_input_fullname.value === "" && con_input_email.value === "" && con_input_message.value=="") {
            con_input_fullname.focus();
            con_input_fullname.style.borderBottom = '4px solid red';
            con_input_email.style.borderBottom = '4px solid red';
            con_input_message.style.borderBottom = '4px solid red';

        }
        else if (con_input_email.value === "" && con_input_message.value === "") {
            con_input_email.focus();
            con_input_email.style.borderBottom = '4px solid red';
            con_input_message.style.borderBottom = '4px solid red';
        }
        else if(con_input_message.value === ""){
            con_input_message.focus();
            con_input_message.style.borderBottom = '4px solid red';
        }
        else{
            if(con_input_email.value.slice(-9) !=="gmail.com"){
                con_input_email.focus();
                con_input_email.value = '';
                con_input_email.placeholder = 'Wrong Email Format';
                con_input_email.style.borderBottom = '4px solid red';
            }
            con_input_message.style.borderBottom = '4px solid green';
            con_input_message.placeholder = 'Information Sending Successful';
            con_input_email.value = '';
            con_input_fullname.value = '';
            con_input_message.value = '';
            con_me_btn_is.style.backgroundColor = 'green';
        }
})

con_input_fullname.addEventListener('input',()=>{
    con_input_fullname.style.borderBottom = '4px solid white';
    
})

con_input_email.addEventListener('input',()=>{
    con_input_email.style.borderBottom = '4px solid white';
    con_input_email.placeholder = 'E-Mail';
})

con_input_message.addEventListener('input',()=>{
    con_input_message.placeholder = 'Message';
    con_input_message.style.borderBottom = '4px solid white';
})


document.addEventListener('scroll',()=>{
    con_input_message.placeholder = 'Message';
    con_me_btn_is.style.backgroundColor = 'white';  
    con_input_message.style.borderBottom = '4px solid white';
})