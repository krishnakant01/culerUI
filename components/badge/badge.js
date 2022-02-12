const badgesTemplate = document.createElement('template');

badgesTemplate.innerHTML = `

<p class="component-header">Badges</p>
                <p class="header-description">Badges are used to display notification counts or status information of
                    the user.</p>
                <p>In Culer <span class="bold-font blue-text">U</span><span class="bold-font red-text">I</span>,
                    we have 2 types of Badges available:
                </p>
                <p>1. Status Badge.</p>
                <p>2. Text Badge.</p>


                <p class="sub-header">Example of Status Badge</p>

                <p>Status Badges are used to display status information of the user.</p>
                <p>Use class name = <span class="bold-font blue-text">status-badge</span>
                    for a status-badge and add class name = <span class="bold-font red-text">status-online, status-offline, status-away, status-text </span>for its type.
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

                <div class="code-snippet-display">
                    <code>
                        <iframe
                            src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=one-light&wt=none&l=htmlmixed&width=650&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=143%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522badge-container%2522%253E%250A%2509%253Cdiv%2520class%253D%2522avatar%2520lg-size%2522%253E%250A%2509%2509%253Cimg%2520src%253D%2522images%252Favatar.png%2522%2520class%253D%2522img-round%2520img-responsive%2522%2520%2509%2509%2509%2509%2509%2509alt%253D%2522avatar%2522%253E%250A%2509%253C%252Fdiv%253E%250A%2509%253Cspan%2520class%253D%2522status-badge%2520status-online%2522%253E%253C%252Fspan%253E%250A%253C%252Fdiv%253E%250A%250A%253Cdiv%2520class%253D%2522badge-container%2522%253E%250A%2509%253Cdiv%2520class%253D%2522avatar%2520m-size%2522%253E%250A%2509%2509%253Cimg%2520src%253D%2522images%252Favatar.png%2522%2520class%253D%2522img-round%2520img-responsive%2522%2520%2509%2509%2509%2509%2509%2509alt%253D%2522avatar%2522%253E%250A%2509%253C%252Fdiv%253E%250A%2509%253Cspan%2520class%253D%2522status-badge%2520status-offline%2522%253E%253C%252Fspan%253E%250A%253C%252Fdiv%253E%250A%250A%253Cdiv%2520class%253D%2522badge-container%2522%253E%250A%2509%253Cdiv%2520class%253D%2522avatar%2520s-size%2522%253E%250A%2509%2509%253Cimg%2520src%253D%2522images%252Favatar.png%2522%2520class%253D%2522img-round%2520img-responsive%2522%2520%2509%2509%2509%2509%2509%2509alt%253D%2522avatar%2522%253E%250A%2509%253C%252Fdiv%253E%250A%2509%253Cspan%2520class%253D%2522status-badge%2520status-away%2522%253E%253C%252Fspan%253E%250A%253C%252Fdiv%253E%250A%250A%253Cdiv%2520class%253D%2522badge-container%2522%253E%250A%2509%253Cspan%2520class%253D%2522btn%2522%253E%253Ci%2520class%253D%2522fas%2520fa-shopping-cart%2522%253E%253C%252Fi%253E%253C%252Fspan%253E%250A%2509%253Cspan%2520class%253D%2522status-badge%2520status-text%2522%253E2%253C%252Fspan%253E%250A%253C%252Fdiv%253E"
                            style="border:0; transform: scale(1); overflow:hidden;"
                            sandbox="allow-scripts allow-same-origin">
                    </iframe>
                    </code>
                </div>

                <p class="sub-header">Example of Text Badges</p>

                <p>We have 2 types of text badges: badge with rounded edges and square edges. The font-size of badge is in em so that it will adjust to the parent's font-size automatically.</p>
                <p>Use class name = <span class="bold-font blue-text">text-badge</span>
                    for a text badge and add class name = <span class="bold-font red-text">badge-primary, badge-secondary, rounded-pill-badge </span>for its type.
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

                <div class="code-snippet-display">
                    <code>
                        <iframe
                            src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=one-light&wt=none&l=htmlmixed&width=650&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=143%25&si=false&es=2x&wm=false&code=%253Ch2%2520class%253D%2522badge-container%2522%253E%250A%2509Example%2520of%2520Heading%2520with%2520Primary%2520Badge%2520%253Cspan%2520class%253D%2522text-badge%2520badge-%2509%2509primary%2522%253ENew%253C%252Fspan%253E%250A%253C%252Fh2%253E%250A%250A%253Ch3%2520class%253D%2522badge-container%2522%253E%250A%2509Example%2520of%2520Heading%2520with%2520Secondary%2520Badge%2520%253Cspan%2520class%253D%2522text-badge%2520badge-%2509%2509secondary%2522%253ENew%253C%252Fspan%253E%250A%253C%252Fh3%253E%250A%250A%253Ch4%2520class%253D%2522badge-container%2522%253E%250A%2509Example%2520of%2520Heading%2520with%2520Primary%2520Rounded%2520Badge%2520%253Cspan%2520class%253D%2522text-badge%2520%2509%2509badge-primary%2520rounded-pill-badge%2522%253ENew%253C%252Fspan%253E%250A%253C%252Fh4%253E%250A%250A%253Ch5%2520class%253D%2522badge-container%2522%253E%250A%2509Example%2520of%2520Heading%2520with%2520Secondary%2520Rounded%2520Badge%2520%253Cspan%2520class%253D%2522text-badge%2520%2509badge-secondary%2520rounded-pill-badge%2522%253ENew%253C%252Fspan%253E%250A%253C%252Fh5%253E%250A%253Ch6%2520class%253D%2522badge-container%2522%253E%250A%2509Example%2520of%2520Heading%2520with%2520Primary%2520Badge%2520%253Cspan%2520class%253D%2522text-badge%2520badge-%2509%2509primary%2522%253ENew%253C%252Fspan%253E%250A%253C%252Fh6%253E%250A%250A%253Cp%2520class%253D%2522badge-container%2522%253E%250A%2509Example%2520of%2520Paragraph%2520with%2520Secondary%2520Badge%2520%253Cspan%2520class%253D%2522text-badge%2520badge-%2509secondary%2522%253ENew%253C%252Fspan%253E%250A%253C%252Fp%253E"
                            style="border:0; transform: scale(1); overflow:hidden;"
                            sandbox="allow-scripts allow-same-origin">
                        </iframe>
                    </code>
                </div>
`;

document.querySelector("#Badge").appendChild(badgesTemplate.content);
