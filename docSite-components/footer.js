const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `

<p>Made with ♥️ by Krishnakant Singh</p>
        <ul class="footer-links">

            <li class="social-link-list-items"><a href="mailto: singhkrishnakant3@gmail.com"><i
                        class='fas fa-envelope'></i></a>
            </li>

            <li class="social-link-list-items "><a href="https://github.com/krishnakant01" target="_blank"><i
                        class='fab fa-github'></i></a></li>

            <li class="social-link-list-items"><a href="https://twitter.com/krishnakant_01" target="_blank"><i
                        class='fab fa-twitter'></i></a></li>

            <li class="social-link-list-items"><a href="https://www.linkedin.com/in/krishnakant-singh-333450193/"
                    target="_blank"><i class='fab fa-linkedin-in'></i></a></li>
        </ul>
        <p class="footer-copyright">&copy; All Rights Reserved.</p>
`;

document.querySelector("#footer").appendChild(footerTemplate.content);