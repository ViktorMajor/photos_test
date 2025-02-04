document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const links = document.querySelectorAll(".nav-links a");

  // Menü megnyitás/zárás
  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });

  // A linkek kattintásra bezárják a menüt (mobilon)
  links.forEach((link) => {
    link.addEventListener("click", function () {
      if (window.innerWidth <= 768) {
        navLinks.classList.remove("active");
      }
    });
  });

  
 links.forEach((link) => {
   link.addEventListener("click", function (e) {
     e.preventDefault(); // Megakadályozza az alapértelmezett ugrást
     const targetId = this.getAttribute("href");
     const targetSection = document.querySelector(targetId);
     if (targetSection) {
       targetSection.scrollIntoView({ behavior: "smooth" });
     }
   });
 });



});

  document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".gallery-item img");
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("modal-image");
    const closeBtn = document.querySelector(".close");

    images.forEach((img) => {
      img.addEventListener("click", function () {
        modal.style.display = "flex";
        modalImg.src = this.src;
      });
    });

    closeBtn.addEventListener("click", function () {
      modal.style.display = "none";
    });

    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  });