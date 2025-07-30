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



let homenav = document.getElementById('home_nav_id');
let homenavl = document.getElementById('home_nav_id_l');
let aboutnav = document.getElementById('about_nav_id');
let aboutnavl = document.getElementById('about_nav_id_l');
let resumenav = document.getElementById('resume_nav_id');
let resumenavl = document.getElementById('resume_nav_id_l');
let servicesnav = document.getElementById('services_nav_id');
let servicesnavl = document.getElementById('services_nav_id_l');
let skillsnav = document.getElementById('skills_nav_id');
let skillsnavl = document.getElementById('skills_nav_id_l');
let projectsnav = document.getElementById('projects_nav_id');
let projectsnavl = document.getElementById('projects_nav_id_l');
let contactsnav = document.getElementById('contact_nav_id');
let contactsnavl = document.getElementById('contact_nav_id_l');

let main = document.getElementById('main-content1');
let about_page1 = document.querySelector('.about-page');
let resume_page1 = document.querySelector('.resume-page');
let services_page1 = document.querySelector('.services-page');
let skills_page1 = document.querySelector('.skills-page');
let projects_page1 = document.querySelector('.projects-page');
let contacts_page1 = document.querySelector('.contacts-page');

homenav.addEventListener('click' , ()=>{
    main.style.display = 'initial';
    about_page1.style.display = 'none';
    resume_page1.style.display = 'none';
    services_page1.style.display = 'none';
    skills_page1.style.display = 'none';
    projects_page1.style.display = 'none';
    contacts_page1.style.display = 'none';
} )
homenavl.addEventListener('click' , ()=>{
    main.style.display = 'initial';
    about_page1.style.display = 'none';
    resume_page1.style.display = 'none';
    services_page1.style.display = 'none';
    skills_page1.style.display = 'none';
    projects_page1.style.display = 'none';
    contacts_page1.style.display = 'none';

} )

aboutnav.addEventListener('click' , ()=>{
    main.style.display = 'none';
    about_page1.style.display = 'initial';
    resume_page1.style.display = 'none';
    services_page1.style.display = 'none';
    skills_page1.style.display = 'none';
    projects_page1.style.display = 'none';
    contacts_page1.style.display = 'none';

} )
aboutnavl.addEventListener('click' , ()=>{
    main.style.display = 'none';
    about_page1.style.display = 'initial';
    resume_page1.style.display = 'none';
    services_page1.style.display = 'none';
    skills_page1.style.display = 'none';
    projects_page1.style.display = 'none';
    contacts_page1.style.display = 'none';

} )

resumenav.addEventListener('click' , ()=>{
    main.style.display = 'none';
    about_page1.style.display = 'none';
    resume_page1.style.display = 'initial';
    services_page1.style.display = 'none';
    skills_page1.style.display = 'none';
    projects_page1.style.display = 'none';
    contacts_page1.style.display = 'none';

} )
resumenavl.addEventListener('click' , ()=>{
    main.style.display = 'none';
    about_page1.style.display = 'none';
    resume_page1.style.display = 'initial';
    services_page1.style.display = 'none';
    skills_page1.style.display = 'none';
    projects_page1.style.display = 'none';
    contacts_page1.style.display = 'none';

} )


servicesnav.addEventListener('click' , ()=>{
    main.style.display = 'none';
    about_page1.style.display = 'none';
    resume_page1.style.display = 'none';
    services_page1.style.display = 'initial';
    skills_page1.style.display = 'none';
    projects_page1.style.display = 'none';
    contacts_page1.style.display = 'none';

} )
servicesnavl.addEventListener('click' , ()=>{
    main.style.display = 'none';
    resume_page1.style.display = 'none';
    about_page1.style.display = 'none';
    services_page1.style.display = 'initial';
    skills_page1.style.display = 'none';
    projects_page1.style.display = 'none';
    contacts_page1.style.display = 'none';

} )


skillsnav.addEventListener('click' , ()=>{
    main.style.display = 'none';
    resume_page1.style.display = 'none';
    about_page1.style.display = 'none';
    services_page1.style.display = 'none';
    skills_page1.style.display = 'initial';
    projects_page1.style.display = 'none';
    contacts_page1.style.display = 'none';

} )
skillsnavl.addEventListener('click' , ()=>{
    main.style.display = 'none';
    resume_page1.style.display = 'none';
    about_page1.style.display = 'none';
    services_page1.style.display = 'none';
    skills_page1.style.display = 'initial';
    projects_page1.style.display = 'none';
    contacts_page1.style.display = 'none';

} )



projectsnav.addEventListener('click' , ()=>{
    main.style.display = 'none';
    resume_page1.style.display = 'none';
    about_page1.style.display = 'none';
    services_page1.style.display = 'none';
    skills_page1.style.display = 'none';
    projects_page1.style.display = 'initial';
    contacts_page1.style.display = 'none';

} )
projectsnavl.addEventListener('click' , ()=>{
    main.style.display = 'none';
    resume_page1.style.display = 'none';
    about_page1.style.display = 'none';
    services_page1.style.display = 'none';
    skills_page1.style.display = 'none';
    projects_page1.style.display = 'initial';
    contacts_page1.style.display = 'none';

} )



contactsnav.addEventListener('click' , ()=>{
    main.style.display = 'none';
    resume_page1.style.display = 'none';
    about_page1.style.display = 'none';
    services_page1.style.display = 'none';
    skills_page1.style.display = 'none';
    projects_page1.style.display = 'none';
    contacts_page1.style.display = 'initial';

} )
contactsnavl.addEventListener('click' , ()=>{
    main.style.display = 'none';
    resume_page1.style.display = 'none';
    about_page1.style.display = 'none';
    services_page1.style.display = 'none';
    skills_page1.style.display = 'none';
    projects_page1.style.display = 'none';
    contacts_page1.style.display = 'initial';

} )