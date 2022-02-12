const alertTemplate = document.createElement('template');

alertTemplate.innerHTML = `

<p class="component-header">Alert</p>
                <p class="header-description">Alerts are used to attract user's attention for important information
                    without interrupting the user's flow.</p>

                

                <p>In Culer <span class="bold-font blue-text">U</span><span class="bold-font red-text">I</span>,
                    we have 4 types of Alert Bars available:
                </p>
                <p>1. Alert Bar with a text link.</p>
                <p>2. Alert Bar for Success.</p>
                <p>3. Alert Bar for Error.</p>
                <p>4. Alert Bar for Warning.</p>

                <p class="sub-header">Example of Alert Bar without close button</p>

                <p>Use <span class="bold-font blue-text">alert-primary, alert-success, alert-error, alert-warning</span>
                    as class name in your html.</p>

                <div class="bar-container">

                    <div class="alert-primary">
                        Primary Alert Bar with a text link. <a href="#Alerts"> Click here.</a>
                    </div>

                    <div class="alert-success">
                        <span><i class="fas fa-check-circle"></i>
                            Success! The task is completed.</span>
                    </div>

                    <div class="alert-error">
                        <span><i class="fas fa-exclamation-triangle"></i>
                            Error! Task failed.</span>
                    </div>

                    <div class="alert-warning">
                        <span><i class="fas fa-exclamation-triangle"></i>
                            Warning! Server is taking too much time to respond. </span>
                    </div>
                </div>

                <div class="code-snippet-display">
                    <code>
                        <iframe
                            src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=one-light&wt=none&l=htmlmixed&width=650&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=143%25&si=false&es=2x&wm=false&code=%2520%2509%253Cdiv%2520class%253D%2522alert-primary%2522%253E%250A%2520%2520%2520%2520%2520%2520%2509Primary%2520Alert%2520Bar%2520with%2520a%2520text%2520link.%2520%253Ca%2520href%253D%2522%2523Alerts%2522%253E%2520Click%2520here.%253C%252Fa%253E%250A%2509%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522alert-success%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%253E%253Ci%2520class%253D%2522fas%2520fa-check-circle%2522%253E%253C%252Fi%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Success%21%2520The%2520task%2520is%2520completed.%253C%252Fspan%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522alert-error%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%253E%253Ci%2520class%253D%2522fas%2520fa-exclamation-triangle%2522%253E%253C%252Fi%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Error%21%2520Task%2520failed.%253C%252Fspan%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522alert-warning%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%253E%253Ci%2520class%253D%2522fas%2520fa-exclamation-triangle%2522%253E%253C%252Fi%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Warning%21%2520Server%2520is%2520taking%2520too%2520much%2520time%2520to%2520respond.%253C%252Fspan%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E"
                            style="border:0; transform: scale(1); overflow:hidden;"
                            sandbox="allow-scripts allow-same-origin">
                        </iframe>
                    </code>
                </div>

                <p class="sub-header">Example of Alert Bar without close button</p>
                <p>Alert can have cross icon to close the alert. Check out html and vanilla JS code below.</p>

                <p>Use class name as <span class="bold-font blue-text">alert-success close</span>
                 and  id = <span class="bold-font red-text">alert-success</span>.</p>

                <div class="bar-container">
                    <div class="alert-success close" id="alert-success">
                        <span><i class="fas fa-check-circle"></i>
                            Success! The task is completed.</span>

                        <button class="close-btn"><span><i class="fas fa-times-circle"></i></span></button>
                    </div>
                </div>

                <div class="code-snippet-display">
                    <code>
                        <iframe
                            src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=one-light&wt=none&l=htmlmixed&width=650&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=143%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522alert-success%2520close%2522%2520id%253D%2522alert-success%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%250A%2509%253Cspan%253E%253Ci%2520class%253D%2522fas%2520fa-check-circle%2522%253E%253C%252Fi%253E%250A%2520%2520%2520%2520%2520%2520%2520Success%21%2520The%2520task%2520is%2520completed.%253C%252Fspan%253E%250A%2520%2520%2520%2520%253Cbutton%2520class%253D%2522close-btn%2522%253E%253Cspan%253E%253Ci%2520class%253D%2522fas%2520fa-times-circle%2522%253E%253C%252Fi%253E%253C%252Fspan%253E%253C%252Fbutton%253E%250A%2520%2520%2520%2509%250A%253C%252Fdiv%253E"
                            style="border:0; transform: scale(1); overflow:hidden;"
                            sandbox="allow-scripts allow-same-origin">
                        </iframe>
                    </code>
                </div>

                <p class="sub-header" style="color: var(--color-dark-gray)">Javascript</p>

                <div class="code-snippet-display">
                    <code>
                        <iframe
                            src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=one-light&wt=none&l=javascript&width=650&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=143%25&si=false&es=2x&wm=false&code=const%2520btnClose%2520%253D%2520document.querySelector%28%2522.close-btn%2522%29%253B%250Aconst%2520successAlertBar%2520%253D%2520document.querySelector%28%2522%2523alert-success%2522%29%253B%250A%250AbtnClose.addEventListener%28%2522click%2522%252C%2520%28%29%2520%253D%253E%2520successAlertBar.style.display%2520%253D%2520%2522none%2522%29%253B"
                            style="border:0; transform: scale(1); overflow:hidden;"
                            sandbox="allow-scripts allow-same-origin">
                        </iframe>
                    </code>
                </div>
`;

document.querySelector("#Alert").appendChild(alertTemplate.content);

const btnClose = document.querySelector(".close-btn");
const successAlertBar = document.querySelector("#alert-success");

btnClose.addEventListener("click", () => successAlertBar.style.display = "none");