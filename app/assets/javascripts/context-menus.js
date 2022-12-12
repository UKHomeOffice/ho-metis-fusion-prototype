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

// show/hide team absences context meny when clicking on the menu button
$("#team-absences-more-menu-button").click((event) => {
    event.stopPropagation();
    $("#team-absences-more-menu").toggleClass("more-menu-hidden");
  });

// show/hide team performance rewards context meny when clicking on the menu button
$("#team-performance-rewards-more-menu-button").click((event) => {
    event.stopPropagation();
    $("#team-performance-rewards-more-menu").toggleClass("more-menu-hidden");
  });

// show/hide find someone context meny when clicking on the menu button
$("#find-someone-more-menu-button").click((event) => {
    event.stopPropagation();
    $("#find-someone-more-menu").toggleClass("more-menu-hidden");
  });

// show/hide get help context meny when clicking on the menu button
$("#get-help-more-menu-button").click((event) => {
    event.stopPropagation();
    $("#get-help-more-menu").toggleClass("more-menu-hidden");
  });

// show/hide guidance context meny when clicking on the menu button
$("#guidance-more-menu-button").click((event) => {
    event.stopPropagation();
    $("#guidance-more-menu").toggleClass("more-menu-hidden");
  });

// show/hide metis alerts context meny when clicking on the menu button
$("#metis-alerts-more-menu-button").click((event) => {
    event.stopPropagation();
    $("#metis-alerts-more-menu").toggleClass("more-menu-hidden");
  });

// show/hide expenses context meny when clicking on the menu button
$("#expenses-more-menu-button").click((event) => {
    event.stopPropagation();
    $("#expenses-more-menu").toggleClass("more-menu-hidden");
  });

// show/hide learning context meny when clicking on the menu button
$("#learning-more-menu-button").click((event) => {
    event.stopPropagation();
    $("#learning-more-menu").toggleClass("more-menu-hidden");
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

// team absences
if (!$("#team-absences-more-menu").hasClass("more-menu-hidden")) {
    $("#team-absences-more-menu").addClass("more-menu-hidden");
}

// team performance rewards
if (!$("#team-performance-rewards-more-menu").hasClass("more-menu-hidden")) {
    $("#team-performance-rewards-more-menu").addClass("more-menu-hidden");
}

// find someone
if (!$("#find-someone-more-menu").hasClass("more-menu-hidden")) {
    $("#find-someone-more-menu").addClass("more-menu-hidden");
}

// get help
if (!$("#get-help-more-menu").hasClass("more-menu-hidden")) {
    $("#get-help-more-menu").addClass("more-menu-hidden");
}

// guidance
if (!$("#guidance-more-menu").hasClass("more-menu-hidden")) {
    $("#guidance-more-menu").addClass("more-menu-hidden");
}

// metis alerts
if (!$("#metis-alerts-more-menu").hasClass("more-menu-hidden")) {
    $("#metis-alerts-more-menu").addClass("more-menu-hidden");
}

// expenses
if (!$("#expenses-more-menu").hasClass("more-menu-hidden")) {
    $("#expenses-more-menu").addClass("more-menu-hidden");
}

// learning
if (!$("#learning-more-menu").hasClass("more-menu-hidden")) {
    $("#learning-more-menu").addClass("more-menu-hidden");
}

})
