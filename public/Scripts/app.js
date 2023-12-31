/* 
FileName: app.css
Name: Dikshant khadka
StudentNumber: 301272935
Date: June 20 2023.
*/

//IIFE -- Immediately Invoked Function Expression
(function () {
    function Start() {
        console.log("App Started...");

        let deleteButtons = document.querySelectorAll('.btn-danger');

        for (button of deleteButtons) {
            button.addEventListener('click', (event) => {
                if (!confirm("Are you sure?")) {
                    event.preventDefault();
                    window.location.assign('/book-list');
                }
            });
        }
    }

    window.addEventListener("load", Start);
})();