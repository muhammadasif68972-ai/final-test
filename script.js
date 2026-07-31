// Get Elements
const profileForm = document.getElementById("profileForm");
const fullName = document.getElementById("fullName");
const role = document.getElementById("role");
const skill = document.getElementById("skill");

const cardSection = document.getElementById("cardSection");
const cardName = document.getElementById("cardName");
const cardRole = document.getElementById("cardRole");
const cardSkill = document.getElementById("cardSkill");

const downloadBtn = document.getElementById("downloadBtn");

// Generate Card
profileForm.addEventListener("submit", function(e) {

    // Prevent page reload
    e.preventDefault();

    // Get input values
    const nameValue = fullName.value;
    const roleValue = role.value;
    const skillValue = skill.value;

    // Update card
    cardName.textContent = nameValue;
    cardRole.textContent = roleValue;
    cardSkill.textContent = "#" + skillValue;

    // Show profile card
    cardSection.classList.remove("hidden");
});

// Download PDF
downloadBtn.addEventListener("click", function() {
    window.print();
});
