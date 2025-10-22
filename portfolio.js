

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");
       
   const observer = new IntersectionObserver(
     (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => {
           link.classList.remove("active");
            if (link.getAttribute("href") === "#" + entry.target.id) {
             link.classList.add("active");
             }
          });
        }  
       });
       },
          { threshold: 0.6 } 
     );
 sections.forEach(section => observer.observe(section));


//    contact section


emailjs.init("igqKnCJ_XetGDlFY6"); 

const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", function(event) {
  event.preventDefault(); 

  const params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_jdkrn4s";
  const templateID = "template_sbzol5f";

  emailjs.send(serviceID, templateID, params)
    .then((res) => {
      console.log("SUCCESS!", res);
      alert("Your message was sent successfully!");
      contactForm.reset();
    })
    .catch((err) => {
      console.log("FAILED...", err);
      alert("Failed to send message. Please check console for errors.");
    });
});