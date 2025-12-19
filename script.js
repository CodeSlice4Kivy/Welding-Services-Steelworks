function buildMessage() {
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value;

    return `Hello Welding Services & Steelworks,%0A%0A` +
           `Name: ${name}%0A` +
           `Phone: ${phone}%0A` +
           `Service Required: ${service}%0A` +
           `Details: ${message}`;
}

function sendWhatsApp() {
    const text = buildMessage();
    const whatsappNumber = "27849025017"; // CHANGE TO REAL NUMBER
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");
}

function sendMessenger() {
    const text = buildMessage();
    const pageUsername = "YOUR_FACEBOOK_PAGE"; // Facebook Page username
    window.open(`https://m.me/${pageUsername}?ref=${text}`, "_blank");
}