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

    // 5️⃣ Form Submission Handling
    document.getElementById("submitContact").addEventListener("click", function () {
        let name = document.querySelector("#contactForm input[type='text']").value;
        let email = document.querySelector("#contactForm input[type='email']").value;
        let message = document.querySelector("#contactForm textarea").value;
        
        if (name && email && message) {
            alert("Thanks, " + name + "! Your message has been sent. We'll get back to you soon.");
            document.getElementById("contactForm").style.display = "none";
        } else {
            alert("Please fill out all fields before submitting.");
        }
    });

    // 6️⃣ Animated Scroll Effects (Optional Enhancement)
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });
    
    sections.forEach(section => {
        observer.observe(section);
    });
});
