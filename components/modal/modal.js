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

`;

document.querySelector("#Modal").appendChild(modalTemplate.content);

const btnModalCTA = document.querySelector("#modal-CTA");
const btnModalClose = document.querySelector("#btn-modal-close");
const modalScreen = document.querySelector("#modal-screen");

btnModalCTA.addEventListener("click", ()=>{
    modalScreen.classList.add("active");
    document.body.style.overflow = "hidden";
});

btnModalClose.addEventListener("click", ()=>{
    modalScreen.classList.remove("active");
    document.body.style.overflow = "visible";
});