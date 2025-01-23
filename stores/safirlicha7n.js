document.addEventListener('DOMContentLoaded', function () {
    function handleWhatsapp() {
        const whatsappBtn = document.getElementById('whatsapp-product-button');
        const buyButton = document.getElementById('buyButton'); // Reference to the buyButton

        // Remove the buyButton from the DOM
        if (buyButton) {
            buyButton.remove();
        }

        // Remove the href attribute from the WhatsApp button
        whatsappBtn.removeAttribute('href');

        // Add an onclick event listener
        whatsappBtn.onclick = function () {
            const phoneNumber = "1234567890"; // Replace with your WhatsApp number
            const name = document.getElementById('firstname').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const customMessage = document.getElementById('custom_message')?.value.trim();
            const productName = window.context.data[1].data.productBySlugPublic.name; // Get the product name

            // Validation: Check if name or phone is missing
            if (!name || !phone) {
                alert("يرجى ملء الاسم ورقم الهاتف."); // "Please fill in the name and phone number."
                return;
            }

            // Construct the message with proper line breaks
            const message = encodeURIComponent(
                `Product: ${productName}\nName: ${name}\nPhone: ${phone}\n\nMessage:\n${customMessage || ""}`
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
