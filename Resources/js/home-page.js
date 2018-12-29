// Set the width of the side navigation to 250px
function openNav() {
  document.getElementById("mySidenav").style.width = "31%";
}

// Set the width of the side navigation to 0
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// see more section

function expandFunction() {
  var overviewText = document.getElementById("full");
  if (overviewText.style.display === "none") {
    overviewText.style.display = "block";
  }
  else {
    overviewText.style.display = "none";
  }
}
