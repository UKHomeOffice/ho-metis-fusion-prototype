// show/hide my tasks context meny when clicking on the menu button
$("#my-tasks-more-menu-button").click((event) => {
  event.stopPropagation();
  $("#my-tasks-more-menu").toggleClass("more-menu-hidden");
});

// show/hide track my requests context meny when clicking on the menu button
$("#track-my-requests-more-menu-button").click((event) => {
  event.stopPropagation();
  $("#track-my-requests-more-menu").toggleClass("more-menu-hidden");
});

// show/hide annual leave context meny when clicking on the menu button
$("#annual-leave-more-menu-button").click((event) => {
    event.stopPropagation();
    $("#annual-leave-more-menu").toggleClass("more-menu-hidden");
  });

// show/hide pay context meny when clicking on the menu button
$("#pay-more-menu-button").click((event) => {
    event.stopPropagation();
    $("#pay-more-menu").toggleClass("more-menu-hidden");
  });




// hide the context menu when clicking out of it or on an option within
$(document.documentElement).click(() => {
  // my tasks
  if (!$("#my-tasks-more-menu").hasClass("more-menu-hidden")) {
    $("#my-tasks-more-menu").addClass("more-menu-hidden");
  }

  //track my requests
  if (!$("#track-my-requests-more-menu").hasClass("more-menu-hidden")) {
    $("#track-my-requests-more-menu").addClass("more-menu-hidden");
  }

// annual leave
    if (!$("#annual-leave-more-menu").hasClass("more-menu-hidden")) {
        $("#annual-leave-more-menu").addClass("more-menu-hidden");
}

// pay
if (!$("#pay-more-menu").hasClass("more-menu-hidden")) {
    $("#pay-more-menu").addClass("more-menu-hidden");
}

})
