const snackbarTemplate = document.createElement('template');

snackbarTemplate.innerHTML = `

<p class="component-header">Snackbar</p>
                <p class="header-description">Snackbars provide brief notifications. The component is also known as a
                    toast.</p>

                <p>In Culer <span class="bold-font blue-text">U</span><span class="bold-font red-text">I</span>,
                    we have 3 types of Snackbars: </p>
                    <p>1. Success Snackbar</p>
                    <p>2. Error Snackbar</p>
                    <p>3. Simple Snackbar</p>

                    <p class="sub-header">Example of Simple Snackbar</p>

                    <p>Use class name = <span class="bold-font blue-text">snackbar </span>and add
                        class name = <span class="bold-font red-text">snackbar-success, snackbar-error, snackbar-simple
                        </span>for different types of snackbar.
                    </p>
                    <p>Use id = <span class="bold-font blue-text">btn-success-close, btn-error-close, btn-simple-close</span>
                           to make it functional.</p>

                    <div class="bar-container">

                        <div class="snackbar snackbar-success">
                            This is a success snackbar!
                            <span class="material-icons snackbar-btn-close" id="btn-success-close">close</span>
                        </div>

                        <div class="snackbar snackbar-error">
                            Not Saved! Try again later.
                            <span class="material-icons snackbar-btn-close" id="btn-error-close">close</span>
                        </div>

                        <div class="snackbar snackbar-black-bg padding05-1">
                            Saving to server...
                            <button class="btn btn-text-secondary card-btn snackbar-btn">UNDO</button>
                            <span class="material-icons snackbar-btn-close btn-simple-close" id="btn-simple-close">close</span>
                        </div>

                    </div>

                    <div class="code-snippet-display">
                        <code>
                            <iframe
                                src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=one-light&wt=none&l=auto&width=680&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=9px&ln=false&fl=1&fm=Hack&fs=14px&lh=143%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522snackbar%2520snackbar-success%2522%253E%250A%2520%2520%2520%2520This%2520is%2520a%2520success%2520snackbar%21%250A%2509%253Cspan%2520class%253D%2522material-icons%2520snackbar-btn-close%2522%2520id%253D%2522btn-success-close%2522%253Eclose%253C%252Fspan%253E%250A%253C%252Fdiv%253E%250A%250A%253Cdiv%2520class%253D%2522snackbar%2520snackbar-error%2522%253E%250A%2520%2520%2520%2520Not%2520Saved%21%2520Try%2520again%2520later.%250A%2520%2520%2520%2520%253Cspan%2520class%253D%2522material-icons%2520snackbar-btn-close%2522%2520id%253D%2522btn-error-close%2522%253Eclose%253C%252Fspan%253E%250A%253C%252Fdiv%253E%250A%250A%253Cdiv%2520class%253D%2522snackbar%2520snackbar-black-bg%2520padding-05-1%2522%253E%250A%2520%2520%2520%2520Saving%2520to%2520server...%250A%2509%253Cbutton%2520class%253D%2522btn%2520btn-text-secondary%2520card-btn%2520snackbar-btn%2522%253EUNDO%253C%252Fbutton%253E%250A%2520%2520%2520%2520%253Cspan%2520class%253D%2522material-icons%2520snackbar-btn-close%2520btn-simple-close%2522%2520id%253D%2522btn-simple-close%2522%253E%250A%2520%2520%2520%2520%2520%2520close%253C%252Fspan%253E%250A%253C%252Fdiv%253E"
                                style="border:0; transform: scale(1); overflow:hidden;"
                                sandbox="allow-scripts allow-same-origin">
                            </iframe>
                        </code>
                    </div>

                    <p class="sub-header">Live Demo</p>

                    <p>Click on the below CTA to open a snackbar.</p>

                    <div class="avatar-container">
                        <button class="btn btn-contained-primary card-btn" id="snackbar-CTA">Snackbar CTA</button>
                    </div>

                    <div class="snackbar snackbar-black-bg snackbar-demo padding-05-1">
                        Note archived
                        <button class="btn btn-text-secondary card-btn snackbar-btn">UNDO</button>
                        <span class="material-icons snackbar-btn-close btn-simple-close" id="btn-snackbar-close">close</span>
                    </div>

                    <div class="code-snippet-display">
                        <code>
                            <iframe
                                src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=one-light&wt=none&l=auto&width=680&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=9px&ln=false&fl=1&fm=Hack&fs=14px&lh=143%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522snackbar%2520snackbar-black-bg%2520snackbar-demo%2520padding-05-1%2522%253E%250A%2520%2520Note%2520archived%250A%2520%2520%253Cbutton%2520class%253D%2522btn%2520btn-text-secondary%2520card-btn%2520snackbar-btn%2522%253EUNDO%253C%252Fbutton%253E%250A%2520%2520%253Cspan%250A%2520%2520%2520%2520class%253D%2522material-icons%2520snackbar-btn-close%2520btn-simple-close%2522%250A%2520%2520%2520%2520id%253D%2522btn-snackbar-close%2522%253E%250A%2520%2520%2520%2520close%250A%2520%2520%253C%252Fspan%253E%250A%253C%252Fdiv%253E"
                                style="border:0; transform: scale(1); overflow:hidden;"
                                sandbox="allow-scripts allow-same-origin">
                            </iframe>
                        </code>
                    </div>

                    <p class="sub-header" style="color: var(--color-dark-gray)">Javascript</p>

                    <div class="code-snippet-display">
                        <code>
                            <iframe
                                src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=one-light&wt=none&l=javascript&width=650&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=143%25&si=false&es=2x&wm=false&code=const%2520btnSnackbarCTA%2520%253D%2520document.querySelector%28%27%2523snackbar-CTA%27%29%250Aconst%2520snackbar%2520%253D%2520document.querySelector%28%27.snackbar-demo%27%29%250Aconst%2520btnSnackbarClose%2520%253D%2520document.querySelector%28%27%2523btn-snackbar-close%27%29%250A%250AbtnSnackbarCTA.addEventListener%28%27click%27%252C%2520%28%29%2520%253D%253E%2520%257B%250A%2520%2520snackbar.style.display%2520%253D%2520%27block%27%250A%250A%2520%2520timerIdOfSnackbar%2520%253D%2520setTimeout%28%28%29%2520%253D%253E%2520%257B%250A%2520%2520%2520%2520snackbar.style.display%2520%253D%2520%27none%27%250A%2520%2520%257D%252C%25203000%29%250A%257D%29%253B%250A%250AbtnSnackbarClose.addEventListener%28%27click%27%252C%2520%28%29%2520%253D%253E%2520%257B%250A%2520%2520clearTimeout%28timerIdOfSnackbar%29%250A%2520%2520snackbar.style.display%2520%253D%2520%27none%27%250A%257D%29%253B"
                                style="border:0; transform: scale(1); overflow:hidden;"
                                sandbox="allow-scripts allow-same-origin">
                            </iframe>
                        </code>
                    </div>
`;

document.querySelector("#Snackbar").appendChild(snackbarTemplate.content);

const btnSnackbarCTA = document.querySelector("#snackbar-CTA");
const snackbar = document.querySelector(".snackbar-demo");
const btnSnackbarClose = document.querySelector("#btn-snackbar-close");

snackbar.style.display = "none"

btnSnackbarCTA.addEventListener("click", () => {

    snackbar.style.display = "block"

    timerIdOfSnackbar = setTimeout(() => {

        snackbar.style.display = "none";
    }, 3000);

});

btnSnackbarClose.addEventListener("click", () => {
    clearTimeout(timerIdOfSnackbar);
    snackbar.style.display = "none";
});
