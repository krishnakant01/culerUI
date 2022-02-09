const listTemplate = document.createElement('template');

listTemplate.innerHTML = `

<p class="component-header">List</p>

<p class="header-description">Lists can be used at so many places, navigation bar,
    stacked notifications, article pages, etc.</p>

<p class="sub-header">Example of Unordered List with bullets</p>

<p class="">Add class according to bullet style. Copy html code below and add your desired list items.
</p>

<div class="avatar-container">
    <ul class="styled-list list-container">
        <li>list with disc bullets</li>
        <li>list with disc bullets</li>
        <li>list with disc bullets</li>
    </ul>
    <ul class="styled-list list-style-square list-container">
        <li>list with square bullets</li>
        <li>list with square bullets</li>
        <li>list with square bullets</li>
    </ul>
    <ul class="styled-list list-style-circle list-container">
        <li>list with circle bullets</li>
        <li>list with circle bullets</li>
        <li>list with circle bullets</li>
    </ul>
</div>

<p class="sub-header">Example of Ordered List with bullets</p>

<p>Add class according to bullet style. Copy html code below and add your desired list items.<br>
</p>
<p> To reverse the order of ordered list, add <span class="bold-font blue-text">reversed</span> attribute
    to <span class="bold-font red-text">ol</span> element</p>

<div class="avatar-container">

    <ol class="styled-list list-container">
        <li>List item with numbers</li>
        <li>List item with numbers</li>
        <li>List item with numbers</li>
    </ol>
    <ol class="styled-list list-style-small-alpha list-container">
        <li>List item with alphabets</li>
        <li>List item with alphabets</li>
        <li>List item with alphabets</li>
    </ol>
    <ol class="styled-list list-style-small-alpha list-container" reversed>
        <li>Reversed list item</li>
        <li>Reversed list item</li>
        <li>Reversed list item</li>
    </ol>
    <ol class="styled-list list-style-small-roman list-container">
        <li>List item with roman</li>
        <li>List item with roman</li>
        <li>List item with roman</li>
    </ol>
    <ol class="styled-list list-style-capital-alpha list-container">
        <li>List item with alphabets</li>
        <li>List item with alphabets</li>
        <li>List item with alphabets</li>
    </ol>
    <ol class="styled-list list-style-capital-roman list-container">
        <li>List item with roman</li>
        <li>List item with roman</li>
        <li>List item with roman</li>
    </ol>

</div>


<p class="sub-header">Example of Inline List Items</p>

<p>If you want list items in same line instead of stacked, you can add <span
        class="bold-font blue-text">inline-list</span> class to make it inline. </p>
<p> And you can also add
    <span class="bold-font red-text">list-style-none</span> class to remove bullets.
</p>

<div class="avatar-container">

    <ul class="list-style-none inline-list list-container">
        <li class="list-inline-item">list item1</li>
        <li class="list-inline-item">list item2</li>
        <li class="list-inline-item">list item3</li>
    </ul>

</div>

<p class="sub-header">Example of Notification Stacked List</p>

<p>This is stacked list without bullets. We can add desired component inside
    <span class="bold-font red-text">"li"</span> element. Check below code for cards in stacked list.</p>

<div class="avatar-container">

    <ul class="stacked-list">
        <li>
            <a href="#" class="stacked-list-content">
                <div class="badge-container">
                    <div class="avatar s-size">
                        <img src="images/avatar.png" class="img-round img-responsive" alt="avatar">
                    </div>
                    <span class="status-badge status-online"></span>
                </div>
                <div class="notif-text">
                    <p class="notif-name">Krishnakant Singh</p>
                    <p class="notif-msg">Hi! How are you?</p>
                </div>
            </a>
        </li>

        <li>
            <a href="#" class="stacked-list-content">
                <div class="badge-container">
                    <div class="avatar s-size">
                        <img src="images/women-away-kit.png" class="img-round img-responsive"
                            alt="avatar">
                    </div>
                    <span class="status-badge status-online"></span>
                </div>
                <div class="notif-text">
                    <p class="notif-name">Alexia Putellas</p>
                    <p class="notif-msg">Are you coming for training today?</p>
                </div>
            </a>
        </li>

        <li>
            <a href="#" class="stacked-list-content">
                <div class="badge-container">
                    <div class="avatar s-size">
                        <img src="images/men-home-kit.png" class="img-round img-responsive"
                            alt="avatar">
                    </div>
                    <span class="status-badge status-offline"></span>
                </div>
                <div class="notif-text">
                    <p class="notif-name">Frenkie De Jong</p>
                    <p class="notif-msg">Hi! I trained with Xavi today.</p>
                </div>
            </a>
        </li>
        <li>
            <a href="#" class="stacked-list-content">
                <div class="badge-container">
                    <div class="avatar s-size">
                        <img src="images/pique.png" class="img-round img-responsive" alt="avatar">
                    </div>
                    <span class="status-badge status-away"></span>
                </div>
                <div class="notif-text">
                    <p class="notif-name">Gerard Piqué </p>
                    <p class="notif-msg">5+ text messages</p>
                </div>
                <span class="material-icons">
                    arrow_drop_down
                    </span>
            </a>
        </li>


    </ul>

</div>
`;

document.querySelector("#List").appendChild(listTemplate.content);