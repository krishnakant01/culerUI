const modalTemplate = document.createElement('template');

modalTemplate.innerHTML = `

<p class="component-header">Modal</p>
<p class="header-description">The modal component provides a solid foundation for creating dialogs,
    popovers, lightboxes, or whatever else.</p>
<p class="sub-header">Example of Modal</p>
<p>Use class name = <span class="nav-U-I blue-text">modal-screen </span>in the parent div and structure
    your modal according to the code snippet. <p>Use class name = <span class="nav-U-I red-text">active
        </span>for functional modal.
    </p>
    <div class="bar-container">
        <div class="modal-screen">
            <div class="modal-container">
                <h3>Become a Culer</h3>
                <span class="material-icons modal-close-btn">close</span>
                <p>Get unlimited <span class="nav-U-I blue-text">Barça </span><span
                        class="nav-U-I red-text">TV+</span>,<span class="nav-U-I blue-text">
                        CUL</span><span class="nav-U-I red-text">ERS</span> Premium Card, Discounts and
                    Priority Access to
                    tickets & Offers on <span class="nav-U-I blue-text"> Bar</span><span
                        class="nav-U-I red-text">ça</span> products</p>
                <div class="modal-img-cont">
                    <img src="images/membership.png" alt="">
                </div>
                <div class="card-button-container">
                    <button class="btn btn-contained-primary card-btn">JOIN NOW</button>
                    <button class="btn btn-outlined-secondary card-btn">LEARN MORE</button>
                </div>
            </div>
        </div>
    </div>

    <div class="code-snippet-display">
        <code>
            <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=one-light&wt=none&l=htmlmixed&width=650&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=143%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522modal-screen%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522modal-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch3%253EBecome%2520a%2520Culer%253C%252Fh3%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522material-icons%2520modal-close-btn%2522%253Eclose%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253EGet%2520unlimited%2520%253Cspan%2520class%253D%2522nav-U-I%2520blue-text%2522%253EBar%25C3%25A7a%2520%253C%252Fspan%253E%253Cspan%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520class%253D%2522nav-U-I%2520red-text%2522%253ETV%252B%253C%252Fspan%253E%252C%253Cspan%2520class%253D%2522nav-U-I%2520blue-text%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520CUL%253C%252Fspan%253E%253Cspan%2520class%253D%2522nav-U-I%2520red-text%2522%253EERS%253C%252Fspan%253E%2520Premium%2520Card%252C%2520Discounts%2520and%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Priority%2520Access%2520to%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520tickets%2520%2526%2520Offers%2520on%2520%253Cspan%2520class%253D%2522nav-U-I%2520blue-text%2522%253E%2520Bar%253C%252Fspan%253E%253Cspan%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520class%253D%2522nav-U-I%2520red-text%2522%253E%25C3%25A7a%253C%252Fspan%253E%2520products%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522modal-img-cont%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522images%252Fmembership.png%2522%2520alt%253D%2522%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522card-button-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522btn%2520btn-contained-primary%2520card-btn%2522%253EJOIN%2520NOW%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522btn%2520btn-outlined-secondary%2520card-btn%2522%253ELEARN%2520MORE%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%253C%252Fdiv%253E"
                style="border:0; transform: scale(1); overflow:hidden;"
                sandbox="allow-scripts allow-same-origin">
            </iframe>
        </code>
    </div>

    <p class="sub-header">Live Demo</p>

    <p>Click on the below CTA to open modal. Once the modal is open user will not be able to scroll or
        do
        any action on the main page. To close the pop-up, click on close icon. Functionality
        is achieved using JavaScript.</p>

    <div class="avatar-container">
        <button class="btn btn-contained-primary card-btn" id="modal-CTA">Modal CTA</button>
    </div>

    <div class="modal-screen" id="modal-screen">

        <div class="modal-container">
            <h3>Become a Culer</h3>
            <span class="material-icons modal-close-btn" id="btn-modal-close">close</span>
            <p>Get unlimited <span class="bold-font blue-text">Barça </span><span
                    class="bold-font red-text">TV+</span>,<span class="bold-font blue-text"> CUL</span><span
                    class="bold-font red-text">ERS</span> Premium Card, Discounts and Priority Access to
                tickets & Offers on <span class="bold-font blue-text"> Bar</span><span
                    class="bold-font red-text">ça</span> products</p>
            <div class="modal-img-cont">
                <img src="images/membership.png" alt="">
            </div>
            <div class="card-button-container">
                <button class="btn btn-contained-primary card-btn">JOIN NOW</button>
                <button class="btn btn-outlined-secondary card-btn">LEARN MORE</button>
            </div>
        </div>
    </div>

    <div class="code-snippet-display">
        <code>
            <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=one-light&wt=none&l=htmlmixed&width=650&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=143%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522modal-screen%2522%2520id%253D%2522modal-screen%2522%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522modal-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch3%253EBecome%2520a%2520Culer%253C%252Fh3%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522material-icons%2520modal-close-btn%2522%2520id%253D%2522btn-modal-close%2522%253Eclose%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253EGet%2520unlimited%2520%253Cspan%2520class%253D%2522bold-font%2520blue-text%2522%253EBar%25C3%25A7a%2520%253C%252Fspan%253E%253Cspan%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520class%253D%2522bold-font%2520red-text%2522%253ETV%252B%253C%252Fspan%253E%252C%253Cspan%2520class%253D%2522bold-font%2520blue-text%2522%253E%2520CUL%253C%252Fspan%253E%253Cspan%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520class%253D%2522bold-font%2520red-text%2522%253EERS%253C%252Fspan%253E%2520Premium%2520Card%252C%2520Discounts%2520and%2520Priority%2520Access%2520to%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520tickets%2520%2526%2520Offers%2520on%2520%253Cspan%2520class%253D%2522bold-font%2520blue-text%2522%253E%2520Bar%253C%252Fspan%253E%253Cspan%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520class%253D%2522bold-font%2520red-text%2522%253E%25C3%25A7a%253C%252Fspan%253E%2520products%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522modal-img-cont%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522images%252Fmembership.png%2522%2520alt%253D%2522%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522card-button-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522btn%2520btn-contained-primary%2520card-btn%2522%253EJOIN%2520NOW%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522btn%2520btn-outlined-secondary%2520card-btn%2522%253ELEARN%2520MORE%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E"
                style="border:0; transform: scale(1); overflow:hidden;"
                sandbox="allow-scripts allow-same-origin">
            </iframe>
        </code>
    </div>

    <p class="sub-header" style="color: var(--color-dark-gray)">Javascript</p>

    <div class="code-snippet-display">
        <code>
            <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=one-light&wt=none&l=javascript&width=650&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=143%25&si=false&es=2x&wm=false&code=const%2520btnModalCTA%2520%253D%2520document.querySelector%28%2522%2523modal-CTA%2522%29%253B%250Aconst%2520btnModalClose%2520%253D%2520document.querySelector%28%2522%2523btn-modal-close%2522%29%253B%250Aconst%2520modalScreen%2520%253D%2520document.querySelector%28%2522%2523modal-screen%2522%29%253B%250A%250AbtnModalCTA.addEventListener%28%2522click%2522%252C%2520%28%29%253D%253E%257B%250A%2520%2520%2520%2520modalScreen.classList.add%28%2522active%2522%29%253B%250A%2520%2520%2520%2520document.body.style.overflow%2520%253D%2520%2522hidden%2522%253B%250A%257D%29%253B%250A%250AbtnModalClose.addEventListener%28%2522click%2522%252C%2520%28%29%253D%253E%257B%250A%2520%2520%2520%2520modalScreen.classList.remove%28%2522active%2522%29%253B%250A%2520%2520%2520%2520document.body.style.overflow%2520%253D%2520%2522visible%2522%253B%250A%257D%29%253B"
                style="border:0; transform: scale(1); overflow:hidden;"
                sandbox="allow-scripts allow-same-origin">
            </iframe>
        </code>
    </div>
`;

document.querySelector("#Modal").appendChild(modalTemplate.content);

const btnModalCTA = document.querySelector("#modal-CTA");
const btnModalClose = document.querySelector("#btn-modal-close");
const modalScreen = document.querySelector("#modal-screen");

btnModalCTA.addEventListener("click", ()=>{
    modalScreen.classList.add("modal-active");
    document.body.style.overflow = "hidden";
});

btnModalClose.addEventListener("click", ()=>{
    modalScreen.classList.remove("modal-active");
    document.body.style.overflow = "visible";
});
