const navTemplate = document.createElement('template');

navTemplate.innerHTML = `
<header>
    <nav class="nav-container">

        <div class="mobile-nav-toggle" aria-controls="nav-link-list" aria-expanded="false">
            <span class="sr-only">Menu</span>
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
        </div>

        <div class="nav-logo">
            <a href="/">
                <div class="nav-title">
                    Culer <span class="bold-font blue-text">U</span><span class="bold-font red-text">I</span>
                </div>
                <div class="nav-tagline">Més que un Club</div>
            </a>
        </div>

        <div class="nav-links">

            <ul class="nav-link-list" id="nav-link-list" data-visible="false">

                <a href="/">
                    <li class="nav-link-list-item">Home</li>
                </a>

                <a href="/docs.html">
                    <li class="nav-link-list-item">Documentation</li>
                </a>

            </ul>

        </div>

        <div class="nav-social-links">

            <ul class="">

                <li class="social-link-list-items"><a href="mailto: singhkrishnakant3@gmail.com"><i
                            class='fas fa-envelope'></i></a>
                </li>

                <li class="social-link-list-items "><a href="https://github.com/krishnakant01" target="_blank"><i
                            class='fab fa-github'></i></a></li>

                <li class="social-link-list-items"><a href="https://twitter.com/krishnakant_01" target="_blank"><i
                            class='fab fa-twitter'></i></a></li>

                <li class="social-link-list-items"><a
                            href="https://www.linkedin.com/in/krishnakant-singh-333450193/" target="_blank"><i
                                class='fab fa-linkedin-in'></i></a></li>
            </ul>
        </div>
    </nav>
</header>
`;

document.body.appendChild(navTemplate.content);


const navLinks = document.querySelector("#nav-link-list");
const navToggle = document.querySelector(".mobile-nav-toggle");

const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");

navToggle.addEventListener("click", () => {
    const visibility = navLinks.getAttribute("data-visible");

    if (visibility === "false") {

        navLinks.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);


        document.body.style.background = " rgba(0, 0, 0, 0.4)";

        line1.classList.add("translate");
        line2.classList.add("rotate-135deg");
        line3.classList.add("rotate-45deg");
    } else {
        navLinks.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);

        document.body.style.background = "none";

        line1.classList.remove("translate");
        line2.classList.remove("rotate-135deg");
        line3.classList.remove("rotate-45deg");
    }
});

let resizeTimer;
window.addEventListener("resize", () => {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove("resize-animation-stopper");
    }, 400);
});