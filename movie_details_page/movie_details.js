document.addEventListener("DOMContentLoaded", function () {
    let dates = document.querySelectorAll(".date");
    let timeSlots = document.querySelectorAll(".time");

    function handleSelection(elements) {
        elements.forEach(function (element) {
            element.addEventListener("click", function () {
                // Toggle selection: if already selected, remove it; otherwise, select it
                if (this.classList.contains("selected")) {
                    this.classList.remove("selected");
                } else {
                    // Remove 'selected' class from all elements in the same category
                    elements.forEach(item => item.classList.remove("selected"));

                    // Add 'selected' class to the clicked element
                    this.classList.add("selected");
                }
            });
        });
    }

    // Apply selection and unselection logic to both date and time elements
    handleSelection(dates);
    handleSelection(timeSlots);
});


function toggleText() {
    let dots = document.getElementById("dots");
    let moreText = document.getElementById("more");
    let btnText = document.getElementById("toggleBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        moreText.style.display = "none";
        btnText.innerHTML = "See More";
    } else {
        dots.style.display = "none";
        moreText.style.display = "inline";
        btnText.innerHTML = "See Less";
    }
}
