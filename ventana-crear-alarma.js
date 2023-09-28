console.log("Script cargado correctamente");

const dayButtons = document.querySelectorAll('.day-button');

dayButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log("Botón de día clickeado");
        const isSelected = button.getAttribute('data-selected') === 'true';
        button.setAttribute('data-selected', !isSelected);
        button.classList.toggle('btn-primary', !isSelected);
        button.classList.toggle('btn-secondary', isSelected);
    });
});


