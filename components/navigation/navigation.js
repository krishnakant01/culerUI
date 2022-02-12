const navigationTemplate = document.createElement('template');

navigationTemplate.innerHTML = `

<p class="component-header">Navigation</p>
<p class="header-description">Navigation bar is used to navigate through the web apps or websites. This
    navigation component is responsive. It is a hamburger menu in medium and small devices.</p>

<p>In Culer <span class="bold-font blue-text">U</span><span class="bold-font red-text">I</span>,
    we have 2 types of Navigation Bars available:
</p>
<p>1. Navigation Bar for Documentation websites.</p>
<p>2. Navigation Bar for E-commerce.</p>

<p class="sub-header">Example of Navigation Bar for Documentation websites</p>

<p>Structure your nav bar and use the classes according to the code snippet below.</p>

<div class="bar-container">

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
</div>

<p>Use class name = <span class="bold-font blue-text">nav-container-bg-color</span>
    for a different background color on your nav bar.</p>

<div class="bar-container">

    <header>
        <nav class="nav-container nav-container-bg-color">

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
</div>

<p>Use class name = <span class="bold-font blue-text">nav-container-bg-gradient</span>
    for a different background color on your nav bar.</p>

<div class="bar-container">

    <header>
        <nav class="nav-container nav-container-bg-gradient">

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
</div>

<p class="sub-header">Example of Navigation Bar for E-commerce websites</p>

<p>Structure your nav bar and use the classes according to the code snippet below.</p>

<div class="bar-container">

    <header>

        <nav class="navigation-container">

            <div class="nav-logo">
                <a href="/">
                    <div class="nav-title">
                        <span class="bold-font blue-text">Culer</span><span
                            class="bold-font red-text">Store</span>
                    </div>
                    <div class="nav-tagline">Més que un Club</div>
                </a>
            </div>
            <div class="nav-links">

                <ul class="nav-link-list">

                    <li class="nav-link-list-item">
                        <a class="link" href="#">Home</a></li>

                    <li class="nav-link-list-item">
                        <a class="link " href="#">Boots</a></li>

                    <li class="nav-link-list-item">
                        <a class="link" href="#">Football Kits</a></li>

                </ul>

            </div>

            <div class="nav-social-links">

                <ul class="nav-link-list">

                   <li class="social-link-list-items"> <a href="#">
                        <span class="material-icons">favorite</span>
                    </a> </li>

                   <li class="social-link-list-items"> <a href="#" class="cart">
                        <span class="material-icons">shopping_cart</span>
                    </a> </li>

                   <li class="social-link-list-items"> <a href="#" class="my-account">
                        <span class="material-icons">person</span>
                    </a> </li>

                </ul>

            </div>

        </nav>

    </header>

</div>

<p>Structure your nav bar and use the classes according to the code snippet below.</p>

<div class="bar-container">

    <header>

        <nav class="navigation-container navigation-container-bg-gradient">

            <div class="nav-logo">
                <a href="/">
                    <div class="nav-title">
                        <span class="bold-font">CulerStore</span>
                            
                    </div>
                    <div class="nav-tagline">Més que un Club</div>
                </a>
            </div>
            <div class="nav-links">

                <ul class="nav-link-list">

                    <li class="nav-link-list-item">
                        <a class="link" href="#">Home</a></li>

                    <li class="nav-link-list-item">
                        <a class="link " href="#">Boots</a></li>

                    <li class="nav-link-list-item">
                        <a class="link" href="#">Football Kits</a></li>

                </ul>

            </div>

            <div class="nav-social-links">

                <ul class="nav-link-list">

                   <li class="social-link-list-items"> <a href="#">
                        <span class="material-icons">favorite</span>
                    </a> </li>

                   <li class="social-link-list-items"> <a href="#" class="cart">
                        <span class="material-icons">shopping_cart</span>
                    </a> </li>

                   <li class="social-link-list-items"> <a href="#" class="my-account">
                        <span class="material-icons">person</span>
                    </a> </li>

                </ul>

            </div>

        </nav>

    </header>
    
</div>

`;

document.querySelector("#Navigation").appendChild(navigationTemplate.content);