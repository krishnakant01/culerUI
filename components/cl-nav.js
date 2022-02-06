const navTemplate = document.createElement('template');

navTemplate.innerHTML = `
<header>
    <nav class="nav-container">

            <div class="nav-logo">
                <a href="/">
                    <div class="nav-title">
                        Culer <span class="nav-U-I blue-text">U</span><span class="nav-U-I red-text">I</span>
                    </div>
                    <div class="nav-tagline">Més que un Club</div>
                </a>
            </div>

            <div class="nav-links">

                <ul class="nav-link-list">

                    <a href="/">
                        <li class="nav-link-list-item">Home</li>
                    </a>

                    <a href="/docs.html">
                        <li class="nav-link-list-item">Documentation</li>
                    </a>

                </ul>

            </div>

            <div class="nav-social-links">

                <ul class="nav-link-list">

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