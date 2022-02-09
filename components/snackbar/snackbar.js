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

                        <div class="snackbar snackbar-simple">
                            Saving to server...
                            <button class="btn btn-text-secondary card-btn snackbar-btn">UNDO</button>
                            <span class="material-icons snackbar-btn-close btn-simple-close" id="btn-simple-close">close</span>
                        </div>

                    </div>

                    <p class="sub-header">Live Demo</p>

                    <p>Click on the below CTA to open a snackbar.</p>

                    <div class="avatar-container">
                        <button class="btn btn-contained-primary card-btn" id="snackbar-CTA">Snackbar CTA</button>
                    </div>

                    <div class="snackbar snackbar-simple snackbar-demo">
                        Note archived
                        <button class="btn btn-text-secondary card-btn snackbar-btn">UNDO</button>
                        <span class="material-icons snackbar-btn-close btn-simple-close" id="btn-snackbar-close">close</span>
                    </div>

`;

document.querySelector("#Snackbar").appendChild(snackbarTemplate.content);

const btnSnackbarCTA = document.querySelector("#snackbar-CTA");
const snackbar = document.querySelector(".snackbar-demo");
const btnSnackbarClose = document.querySelector("#btn-snackbar-close");

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