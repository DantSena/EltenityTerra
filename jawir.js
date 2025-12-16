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
