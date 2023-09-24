function skillsMember() {
    var member = document.getElementById("member");
    var skills = document.getElementById("skills");
    var experience = document.getElementById("experience");
    var education = document.getElementById("education");
    var contact = document.getElementById("contact");
    var memberButton = document.getElementById("memberButton");
    var skillsButton = document.getElementById("skillsButton");
    var experienceButton = document.getElementById("experienceButton");
    var educationButton = document.getElementById("educationButton");
    var contactButton = document.getElementById("contactButton");
    member.style.display = "block";
    skills.style.display = "none";
    experience.style.display = "none";
    education.style.display = "none";
    contact.style.display = "none";
    memberButton.style.backgroundColor = "#4CAF50";
    skillsButton.style.backgroundColor = "#333";
    experienceButton.style.backgroundColor = "#333";
    educationButton.style.backgroundColor = "#333";
    contactButton.style.backgroundColor = "#333";
}