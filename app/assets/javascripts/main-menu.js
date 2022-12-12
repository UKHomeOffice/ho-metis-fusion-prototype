// Open/Close the main-menu
$("#metis-header__main-menu").click((event) => {
  event.stopPropagation();
  $("#metis-main-menu__overlay").toggleClass("metis-main-menu--hidden");
  $("#metis-main-menu__container").toggleClass("metis-main-menu__container--hidden");
});

// Close overlay when clicking outside the menu
$("#metis-main-menu__overlay").click(() => {
  $("#metis-main-menu__overlay").addClass("metis-main-menu--hidden");
  $("#metis-main-menu__container").addClass("metis-main-menu__container--hidden");
});

$("#metis-main-menu__close-button").click(() => {
  $("#metis-main-menu__overlay").addClass("metis-main-menu--hidden");
  $("#metis-main-menu__container").addClass("metis-main-menu__container--hidden");
});