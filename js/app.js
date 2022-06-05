// NavSlide function to translate navbar when burgerAnimation is toggled
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".mobile-menu");
  const closeBtn = document.querySelector(".close-btn");

  burger.addEventListener("click", () => {
    burger.classList.toggle("change");
    nav.classList.toggle("active");
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  });

  closeBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
    burger.classList.toggle("change");
    document.body.style.backgroundColor = "hsl(0, 0%, 98%)";
  });
};

navSlide();
