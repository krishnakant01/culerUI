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

<div class="code-snippet-display">
        <code>
            <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=one-light&wt=none&l=htmlmixed&width=650&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=143%25&si=false&es=2x&wm=false&code=%253Cheader%253E%250A%2520%2520%253Cnav%2520class%253D%2522nav-container%2522%253E%250A%2520%2520%2520%2520%253Cdiv%250A%2520%2520%2520%2520%2520%2520class%253D%2522mobile-nav-toggle%2522%250A%2520%2520%2520%2520%2520%2520aria-controls%253D%2522nav-link-list%2522%250A%2520%2520%2520%2520%2520%2520aria-expanded%253D%2522false%2522%250A%2520%2520%2520%2520%253E%250A%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522sr-only%2522%253EMenu%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522line1%2522%253E%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522line2%2522%253E%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522line3%2522%253E%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522nav-logo%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Ca%2520href%253D%2522%252F%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522nav-title%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Culer%2520%253Cspan%2520class%253D%2522bold-font%2520blue-text%2522%253EU%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522bold-font%2520red-text%2522%253EI%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522nav-tagline%2522%253EM%25C3%25A9s%2520que%2520un%2520Club%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522nav-links%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Cul%2520class%253D%2522nav-link-list%2522%2520id%253D%2522nav-link-list%2522%2520data-visible%253D%2522false%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520href%253D%2522%252F%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520class%253D%2522nav-link-list-item%2522%253EHome%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520href%253D%2522%252Fdocs.html%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520class%253D%2522nav-link-list-item%2522%253EDocumentation%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Ful%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522nav-social-links%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Cul%2520class%253D%2522%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520class%253D%2522social-link-list-items%2520%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520href%253D%2522https%253A%252F%252Fgithub.com%252Fkrishnakant01%2522%2520target%253D%2522_blank%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ci%2520class%253D%2522fab%2520fa-github%2522%253E%253C%252Fi%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fli%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520class%253D%2522social-link-list-items%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520href%253D%2522https%253A%252F%252Ftwitter.com%252Fkrishnakant_01%2522%2520target%253D%2522_blank%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ci%2520class%253D%2522fab%2520fa-twitter%2522%253E%253C%252Fi%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fli%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520class%253D%2522social-link-list-items%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520href%253D%2522https%253A%252F%252Fwww.linkedin.com%252Fin%252Fkrishnakant-singh-333450193%252F%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520target%253D%2522_blank%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ci%2520class%253D%2522fab%2520fa-linkedin-in%2522%253E%253C%252Fi%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Ful%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%253C%252Fnav%253E%250A%253C%252Fheader%253E%250A"
                style="border:0; transform: scale(1); overflow:hidden;"
                sandbox="allow-scripts allow-same-origin">
            </iframe>
        </code>
</div>


<p>Use class name = <span class="bold-font blue-text">nav-container-bg-color</span>
    in the nav element for a different background color on your nav bar.</p>

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
in the nav element for a different background color on your nav bar.</p>

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

<div class="code-snippet-display">
        <code>
            <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=one-light&wt=none&l=htmlmixed&width=650&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=143%25&si=false&es=2x&wm=false&code=%253Cheader%253E%250A%2520%2520%253Cnav%2520class%253D%2522navigation-container%2522%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522nav-logo%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Ca%2520href%253D%2522%252F%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522nav-title%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522bold-font%2520blue-text%2522%253ECuler%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522bold-font%2520red-text%2522%253EStore%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522nav-tagline%2522%253EM%25C3%25A9s%2520que%2520un%2520Club%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522nav-links%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Cul%2520class%253D%2522nav-link-list%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520class%253D%2522nav-link-list-item%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520class%253D%2522link%2522%2520href%253D%2522%2523%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Home%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fli%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520class%253D%2522nav-link-list-item%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520class%253D%2522link%2520%2522%2520href%253D%2522%2523%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Boots%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fli%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520class%253D%2522nav-link-list-item%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520class%253D%2522link%2522%2520href%253D%2522%2523%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Football%2520Kits%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Ful%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522nav-social-links%2522%253E%250A%2520%2520%2520%2520%2520%2520%253Cul%2520class%253D%2522nav-link-list%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520class%253D%2522social-link-list-items%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257B%27%2520%27%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520href%253D%2522%2523%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522material-icons%2522%253Efavorite%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%257B%27%2520%27%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fli%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520class%253D%2522social-link-list-items%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257B%27%2520%27%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520href%253D%2522%2523%2522%2520class%253D%2522cart%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522material-icons%2522%253Eshopping_cart%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%257B%27%2520%27%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fli%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520class%253D%2522social-link-list-items%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%257B%27%2520%27%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520href%253D%2522%2523%2522%2520class%253D%2522my-account%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522material-icons%2522%253Eperson%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%257B%27%2520%27%257D%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Ful%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%253C%252Fnav%253E%250A%253C%252Fheader%253E%250A"
                style="border:0; transform: scale(1); overflow:hidden;"
                sandbox="allow-scripts allow-same-origin">
            </iframe>
        </code>
</div>

<p>Use class name = <span class="bold-font blue-text">nav-container-bg-gradient</span>
in the nav element for a different background color on your nav bar.</p>

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