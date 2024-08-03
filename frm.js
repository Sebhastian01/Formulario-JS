const frmEmail = document.getElementById ("contactForm")
frmEmail.addEventListener('submit', sendEmail)

    // Obtener los valores del formulario
    const serviceId = "service_g2wujj3"
    const templateId = "template_8a5y8ne"
    const apiKey = "K5rO6toJlR_kx5MBh"
    
    function sendEmail(event){
        event.preventDefault()
        emailjs.init(serviceId)

        emailjs
        .sendForm(serviceId, templateId, frmEmail, apiKey)
        .then((result) => Swal.fire("Mensaje enviado"))
        .catch((error) =>{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Mensaje NO ha sido posible enviarlo",
                /* footer: '<a href="#">Why do I have this issue?</a>' --este mensaje es si queremos poner un link o rferencias al usuario a un lado donde pueda buscar ayuda para el error*/
        });
    });
    }
