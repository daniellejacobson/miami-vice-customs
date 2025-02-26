document.addEventListener("DOMContentLoaded", function () {
    
    // 1️⃣ Auto-update footer year
    document.getElementById("footerYear").textContent = new Date().getFullYear();

    // 2️⃣ Smooth scrolling for navigation links
    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
        });
    });

    // 3️⃣ Open Contact Form on CTA button click
    document.querySelectorAll("#getQuote, #contactButton").forEach(button => {
        button.addEventListener("click", function () {
            document.getElementById("contactForm").style.display = "flex";
        });
    });

    // 4️⃣ Close Contact Form
    document.getElementById("closeForm").addEventListener("click", function () {
        document.getElementById("contactForm").style.display = "none";
    });

    // 5️⃣ Form Submission Handling via Formspree
    document.getElementById("contactForm").addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent default form submission
        
        let formData = new FormData(this);
        fetch("https://formspree.io/f/xkgolekw", {
            method: "POST",
            body: formData,
            headers: { "Accept": "application/json" }
        }).then(response => {
            if (response.ok) {
                alert("Thanks! Your message has been sent.");
                document.getElementById("contactForm").reset();
                document.getElementById("contactForm").style.display = "none";
            } else {
                alert("Oops! Something went wrong. Please try again.");
            }
        }).catch(error => {
            alert("Error: " + error.message);
        });
    });
});
