document.addEventListener('DOMContentLoaded', function () {

    function handleWhatsapp() {
    const whatsappBtn = document.getElementById('whatsapp-product-button');

    // Remove the href attribute
    whatsappBtn.removeAttribute('href');

    // Add an onclick event listener
    whatsappBtn.onclick = function () {
        const phoneNumber = "+213"+context.data[0].data.storeByIdPublic.storeProfile.whatsup; // Replace with your WhatsApp number
        const name = document.getElementById('firstname').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const customMessage = document.getElementById('custom_message').value.trim();

        // Validation: Check if name or phone is missing
        if (!name || !phone) {
            alert("يرجى ملء الاسم ورقم الهاتف."); // "Please fill in the name and phone number."
            return;
        }

        // Construct the message with proper line breaks
        const message = encodeURIComponent(
            `Name: ${name}\nPhone: ${phone}\n\nMessage:\n${customMessage}`
        );

        // WhatsApp URL
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

        // Redirect to WhatsApp
        window.location.href = whatsappURL;
    };
}

// Call the function to apply the changes
handleWhatsapp();

});
