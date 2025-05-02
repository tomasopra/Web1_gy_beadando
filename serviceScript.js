function showForm() {
    document.getElementById('modalOverlay').style.display = 'block';
    document.getElementById('contactFormModal').style.display = 'block';
    clearErrors();
}

function closeForm() {
    document.getElementById('modalOverlay').style.display = 'none';
    document.getElementById('contactFormModal').style.display = 'none';
    clearErrors();
    document.getElementById("contactForm").reset();
}

function clearErrors() {
    const errorFields = ["nameError", "addressError", "emailError", "phoneError", "dateError"];
    errorFields.forEach(id => {
        document.getElementById(id).textContent = "";
    });
}

function validateForm(event) {
    

    let valid = true;
    clearErrors();

    const name = document.getElementById("name").value.trim();
    const address = document.getElementById("address").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const date = document.getElementById("date").value.trim();

    if (name.length < 10) {
        document.getElementById("nameError").textContent = "A név legalább 10 karakter legyen.";
        valid = false;
    }

    if (address.length < 10) {
        document.getElementById("addressError").textContent = "A lakcím legalább 10 karakter legyen.";
        valid = false;
    }

    if (email.length < 10 || !email.includes("@") || !email.includes(".")) {
        document.getElementById("emailError").textContent = "Hibás email cím (min. 10 karakter, @ és . szükséges).";
        valid = false;
    }

    if (/\D/.test(phone) || phone.length < 1) {
        document.getElementById("phoneError").textContent = "A telefonszám csak számokat tartalmazhat.";
        valid = false;
    }

    if (!date) {
        document.getElementById("dateError").textContent = "Kérlek, válassz dátumot.";
        valid = false;
    }    

    if (!valid) {
        return false;
    }

    alert("Sikeres elküldés! Időpontja feldolgozásra kerül rendszerünkben.");
    closeForm();
    return false;
}
