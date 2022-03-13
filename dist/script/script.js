const $mobileMenu = document.querySelector(".header__nav__mobile");

//Speaker component switch
document.querySelector(".speaker_all").addEventListener("click", (e) => {
  if (e.target.closest(".speaker") == null) {
    return;
  } else if (
    e.target.closest(".speaker").classList.contains("speaker-active") ||
    document.querySelector(".speaker-active") == null
  ) {
    e.target.closest(".speaker").classList.toggle("speaker-active");
  } else {
    document
      .querySelector(".speaker-active")
      .classList.remove("speaker-active");
    e.target.closest(".speaker").classList.add("speaker-active");
  }
});

//Burger menu
$mobileMenu.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target.classList.contains("nav_mobile_burger")) {
    console.log($mobileMenu);
    e.target.classList.add("hidden");
    $mobileMenu.querySelector(".nav_mobile_close").classList.remove("hidden");
    document
      .querySelector(".header__nav__list")
      .classList.add("mobile_view_on");
    document.body.classList.add("triche");
  } else if (e.target.classList.contains("nav_mobile_close")) {
    e.target.classList.add("hidden");
    $mobileMenu.querySelector(".nav_mobile_burger").classList.remove("hidden");
    document
      .querySelector(".header__nav__list")
      .classList.remove("mobile_view_on");
    document.body.classList.remove("triche");
  }
});
