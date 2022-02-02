const alertTemplate = document.createElement('template');

alertTemplate.innerHTML = `

<p class="component-header">Alert</p>
                <p class="header-description">Alerts are used to attract user's attention for important information
                    without interrupting the user's flow.</p>

                

                <p>In Culer <span class="nav-U-I blue-text">U</span><span class="nav-U-I red-text">I</span>,
                    we have 4 types of Alert Bars available:
                </p>
                <p>1. Alert Bar with a text link.</p>
                <p>2. Alert Bar for Success.</p>
                <p>3. Alert Bar for Error.</p>
                <p>4. Alert Bar for Warning.</p>

                <p class="sub-header">Example of Alert Bar without close button</p>

                <p>Use <span class="nav-U-I blue-text">alert-primary, alert-success, alert-error, alert-warning</span>
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

                <p class="sub-header">Example of Alert Bar without close button</p>
                <p>Alert can have cross icon to close the alert. Check out html and vanilla JS code below.</p>

                <p>Use class name as <span class="nav-U-I blue-text">alert-success close</span>
                 and  id = <span class="nav-U-I red-text">alert-success</span>.</p>

                <div class="bar-container">
                    <div class="alert-success close" id="alert-success">
                        <span><i class="fas fa-check-circle"></i>
                            Success! The task is completed.</span>

                        <button class="close-btn"><span><i class="fas fa-times-circle"></i></span></button>
                    </div>
                </div>

`;

document.querySelector("#Alert").appendChild(alertTemplate.content);

const btnClose = document.querySelector(".close-btn");
const successAlertBar = document.querySelector("#alert-success");

btnClose.addEventListener("click",()=>{

    successAlertBar.style.display = "none";
});