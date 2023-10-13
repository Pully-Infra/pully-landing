function showSnackbar() {
  var x = document.getElementById("snackbar");
  x.className = "show";

  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
}

function copyToClipboard(text) {
  console.log("copied");
  navigator.clipboard.writeText(text);
  showSnackbar();
}
