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

<div class="code-snippet-display">
    <code>
        <iframe
            src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=one-light&wt=none&l=htmlmixed&width=650&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=143%25&si=false&es=2x&wm=false&code=%2520%2520%2520%2520%253Cul%2520class%253D%2522styled-list%2520list-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%253Elist%2520with%2520disc%2520bullets%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%253Elist%2520with%2520disc%2520bullets%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%253Elist%2520with%2520disc%2520bullets%253C%252Fli%253E%250A%2520%2520%2520%2520%253C%252Ful%253E%250A%2520%2520%2520%2520%253Cul%2520class%253D%2522styled-list%2520list-style-square%2520list-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%253Elist%2520with%2520square%2520bullets%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%253Elist%2520with%2520square%2520bullets%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%253Elist%2520with%2520square%2520bullets%253C%252Fli%253E%250A%2520%2520%2520%2520%253C%252Ful%253E%250A%2520%2520%2520%2520%253Cul%2520class%253D%2522styled-list%2520list-style-circle%2520list-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%253Elist%2520with%2520circle%2520bullets%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%253Elist%2520with%2520circle%2520bullets%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%253Elist%2520with%2520circle%2520bullets%253C%252Fli%253E%250A%2520%2520%2520%2520%253C%252Ful%253E"
            style="border:0; transform: scale(1); overflow:hidden;"
            sandbox="allow-scripts allow-same-origin">
        </iframe>
    </code>
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

<div class="code-snippet-display">
    <code>
        <iframe
            src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=one-light&wt=none&l=htmlmixed&width=650&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=143%25&si=false&es=2x&wm=false&code=%2520%2520%2520%253Col%2520class%253D%2522styled-list%2520list-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%253EList%2520item%2520with%2520numbers%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%253EList%2520item%2520with%2520numbers%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%253EList%2520item%2520with%2520numbers%253C%252Fli%253E%250A%2520%2520%2520%2520%253C%252Fol%253E%250A%2520%2520%2520%2520%253Col%2520class%253D%2522styled-list%2520list-style-small-alpha%2520list-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%253EList%2520item%2520with%2520alphabets%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%253EList%2520item%2520with%2520alphabets%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%253EList%2520item%2520with%2520alphabets%253C%252Fli%253E%250A%2520%2520%2520%2520%253C%252Fol%253E%250A%2520%2520%2520%2520%253Col%2520class%253D%2522styled-list%2520list-style-small-alpha%2520list-container%2522%2520reversed%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%253EReversed%2520list%2520item%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%253EReversed%2520list%2520item%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%253EReversed%2520list%2520item%253C%252Fli%253E%250A%2520%2520%2520%2520%253C%252Fol%253E%250A%2520%2520%2520%2520%253Col%2520class%253D%2522styled-list%2520list-style-small-roman%2520list-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%253EList%2520item%2520with%2520roman%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%253EList%2520item%2520with%2520roman%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%253EList%2520item%2520with%2520roman%253C%252Fli%253E%250A%2520%2520%2520%2520%253C%252Fol%253E%250A%2520%2520%2520%2520%253Col%2520class%253D%2522styled-list%2520list-style-capital-alpha%2520list-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%253EList%2520item%2520with%2520alphabets%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%253EList%2520item%2520with%2520alphabets%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%253EList%2520item%2520with%2520alphabets%253C%252Fli%253E%250A%2520%2520%2520%2520%253C%252Fol%253E%250A%2520%2520%2520%2520%253Col%2520class%253D%2522styled-list%2520list-style-capital-roman%2520list-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%253EList%2520item%2520with%2520roman%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%253EList%2520item%2520with%2520roman%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%253EList%2520item%2520with%2520roman%253C%252Fli%253E%250A%2520%2520%2520%2520%253C%252Fol%253E"
            style="border:0; transform: scale(1); overflow:hidden;"
            sandbox="allow-scripts allow-same-origin">
        </iframe>
    </code>
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

<div class="code-snippet-display">
    <code>
        <iframe
            src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=one-light&wt=none&l=htmlmixed&width=650&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=143%25&si=false&es=2x&wm=false&code=%2520%2520%2520%253Cul%2520class%253D%2522list-style-none%2520inline-list%2520list-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520class%253D%2522list-inline-item%2522%253Elist%2520item1%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520class%253D%2522list-inline-item%2522%253Elist%2520item2%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%2520class%253D%2522list-inline-item%2522%253Elist%2520item3%253C%252Fli%253E%250A%2520%2520%2520%2520%253C%252Ful%253E"
            style="border:0; transform: scale(1); overflow:hidden;"
            sandbox="allow-scripts allow-same-origin">
        </iframe>
    </code>
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

<div class="code-snippet-display">
    <code>
        <iframe
            src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=one-light&wt=none&l=htmlmixed&width=650&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=143%25&si=false&es=2x&wm=false&code=%253Cul%2520class%253D%2522stacked-list%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520href%253D%2522%2523%2522%2520class%253D%2522stacked-list-content%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522badge-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522avatar%2520s-size%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522images%252Favatar.png%2522%2520class%253D%2522img-round%2520img-responsive%2522%2520alt%253D%2522avatar%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522status-badge%2520status-online%2522%253E%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522notif-text%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522notif-name%2522%253EKrishnakant%2520Singh%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522notif-msg%2522%253EHi%21%2520How%2520are%2520you%253F%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fli%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520href%253D%2522%2523%2522%2520class%253D%2522stacked-list-content%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522badge-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522avatar%2520s-size%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522images%252Fwomen-away-kit.png%2522%2520class%253D%2522img-round%2520img-responsive%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520alt%253D%2522avatar%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522status-badge%2520status-online%2522%253E%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522notif-text%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522notif-name%2522%253EAlexia%2520Putellas%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522notif-msg%2522%253EAre%2520you%2520coming%2520for%2520training%2520today%253F%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fli%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520href%253D%2522%2523%2522%2520class%253D%2522stacked-list-content%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522badge-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522avatar%2520s-size%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522images%252Fmen-home-kit.png%2522%2520class%253D%2522img-round%2520img-responsive%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520alt%253D%2522avatar%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522status-badge%2520status-offline%2522%253E%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522notif-text%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522notif-name%2522%253EFrenkie%2520De%2520Jong%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522notif-msg%2522%253EHi%21%2520I%2520trained%2520with%2520Xavi%2520today.%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fa%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cli%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ca%2520href%253D%2522%2523%2522%2520class%253D%2522stacked-list-content%2522%253E%250A%2520%2520%2520"
            style="border:0; transform: scale(1); overflow:hidden;"
            sandbox="allow-scripts allow-same-origin">
        </iframe>
    </code>
</div>
`;

document.querySelector("#List").appendChild(listTemplate.content);