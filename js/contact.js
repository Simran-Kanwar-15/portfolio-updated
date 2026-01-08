(function(){
  emailjs.init("YOUR_USER_ID"); // replace with your EmailJS User ID
})();

const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", function(e){
  e.preventDefault(); // prevent default form submit

  emailjs.sendForm("YOUR_SERVICE_ID","YOUR_TEMPLATE_ID", this)
    .then((response) => {
      console.log("SUCCESS!", response.status, response.text);
      alert("Message sent successfully!");
      this.reset();
    })
    .catch((error) => {
      console.error("FAILED...", error);
      alert("Failed to send message: " + (error.text || JSON.stringify(error)));
    });
});