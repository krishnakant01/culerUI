const buttonTemplate = document.createElement('template');

buttonTemplate.innerHTML = `

<p class="component-header">Button</p>
                <p class="header-description">Buttons allow users to take actions, and make choices, with a single tap.
                    They are also called Call To Action (CTA).</p>
                <p>In Culer <span class="bold-font blue-text">U</span><span class="bold-font red-text">I</span>,
                    we have 3 types of Button available:
                </p>
                <p>1. Text Button.</p>
                <p>2. Contained Button.</p>
                <p>3. Outlined Button.</p>

                <p>These Buttons are available in 2 variants:</p>
                <p>1. Primary Button.</p>
                <p>2. Secondary Button.</p>

                <p class="sub-header">Example of Text, Contained and Outlined Button</p>

                <p>1. Text buttons are typically used for less-pronounced actions.</p>
                <p>2. Contained buttons are high-emphasis buttons. They contain actions that are primary to your app.
                </p>
                <p>3. Outlined buttons are medium-emphasis buttons. They contain actions that are important but aren't
                    the
                    primary action in an app.</p>

                <p>Use class name = <span class="bold-font red-text">btn-text-primary,
                        btn-contained-primary, btn-outlined-primary
                    </span>
                    for primary colored buttons.
                </p>

                <div class="avatar-container button-container">

                    <button class="btn btn-text-primary">TEXT</button>
                    <button class=" btn btn-contained-primary">CONTAINED</button>
                    <button class=" btn btn-outlined-primary">OUTLINED</button>
                
                </div>

                <div class="code-snippet-display">
                    <code>
                        <iframe
                            src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=one-light&wt=none&l=javascript&width=650&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=143%25&si=false&es=2x&wm=false&code=%253Cbutton%2520class%253D%2522btn%2520btn-text-primary%2522%253ETEXT%253C%252Fbutton%253E%250A%253Cbutton%2520class%253D%2522%2520btn%2520btn-contained-primary%2522%253ECONTAINED%253C%252Fbutton%253E%250A%253Cbutton%2520class%253D%2522%2520btn%2520btn-outlined-primary%2522%253EOUTLINED%253C%252Fbutton%253E"
                            style="border:0; transform: scale(1); overflow:hidden;"
                            sandbox="allow-scripts allow-same-origin">
                        </iframe>
                    </code>
                </div>

                <p class="sub-header">Example of Primary and Secondary Button</p>

                <p>Use class name = <span class="bold-font blue-text">btn-text-secondary,
                        btn-contained-primary, btn-outlined-primary
                    </span>
                    for secondary buttons.
                </p>

                <div class="bar-container">
                    <div class="button-container">
                        <button class="btn btn-text-primary">TEXT</button>
                        <button class="btn btn-contained-primary">CONTAINED</button>
                        <button class="btn btn-outlined-primary">OUTLINED</button>
                    </div>
                    <div class="button-container">
                        <button class="btn btn-text-secondary">TEXT</button>
                        <button class="btn btn-contained-secondary">CONTAINED</button>
                        <button class="btn btn-outlined-secondary">OUTLINED</button>
                    </div>
                </div>

                <div class="code-snippet-display">
                    <code>
                        <iframe
                            src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=one-light&wt=none&l=htmlmixed&width=650&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=143%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522button-container%2522%253E%250A%2509%253Cbutton%2520class%253D%2522btn%2520btn-text-primary%2522%253ETEXT%253C%252Fbutton%253E%250A%2509%253Cbutton%2520class%253D%2522btn%2520btn-contained-primary%2522%253ECONTAINED%253C%252Fbutton%253E%250A%2509%253Cbutton%2520class%253D%2522btn%2520btn-outlined-primary%2522%253EOUTLINED%253C%252Fbutton%253E%250A%253C%252Fdiv%253E%250A%253Cdiv%2520class%253D%2522button-container%2522%253E%250A%2509%253Cbutton%2520class%253D%2522btn%2520btn-text-secondary%2522%253ETEXT%253C%252Fbutton%253E%250A%2509%253Cbutton%2520class%253D%2522btn%2520btn-contained-secondary%2522%253ECONTAINED%253C%252Fbutton%253E%250A%2509%253Cbutton%2520class%253D%2522btn%2520btn-outlined-secondary%2522%253EOUTLINED%253C%252Fbutton%253E%250A%253C%252Fdiv%253E"
                            style="border:0; transform: scale(1); overflow:hidden;"
                            sandbox="allow-scripts allow-same-origin">
                        </iframe>
                    </code>
                </div>

                <p class="sub-header">Example of Link Button</p>

                <p>Link buttons are typically used to navigate to a particular location (within the same or different
                    file).
                </p>

                <p>Use class name = <span class="bold-font blue-text">btn-link, btn-link-secondary, </span>
                    <span class="bold-font red-text">btn-link-primary </span>for different types of link buttons.
                </p>

                <div class="avatar-container button-container">

                    <div class="button-container">
                        <a href="#Button" class="btn-link">TEXT</a>
                        <a href="#Button" class="btn btn-text-secondary">TEXT</a>
                        <a href="#Button" class="btn btn-link-primary">CONTAINED</a>
                        <a href="#Button" class="btn btn-link-secondary">OUTLINED</a>
                    </div>
                </div>

                <div class="code-snippet-display">
                    <code>
                        <iframe
                            src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=one-light&wt=none&l=htmlmixed&width=650&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=143%25&si=false&es=2x&wm=false&code=%253Ca%2520href%253D%2522%2523Button%2522%2520class%253D%2522btn-link%2522%253ETEXT%253C%252Fa%253E%250A%253Ca%2520href%253D%2522%2523Button%2522%2520class%253D%2522btn%2520btn-text-secondary%2522%253ETEXT%253C%252Fa%253E%250A%253Ca%2520href%253D%2522%2523Button%2522%2520class%253D%2522btn%2520btn-link-primary%2522%253ECONTAINED%253C%252Fa%253E%250A%253Ca%2520href%253D%2522%2523Button%2522%2520class%253D%2522btn%2520btn-link-secondary%2522%253EOUTLINED%253C%252Fa%253E"
                            style="border:0; transform: scale(1); overflow:hidden;"
                            sandbox="allow-scripts allow-same-origin">
                        </iframe>
                    </code>
                </div>

                <p class="sub-header">Example of Icon Button</p>

                <p>Icon buttons are commonly found in app bars and toolbars.
                    Icons are also appropriate for toggle buttons that allow a single choice to be selected or
                    deselected,
                    such as adding or removing a star to an item.</p>
                <p>Use class name = <span class="bold-font blue-text">btn-wishlist, btn-icon-primary, btn-icon-secondary,
                    </span>
                    <span class="bold-font red-text">btn-add-to-cart </span>for different types of icon buttons.
                </p>

                <div class="avatar-container button-container">

                    <div class="button-container">
                        <button class="btn btn-wishlist"><span class="material-icons">
                                favorite_border
                            </span></button>
                        <button class="btn btn-icon-primary"><span><i class="fas fa-plus"></i> Add</span></button>
                        <button class="btn btn-icon-secondary"><span><i class="fas fa-minus"></i> Remove</span></button>
                        <button class=" btn btn-contained-primary btn-add-to-cart"><span><i class="fas fa-shopping-cart"></i>
                                Add
                                to
                                Cart</span></button>
                        <button class="btn btn-contained-secondary"><span><i class="fas fa-camera"></i>
                                Upload</span></button>
                    </div>
                </div>

                <div class="code-snippet-display">
                    <code>
                        <iframe
                            src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=one-light&wt=none&l=htmlmixed&width=650&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=143%25&si=false&es=2x&wm=false&code=%253Cbutton%2520class%253D%2522btn%2520btn-wishlist%2522%253E%250A%2520%2520%253Cspan%2520class%253D%2522material-icons%2522%253Efavorite_border%253C%252Fspan%253E%250A%253C%252Fbutton%253E%250A%250A%253Cbutton%2520class%253D%2522btn%2520btn-icon-primary%2522%253E%250A%2520%2520%253Cspan%253E%253Ci%2520class%253D%2522fas%2520fa-plus%2522%253E%253C%252Fi%253E%2520Add%253C%252Fspan%253E%250A%253C%252Fbutton%253E%250A%250A%253Cbutton%2520class%253D%2522btn%2520btn-icon-secondary%2522%253E%250A%2520%2520%253Cspan%253E%253Ci%2520class%253D%2522fas%2520fa-minus%2522%253E%253C%252Fi%253E%2520Remove%253C%252Fspan%253E%250A%253C%252Fbutton%253E%250A%250A%253Cbutton%2520class%253D%2522%2520btn%2520btn-contained-primary%2520btn-add-to-cart%2522%253E%250A%2520%2520%253Cspan%253E%253Ci%2520class%253D%2522fas%2520fa-shopping-cart%2522%253E%253C%252Fi%253EAdd%2520to%2520Cart%253C%252Fspan%253E%250A%253C%252Fbutton%253E%250A%250A%253Cbutton%2520class%253D%2522btn%2520btn-contained-secondary%2522%253E%250A%2520%2520%253Cspan%253E%253Ci%2520class%253D%2522fas%2520fa-camera%2522%253E%253C%252Fi%253EUpload%253C%252Fspan%253E%250A%253C%252Fbutton%253E"
                            style="border:0; transform: scale(1); overflow:hidden;"
                            sandbox="allow-scripts allow-same-origin">
                        </iframe>
                    </code>
                </div>

                <p class="sub-header">Example of Disabled Button</p>

                <p>Disabled buttons indicate non-allowance of an action.</p>

                <p>Use class name = <span class="bold-font blue-text">btn-text-disabled, btn-contained-disabled, </span>
                    <span class="bold-font red-text">btn-outlined-disabled </span>for different types of icon buttons.
                </p>

                <div class="avatar-container button-container">

                    <div class="button-container">

                        <button class="btn btn-text-disabled">TEXT</button>
                        <button class="btn btn-contained-disabled">CONTAINED</button>
                        <button class="btn btn-outlined-disabled">OUTLINED</button>
                    </div>
                </div>

                <div class="code-snippet-display">
                    <code>
                        <iframe
                            src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=one-light&wt=none&l=htmlmixed&width=650&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=143%25&si=false&es=2x&wm=false&code=%253Cbutton%2520class%253D%2522btn%2520btn-text-disabled%2522%253ETEXT%253C%252Fbutton%253E%250A%253Cbutton%2520class%253D%2522btn%2520btn-contained-disabled%2522%253ECONTAINED%253C%252Fbutton%253E%250A%253Cbutton%2520class%253D%2522btn%2520btn-outlined-disabled%2522%253EOUTLINED%253C%252Fbutton%253E"
                            style="border:0; transform: scale(1); overflow:hidden;"
                            sandbox="allow-scripts allow-same-origin">
                        </iframe>
                    </code>
                </div>

                <p class="sub-header">Example of Toggle Switch Button</p>
                <p>Switches toggle the state of a single setting on or off.</p>
                <p>Use class name = <span class="bold-font blue-text">btn-toggle</span>
                    in the label element and class name = <span class="bold-font blue-text">toggle-input</span> in input
                    element and use class name = <span class="bold-font red-text">toggle-fill-area-red,
                        toggle-fill-area-blue,
                        toggle-fill-area-yellow
                    </span>for different fill area colors.
                </p>

                <div class="avatar-container button-container">

                    <div class="button-container">
                        <div>
                            <label class="btn-toggle" for="myToggle">
                                <input class="toggle-input" type="checkbox" id="myToggle">
                                <div class="toggle-fill-area-red"></div>
                            </label>
                        </div>

                        <div>
                            <label class="btn-toggle" for="myToggle2">
                                <input class="toggle-input" type="checkbox" id="myToggle2">
                                <div class="toggle-fill-area-red toggle-fill-area-blue"></div>
                            </label>
                        </div>

                        <div>
                            <label class="btn-toggle" for="myToggle3">
                                <input class="toggle-input" type="checkbox" id="myToggle3">
                                <div class="toggle-fill-area-red toggle-fill-area-yellow"></div>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="code-snippet-display">
                    <code>
                        <iframe
                            src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=one-light&wt=none&l=htmlmixed&width=650&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=143%25&si=false&es=2x&wm=false&code=%253Cdiv%253E%250A%2509%253Clabel%2520class%253D%2522btn-toggle%2522%2520for%253D%2522myToggle%2522%253E%250A%2509%2509%253Cinput%2520class%253D%2522toggle-input%2522%2520type%253D%2522checkbox%2522%2520id%253D%2522myToggle%2522%253E%250A%2509%2509%253Cdiv%2520class%253D%2522toggle-fill-area-red%2522%253E%253C%252Fdiv%253E%250A%2509%253C%252Flabel%253E%250A%253C%252Fdiv%253E%250A%250A%253Cdiv%253E%250A%2509%253Clabel%2520class%253D%2522btn-toggle%2522%2520for%253D%2522myToggle2%2522%253E%250A%2509%2509%253Cinput%2520class%253D%2522toggle-input%2522%2520type%253D%2522checkbox%2522%2520id%253D%2522myToggle2%2522%253E%250A%2509%2509%253Cdiv%2520class%253D%2522toggle-fill-area-red%2520toggle-fill-area-blue%2522%253E%253C%252Fdiv%253E%250A%2509%253C%252Flabel%253E%250A%253C%252Fdiv%253E%250A%250A%253Cdiv%253E%250A%2509%253Clabel%2520class%253D%2522btn-toggle%2522%2520for%253D%2522myToggle3%2522%253E%250A%2509%2509%253Cinput%2520class%253D%2522toggle-input%2522%2520type%253D%2522checkbox%2522%2520id%253D%2522myToggle3%2522%253E%250A%2509%2509%253Cdiv%2520class%253D%2522toggle-fill-area-red%2520toggle-fill-area-yellow%2522%253E%253C%252Fdiv%253E%250A%2509%253C%252Flabel%253E%250A%253C%252Fdiv%253E"
                            style="border:0; transform: scale(1); overflow:hidden;"
                            sandbox="allow-scripts allow-same-origin">
                        </iframe>
                    </code>
                </div>

                <p class="sub-header">Example of Floating Action Button</p>
                <p>A floating action button (FAB) performs the primary, or most common, action on a screen.
                    It appears in front of all screen content, typically as a circular shape with an icon in its center.
                    FABs come in two types: regular, and extended.
                </p>

                <p>Use class name = <span class="bold-font blue-text">btn-floating-action </span>
                    for button and add class name = <span class="bold-font red-text">bg-red, bg-blue, bg-yellow </span>for
                    different colors.
                    Add class name = <span class="bold-font red-text">extended-fab </span>for extended FAB.</p>

                <div class="avatar-container button-container">

                    <div class="button-container">

                        <button class="btn-floating-action bg-red"><span><i class="fas fa-plus"></i></span></button>
                        <button class="btn-floating-action bg-blue"><span><i class="fas fa-pen"></i></span></button>
                        <button class="btn-floating-action bg-yellow"><span><i
                                    class="fas fa-arrow-alt-up"></i></span></button>

                        <button class="btn-floating-action extended-fab bg-gray">
                            <span class="material-icons">navigation</span>
                            NAVIGATE</button>

                    </div>
                </div>

                <div class="code-snippet-display">
                    <code>
                        <iframe
                            src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=one-light&wt=none&l=htmlmixed&width=650&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=143%25&si=false&es=2x&wm=false&code=%253Cbutton%2520class%253D%2522btn-floating-action%2520bg-red%2522%253E%250A%2520%2520%253Cspan%253E%253Ci%2520class%253D%2522fas%2520fa-plus%2522%253E%253C%252Fi%253E%253C%252Fspan%253E%253C%252Fbutton%253E%250A%250A%253Cbutton%2520class%253D%2522btn-floating-action%2520bg-blue%2522%253E%250A%2520%2520%253Cspan%253E%253Ci%2520class%253D%2522fas%2520fa-pen%2522%253E%253C%252Fi%253E%253C%252Fspan%253E%253C%252Fbutton%253E%250A%250A%253Cbutton%2520class%253D%2522btn-floating-action%2520bg-yellow%2522%253E%250A%2520%2520%253Cspan%253E%253Ci%2520class%253D%2522fas%2520fa-arrow-alt-up%2522%253E%253C%252Fi%253E%253C%252Fspan%253E%253C%252Fbutton%253E%250A%250A%253Cbutton%2520class%253D%2522btn-floating-action%2520extended-fab%2520bg-gray%2522%253E%250A%2509%253Cspan%2520class%253D%2522material-icons%2522%253Enavigation%253C%252Fspan%253ENAVIGATE%253C%252Fbutton%253E"
                            style="border:0; transform: scale(1); overflow:hidden;"
                            sandbox="allow-scripts allow-same-origin">
                        </iframe>
                    </code>
                </div>
`;

document.querySelector("#Button").appendChild(buttonTemplate.content);