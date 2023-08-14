// Select all elements with the class "accordion__question"
const btns = document.querySelectorAll(".accordion__question");

// Loop through each "accordion__question" element
btns.forEach(function (btnItem) {
  // Add a click event listener to each "accordion__question"
  btnItem.addEventListener("click", function () {
    // Toggle the "open" class on the clicked "accordion__question"
    btnItem.classList.toggle("open");

    // Toggle the "open" class on the next element (accordion content)
    btnItem.nextElementSibling.classList.toggle("open");
  });
});
