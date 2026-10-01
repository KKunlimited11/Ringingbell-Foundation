
  const menuBtn = document.getElementById("menuBtn");
  const nav = document.querySelector("nav");

  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("show");

    if (nav.classList.contains("show")) {
      menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
      menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
  });




  const contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", function (e) {

    e.preventDefault()

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;


    const phoneNumber = "2349019498465";


    const whatsappMessage =
      `Hello Ringingbell International School Foundation,

Name: ${name}

Email: ${email}

Message:
${message}`;


    const whatsappURL =
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;


    window.open(whatsappURL, "_blank");

  });
