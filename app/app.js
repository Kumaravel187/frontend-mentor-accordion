const btns = document.querySelectorAll(".accordion__question");

btns.forEach(function (btnItem) {
  btnItem.addEventListener("click", function () {
    btnItem.classList.toggle("open");
    btnItem.nextElementSibling.classList.toggle("open");
  });
});
