const badgesTemplate = document.createElement('template');

badgesTemplate.innerHTML = `

<p class="component-header">Badges</p>
                <p class="header-description">Badges are used to display notification counts or status information of
                    the user.</p>
                <p>In Culer <span class="nav-U-I blue-text">U</span><span class="nav-U-I red-text">I</span>,
                    we have 2 types of Badges available:
                </p>
                <p>1. Status Badge.</p>
                <p>2. Text Badge.</p>


                <p class="sub-header">Example of Status Badge</p>

                <p>Status Badges are used to display status information of the user.</p>
                <p>Use class name = <span class="nav-U-I blue-text">status-badge</span>
                    for a status-badge and add class name = <span class="nav-U-I red-text">status-online, status-offline, status-away, status-text </span>for its type.
                </p>

                <div class="avatar-container badge">

                    <div class="badge-container">
                        <div class="avatar lg-size">
                            <img src="images/avatar.png" class="img-round img-responsive" alt="avatar">
                        </div>
                        <span class="status-badge status-online"></span>
                    </div>

                    <div class="badge-container">
                        <div class="avatar m-size">
                            <img src="images/avatar.png" class="img-round img-responsive" alt="avatar">
                        </div>
                        <span class="status-badge status-offline"></span>
                    </div>

                    <div class="badge-container">
                        <div class="avatar s-size">
                            <img src="images/avatar.png" class="img-round img-responsive" alt="avatar">
                        </div>
                        <span class="status-badge status-away"></span>
                    </div>

                    <div class="badge-container">
                        <span class="btn">
                            <i class="fas fa-shopping-cart"></i>
                        </span>
                        <span class="status-badge status-text">2</span>
                    </div>
                </div>

                <p class="sub-header">Example of Text Badges</p>

                <p>We have 2 types of text badges: badge with rounded edges and square edges. The font-size of badge is in em so that it will adjust to the parent's font-size automatically.</p>
                <p>Use class name = <span class="nav-U-I blue-text">text-badge</span>
                    for a text badge and add class name = <span class="nav-U-I red-text">badge-primary, badge-secondary, rounded-pill-badge </span>for its type.
                </p>

                <div class="avatar-container text-badge-container">

                    <h2 class="badge-container">
                       Example of Heading with Primary Badge <span class="text-badge badge-primary">New</span>
                    </h2>

                    <h3 class="badge-container">
                       Example of Heading with Secondary Badge <span class="text-badge badge-secondary">New</span>
                    </h3>

                    <h4 class="badge-container">
                        Example of Heading with Primary Rounded Badge <span class="text-badge badge-primary rounded-pill-badge">New</span>
                    </h4>

                    <h5 class="badge-container">
                        Example of Heading with Secondary Rounded Badge <span class="text-badge badge-secondary rounded-pill-badge">New</span>
                    </h5>
                    <h6 class="badge-container">
                        Example of Heading with Primary Badge <span class="text-badge badge-primary">New</span>
                    </h6>

                    <p class="badge-container">
                        Example of Paragraph with Secondary Badge <span class="text-badge badge-secondary">New</span>
                    </p>

                </div>
`;

document.querySelector("#Badge").appendChild(badgesTemplate.content);
