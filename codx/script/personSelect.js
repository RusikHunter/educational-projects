document.querySelectorAll('input[type="radio"][name="namePeople"]').forEach(radio => {
    radio.addEventListener('change', () => console.log(radio.value));
});