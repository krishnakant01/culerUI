const sidebarTemplate = document.createElement('template');

sidebarTemplate.innerHTML = `
<div>
    <h2 class="sidebar-header">Components </h2><span class="btn-dropdown" id="btn-dropdown"><i class="fas fa-angle-down"></i></span>
    

            <ul class="sidebar-list">
                <a href="#Alert">
                    <li class="sidebar-link-item">Alert</li>
                </a>
                <a href="#Avatar">
                    <li class="sidebar-link-item">Avatar</li>
                </a>
                <a href="#Badge">
                    <li class="sidebar-link-item">Badge</li>
                </a>
                <a href="#Button">
                    <li class="sidebar-link-item">Button</li>
                </a>
                <a href="#Cards">
                    <li class="sidebar-link-item">Cards</li>
                </a>
                <a href="#Form">
                    <li class="sidebar-link-item">Form</li>
                </a>
                <a href="#Image">
                    <li class="sidebar-link-item">Image</li>
                </a>
                <a href="#List">
                    <li class="sidebar-link-item">List</li>
                </a>
                <a href="#Modal">
                    <li class="sidebar-link-item">Modal</li>
                </a>
                <a href="#Navigation">
                    <li class="sidebar-link-item">Navigation</li>
                </a>
                <a href="#Grid">
                    <li class="sidebar-link-item">Simplified Grid</li>
                </a>
                <a href="#Slider">
                    <li class="sidebar-link-item">Slider</li>
                </a>
                <a href="#Snackbar">
                    <li class="sidebar-link-item">Snackbar</li>
                </a>
                <a href="#Typography">
                    <li class="sidebar-link-item">Typography</li>
                </a>
            </ul>
</div>

`;
document.querySelector(".sidebar-container").appendChild(sidebarTemplate.content);

const dropdownButton = document.querySelector("#btn-dropdown");
const sidebarList = document.querySelector(".sidebar-list");
const sidebarContainer = document.querySelector(".sidebar-container");
const sidebarHeader = document.querySelector(".sidebar-header");

let sidebarOpen = false;

sidebarHeader.addEventListener("click", onClickHandler);

dropdownButton.addEventListener("click", onClickHandler);

function onClickHandler() {
    if (sidebarOpen === false) {
        openSidebar();
        sidebarList.addEventListener("click", closeSidebar);

    } else {
        closeSidebar();
    }
}

function openSidebar() {
    sidebarList.style.display = "block";
    sidebarContainer.style.height = "100vh";
    dropdownButton.classList.add("rotate-180deg");
    document.body.style.overflow = "hidden";
    sidebarOpen = true;
}

function closeSidebar() {
    sidebarList.style.display = "none";
    dropdownButton.classList.remove("rotate-180deg");
    sidebarContainer.style.height = "fit-content";
    document.body.style.overflow = "visible";
    sidebarOpen = false;
}