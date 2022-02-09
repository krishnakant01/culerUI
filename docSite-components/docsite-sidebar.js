const sidebarTemplate = document.createElement('template');

sidebarTemplate.innerHTML = `

<h2 class="sidebar-header">Components</h2>

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
`;

document.querySelector(".sidebar-container").appendChild(sidebarTemplate.content);