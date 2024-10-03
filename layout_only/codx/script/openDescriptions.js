document.querySelectorAll('input[type="checkbox"][name="FAQdescription"]').forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        let description = document.querySelector("." + checkbox.id);

        if (checkbox.checked === true) {
            description.style.display = "block";
        }
        else {
            description.style.display = "none";
        }
    });
});