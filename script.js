// Ensure the script runs after the site loads
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
    document.getElementById("getQuote").addEventListener("click", function () {
        document.getElementById("contactForm").style.display = "block";
    });

    document.getElementById("contactButton").addEventListener("click", function () {
        document.getElementById("contactForm").style.display = "block";
    });

    // 4️⃣ Close Contact Form
    document.getElementById("closeForm").addEventListener("click", function () {
        document.getElementById("contactForm").style.display = "none";
    });

    // 5️⃣ Simulate Form Submission (Replace with real backend later)
    document.getElementById("submitContact").addEventListener("click", function () {
        alert("Your message has been sent! We'll get back to you soon.");
        document.getElementById("contactForm").style.display = "none";
    });

});
