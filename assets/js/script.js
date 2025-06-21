function sendMail(event){
    event.preventDefault(); // ✨ Prevent form from submitting
    console.log("Submitting form...");
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value
    }

    
    emailjs.send("service_uua2utc", "template_1zruiai", parms)
        .then(function(response) {
            alert("Email sent successfully!");
            document.getElementById("contact-form").reset();
            console.log("SUCCESS", response);
        }, function(error) {
            alert("FAILED to send email:\n" + JSON.stringify(error));
            console.error("FAILED", error);
        });

        
}