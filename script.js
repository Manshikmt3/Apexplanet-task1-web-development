// SEARCH BUTTON FUNCTIONALITY
document.querySelector(".btn").addEventListener("click", function (e) {
    e.preventDefault();
    const input = document.querySelector(".srch").value.trim();
    if (input !== "") {
        alert(`You searched for: "${input}"`);
    } else {
        alert("Please enter a fruit or item to search!");
    }
});

// JOIN US BUTTON FUNCTIONALITY
document.querySelector(".cn").addEventListener("click", function (e) {
    e.preventDefault();
    alert("Thank you for joining KD Fruit House! 🍊 We'll connect with you soon.");
});

// LOGIN FORM VALIDATION
const loginBtn = document.querySelector(".btnn");
if (loginBtn) {
    loginBtn.addEventListener("click", function (e) {
        e.preventDefault();
        const inputs = document.querySelectorAll(".form input");
        let emptyFound = false;

        inputs.forEach(input => {
            if (input.value.trim() === "") {
                emptyFound = true;
            }
        });

        if (emptyFound) {
            alert("⚠️ Please fill in all the fields.");
        } else {
            alert("✅ Login successful! Welcome to KD Fruit House.");
        }
    });
}

// SOCIAL ICON CLICKS (OPTIONAL)
const icons = document.querySelectorAll(".icons a");
icons.forEach(icon => {
    icon.addEventListener("click", function (e) {
        e.preventDefault();
        const platform = this.querySelector("ion-icon").getAttribute("name").split("-")[1];
        alert(`Redirecting to our ${platform.toUpperCase()} page...`);
    });
});
