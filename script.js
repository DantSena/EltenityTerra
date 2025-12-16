/* ===== SLIDER SCRIPT ===== */

// WAJIB dideklarasikan DI ATAS
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}


function toggleMenu() {
    const menu = document.getElementById("contactMenu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  }
  
  const floatingBtn = document.querySelector(".floating");
  
  floatingBtn.addEventListener("click", () => {
      floatingBtn.classList.add("animate");
  
      setTimeout(() => {
          floatingBtn.classList.remove("animate");
      }, 250); // sesuai durasi animasi pop
  });
  
  
  function toggleMenu() {
    const menu = document.getElementById("contactMenu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  }


  
function openPopup() {
  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}


  