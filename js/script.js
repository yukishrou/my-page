document.addEventListener('DOMContentLoaded', function () {
    var allSections = document.querySelectorAll('section');


    // Iterate through each section and add the 'visible' class
    allSections.forEach(function (section) {
        section.classList.add('visible');
    });

    // Add the 'visible' class to the footer element
    footer.classList.add('visible');
});
