let heartBtns = document.querySelectorAll(".heartBtn");

heartBtns.forEach(btn => {

    btn.addEventListener("click", () => {

        let icon = btn.querySelector("i");

        if (icon.classList.contains("fa-heart")) {

            icon.classList.remove("fa-heart");
            icon.classList.add("fa-face-smile");
            btn.classList.remove("beat");
            btn.style.color = "yellow";

        } else {

            icon.classList.remove("fa-face-smile");
            icon.classList.add("fa-heart");
            btn.classList.add("beat");
            btn.style.color = "red";

        }

    });

});

const para = document.querySelector(".parallax");

window.addEventListener("scroll", () => {
    let scroll = window.scrollY;

    let blur = Math.min(scroll * 0.02, 8);
    let dark = Math.min(scroll * 0.0008, 0.4);

    para.style.setProperty("--blur", blur + "px");
    para.style.setProperty("--dark", dark);
});





//form submmit

(function() {
    emailjs.init("gB_qGc9FXwmoWKpj9");
})();

document.getElementById("contactForm")
    .addEventListener("submit", function(e) {

        e.preventDefault();

        emailjs.sendForm(
            "service_ujv8bfj",
            "template_l320hwo",
            this
        );

        emailjs.sendForm(
            "service_ujv8bfj",
            "template_vl1emam",
            this
        );

        alert("Message Sent Successfully 😎");

        this.reset();

    });
