document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario por defecto

    // Obtener los valores del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Mostrar mensaje de confirmación
    const resultMessageDiv = document.getElementById('resultMessage');
    resultMessageDiv.textContent = `Gracias por tu mensaje, ${name}. Nos pondremos en contacto contigo en ${email} o ${phone}. Tu mensaje: "${message}" ha sido recibido.`;
});