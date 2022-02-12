const cardsTemplate = document.createElement('template');

cardsTemplate.innerHTML = `

<p class="component-header">Cards</p>
<p class="header-description">Cards contain content and actions about a single subject.</p>
<p>Cards are surfaces that display content and actions on a single topic.
    They should be easy to scan for relevant and actionable information.
    Elements, like text and images, should be placed on them in a way that clearly indicates hierarchy.
</p>

<p>In Culer <span class="bold-font blue-text">U</span><span class="bold-font red-text">I</span>,
    we have various types of Cards available:
</p>

<p class="sub-header">Example of Basic Card</p>

<p>Although cards can support multiple actions, UI controls,
    and an overflow menu, use restraint and remember that cards are entry points to more complex and
    detailed information.</p>
<p>Use this to display simple information. Use class name = <span class="bold-font blue-text">card</span>
    and add class name = <span class="bold-font red-text">basic-card</span>
    for a basic card and structure your card as shown in the code snippet.
</p>

<div class="avatar-container">

    <div class="card basic-card">
        <div class="card-content">
            <p class="card-title">Word of the Day</p>
            <p class="card-header">be•nev•o•lent</p>
            <p class="card-sub-header">adjective</p>
            <p class="card-description">well meaning and kindly. </p>
            <p class="card-description"> "a benevolent smile"</p>
            <button class="btn btn-text-secondary card-btn">LEARN MORE</button>
        </div>
    </div>

</div>

<div class="code-snippet-display">
    <code>
        <iframe
            src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=one-light&wt=none&l=htmlmixed&width=650&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=143%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522card%2520basic-card%2522%253E%250A%2509%253Cdiv%2520class%253D%2522card-content%2522%253E%250A%2509%2509%253Cp%2520class%253D%2522card-title%2522%253EWord%2520of%2520the%2520Day%253C%252Fp%253E%250A%2509%2509%253Cp%2520class%253D%2522card-header%2522%253Ebe%25E2%2580%25A2nev%25E2%2580%25A2o%25E2%2580%25A2lent%253C%252Fp%253E%250A%2509%2509%253Cp%2520class%253D%2522card-sub-header%2522%253Eadjective%253C%252Fp%253E%250A%2509%2509%253Cp%2520class%253D%2522card-description%2522%253Ewell%2520meaning%2520and%2520kindly.%2520%253C%252Fp%253E%250A%2509%2509%253Cp%2520class%253D%2522card-description%2522%253E%2520%2522a%2520benevolent%2520smile%2522%253C%252Fp%253E%250A%2509%2509%253Cbutton%2520class%253D%2522btn%2520btn-text-secondary%2520card-btn%2522%253ELEARN%2520MORE%253C%252Fbutton%253E%250A%2509%253C%252Fdiv%253E%250A%253C%252Fdiv%253E"
            style="border:0; transform: scale(1); overflow:hidden;"
            sandbox="allow-scripts allow-same-origin">
        </iframe>
    </code>
</div>

<p class="sub-header">Example of Image in Basic Card</p>

<p>A basic card can also contain an image to convey the necessary information. It can be used in video streaming platforms or to dislay subscription plans on any website.</p>
<p>Use class name = <span class="bold-font blue-text">card</span>
    and add class name = <span class="bold-font red-text">image-card </span>for a basic card.
</p>

<div class="avatar-container">

    <div class="card image-card">

        <div class="card-img-container">
            <img src="images/card-img.png" class="card-img" alt="">
        </div>
        <div class="card-content">
            <p class="card-header">Become a Culer.</p>
            <p class="card-description">You'll have access to all FC Barcelona's exclusive content and
                you'll get disconts on matchday tickets.</p>
            <div class="card-button-container">
                <button class="btn btn-contained-primary card-btn">JOIN NOW</button>
                <button class="btn btn-text-secondary card-btn">LEARN MORE</button>
            </div>
        </div>
    </div>

</div>

<div class="code-snippet-display">
    <code>
        <iframe
            src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=one-light&wt=none&l=htmlmixed&width=650&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=143%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522card%2520image-card%2522%253E%250A%2509%253Cdiv%2520class%253D%2522card-img-container%2522%253E%250A%2509%2509%253Cimg%2520src%253D%2522images%252Fcard-img.png%2522%2520class%253D%2522card-img%2522%2520alt%253D%2522%2522%253E%250A%2509%253C%252Fdiv%253E%250A%2509%253Cdiv%2520class%253D%2522card-content%2522%253E%250A%2509%2509%253Cp%2520class%253D%2522card-header%2522%253EBecome%2520a%2520Culer.%253C%252Fp%253E%250A%2509%2509%253Cp%2520class%253D%2522card-description%2522%253EYou%27ll%2520have%2520access%2520to%2520all%2520FC%2520Barcelona%27s%2520exclusive%2520%2509%2509%2509%2509%2509content%2520and%2520you%27ll%2520get%2520disconts%2520on%2520matchday%2520tickets.%253C%252Fp%253E%250A%2509%2509%253Cdiv%2520class%253D%2522card-button-container%2522%253E%250A%2509%2509%2509%253Cbutton%2520class%253D%2522btn%2520btn-contained-primary%2520card-btn%2522%253EJOIN%2520NOW%253C%252Fbutton%253E%250A%2509%2509%2509%253Cbutton%2520class%253D%2522btn%2520btn-text-secondary%2520card-btn%2522%253ELEARN%2520MORE%253C%252Fbutton%253E%250A%2509%2509%253C%252Fdiv%253E%250A%2509%253C%252Fdiv%253E%250A%253C%252Fdiv%253E"
            style="border:0; transform: scale(1); overflow:hidden;"
            sandbox="allow-scripts allow-same-origin">
        </iframe>
    </code>
</div>

<p class="sub-header">Example of Card with Text Overlay</p>

<p>A card can have an overlayed text which will display on hover.</p>
<p>Use class name = <span class="bold-font blue-text">overlay-card</span>
    in parent div for an overlayed card and use class name = <span class="bold-font red-text">overlay-text
    </span>in the element you want to overlay.

</p>

<div class="avatar-container">

    <div class="card-container">

        <div class="overlay-card">

            <img class="overlay-card-image" src="/images/men-home-kit.png" alt="">

            <div class="overlay-text">
                <p class="overlay-img-description">FC Barcelona Men's Home Kit 2021/22 </p>
                <button class="btn btn-contained-primary">SHOP NOW</button>
            </div>

        </div>

        <div class="overlay-card">

            <img class="overlay-card-image" src="/images/women-away-kit.png" alt="">

            <div class="overlay-text">
                <p class="overlay-img-description">FC Barcelona Women's Away Kit 2021/22 </p>
                <button class="btn btn-contained-primary">SHOP NOW</button>
            </div>

        </div>

        <div class="overlay-card">

            <img class="overlay-card-image" src="/images/depay.png" alt="">

            <div class="overlay-text">
                <p class="overlay-img-description">DEPAY</p>
                <button class="btn btn-contained-primary">SHOP NOW</button>
            </div>

        </div>

        <div class="overlay-card">

            <img class="overlay-card-image" src="/images/pique.png" alt="">

            <div class="overlay-text">
                <p class="overlay-img-description">PIQUE</p>
                <button class="btn btn-contained-primary">SHOP NOW</button>
            </div>

        </div>

    </div>

</div>

<div class="code-snippet-display">
    <code>
        <iframe
            src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=one-light&wt=none&l=htmlmixed&width=650&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=143%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522overlay-card%2522%253E%250A%2509%253Cimg%2520class%253D%2522overlay-card-image%2522%2520src%253D%2522%252Fimages%252Fmen-home-kit.png%2522%2520alt%253D%2522%2522%253E%250A%2509%253Cdiv%2520class%253D%2522overlay-text%2522%253E%250A%2509%2509%253Cp%2520class%253D%2522overlay-img-description%2522%253EFC%2520Barcelona%2520Men%27s%2520Home%2520Kit%25202021%252F22%2520%253C%252Fp%253E%250A%2509%2509%253Cbutton%2520class%253D%2522btn%2520btn-contained-primary%2522%253ESHOP%2520NOW%253C%252Fbutton%253E%250A%2509%253C%252Fdiv%253E%250A%253C%252Fdiv%253E%250A%250A%253Cdiv%2520class%253D%2522overlay-card%2522%253E%250A%2509%253Cimg%2520class%253D%2522overlay-card-image%2522%2520src%253D%2522%252Fimages%252Fwomen-away-kit.png%2522%2520alt%253D%2522%2522%253E%250A%2520%2509%253Cdiv%2520class%253D%2522overlay-text%2522%253E%250A%2509%2509%253Cp%2520class%253D%2522overlay-img-description%2522%253EFC%2520Barcelona%2520Women%27s%2520Away%2520Kit%25202021%252F22%2520%253C%252Fp%253E%250A%2509%2509%253Cbutton%2520class%253D%2522btn%2520btn-contained-primary%2522%253ESHOP%2520NOW%253C%252Fbutton%253E%250A%2509%253C%252Fdiv%253E%250A%253C%252Fdiv%253E%250A%250A%253Cdiv%2520class%253D%2522overlay-card%2522%253E%250A%2509%253Cimg%2520class%253D%2522overlay-card-image%2522%2520src%253D%2522%252Fimages%252Fdepay.png%2522%2520alt%253D%2522%2522%253E%250A%2509%253Cdiv%2520class%253D%2522overlay-text%2522%253E%250A%2509%2509%253Cp%2520class%253D%2522overlay-img-description%2522%253EDEPAY%253C%252Fp%253E%250A%2509%2509%253Cbutton%2520class%253D%2522btn%2520btn-contained-primary%2522%253ESHOP%2520NOW%253C%252Fbutton%253E%250A%2509%253C%252Fdiv%253E%250A%253C%252Fdiv%253E%250A%250A%253Cdiv%2520class%253D%2522overlay-card%2522%253E%250A%2509%253Cimg%2520class%253D%2522overlay-card-image%2522%2520src%253D%2522%252Fimages%252Fpique.png%2522%2520alt%253D%2522%2522%253E%250A%2520%2509%253Cdiv%2520class%253D%2522overlay-text%2522%253E%250A%2509%2509%253Cp%2520class%253D%2522overlay-img-description%2522%253EPIQUE%253C%252Fp%253E%250A%2509%2509%253Cbutton%2520class%253D%2522btn%2520btn-contained-primary%2522%253ESHOP%2520NOW%253C%252Fbutton%253E%250A%2509%253C%252Fdiv%253E%250A%253C%252Fdiv%253E"
            style="border:0; transform: scale(1); overflow:hidden;"
            sandbox="allow-scripts allow-same-origin">
        </iframe>
    </code>
</div>

<p class="sub-header">Example of Vertical Product Cards</p>

<p>A vertical product card is normally used in e-commerce websites to display product details in concise manner.</p>
<p>A vertical card can have a text-badge or an overlayed text.</p>
<p>Use class name = <span class="bold-font blue-text">card</span>
    and add class name = <span class="bold-font red-text">product-card </span>for a vertical product card.
</p>
<p>Use class name = <span class="bold-font blue-text">card product-card text-badge-container</span>
    in the parent element and use class name = <span class="bold-font red-text">text-badge badge-primary </span>for a text-badge on the card.
</p>
<p>Use class name = <span class="bold-font blue-text">overlay-text</span> for a div which is child of class = 
    <span class="bold-font red-text">product-card </span>for an overlay on the card.
</p>

<div class="avatar-container">

    <div class="card-container">

        <div class=" card product-card">
            <div class="product-image">
                <img src="/images/men-home-kit-jersey.png" alt="">
                <button class="btn btn-wishlist"><span class="material-icons">
                        favorite_border
                    </span></button>
            </div>
            <p class="product-name">Men Home Kit Jersey</p>
            <p class="product-price">₹ 4000</p>
            <button class=" btn btn-contained-primary btn-add-to-cart">
                <span><i class="fas fa-shopping-cart"> </i>
                    Add to Cart</span>
            </button>

        </div>

        <div class=" card product-card text-badge-container">
            <div class="product-image badge-container">
                <img src="/images/adidas-x-19.1-sg.png" alt="">
                <span class="text-badge badge-primary">New</span>
                <button class="btn btn-wishlist"><span class="material-icons">
                        favorite_border
                    </span></button>
            </div>
            <p class="product-name">Adidas X 19.1 SG</p>
            <p class="product-price">₹ 3999</p>
            <button class=" btn btn-contained-primary btn-add-to-cart">
                <span><i class="fas fa-shopping-cart"> </i>
                    Add to Cart</span>
            </button>
        </div>

        <div class=" card product-card">
            <div class="product-image">
                <img src="/images/adidas-x-speedflow.png" alt="">

                <button class="btn btn-wishlist"><span class="material-icons">
                        favorite_border
                    </span></button>
            </div>
            <p class="product-name">Adidas X Speedflow</p>
            <p class="product-price">₹ 7500</p>
            <button class=" btn btn-contained-primary btn-add-to-cart">
                <span><i class="fas fa-shopping-cart"> </i>
                    Add to Cart</span>
            </button>

            <div class="overlay-text">
                <p class="overlay-img-description">OUT OF STOCK</p>
            </div>
        </div>
    </div>

</div>

<div class="code-snippet-display">
    <code>
        <iframe
            src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=one-light&wt=none&l=htmlmixed&width=650&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=143%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522%2520card%2520product-card%2522%253E%250A%2509%253Cdiv%2520class%253D%2522product-image%2522%253E%250A%2509%2509%253Cimg%2520src%253D%2522%252Fimages%252Fmen-home-kit-jersey.png%2522%2520alt%253D%2522%2522%253E%250A%2509%2509%253Cbutton%2520class%253D%2522btn%2520btn-wishlist%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522material-icons%2522%253Efavorite_border%253C%252Fspan%253E%253C%252Fbutton%253E%250A%2509%253C%252Fdiv%253E%250A%2509%253Cp%2520class%253D%2522product-name%2522%253EMen%2520Home%2520Kit%2520Jersey%253C%252Fp%253E%250A%2509%253Cp%2520class%253D%2522product-price%2522%253E%25E2%2582%25B9%25204000%253C%252Fp%253E%250A%2509%253Cbutton%2520class%253D%2522%2520btn%2520btn-contained-primary%2520btn-add-to-cart%2522%253E%250A%2509%2509%253Cspan%253E%253Ci%2520class%253D%2522fas%2520fa-shopping-cart%2522%253E%2520%253C%252Fi%253EAdd%2520to%2520Cart%253C%252Fspan%253E%253C%252Fbutton%253E%250A%253C%252Fdiv%253E%250A%250A%253Cdiv%2520class%253D%2522%2520card%2520product-card%2520text-badge-container%2522%253E%250A%2509%253Cdiv%2520class%253D%2522product-image%2520badge-container%2522%253E%250A%2509%2509%253Cimg%2520src%253D%2522%252Fimages%252Fadidas-x-19.1-sg.png%2522%2520alt%253D%2522%2522%253E%250A%2509%2509%253Cspan%2520class%253D%2522text-badge%2520badge-primary%2522%253ENew%253C%252Fspan%253E%250A%2509%2509%253Cbutton%2520class%253D%2522btn%2520btn-wishlist%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2509%253Cspan%2520class%253D%2522material-icons%2522%253Efavorite_border%253C%252Fspan%253E%253C%252Fbutton%253E%250A%2509%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253Cp%2520class%253D%2522product-name%2522%253EAdidas%2520X%252019.1%2520SG%253C%252Fp%253E%250A%2520%2520%2520%2520%253Cp%2520class%253D%2522product-price%2522%253E%25E2%2582%25B9%25203999%253C%252Fp%253E%250A%2520%2520%2520%2520%253Cbutton%2520class%253D%2522%2520btn%2520btn-contained-primary%2520btn-add-to-cart%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%253E%253Ci%2520class%253D%2522fas%2520fa-shopping-cart%2522%253E%2520%253C%252Fi%253EAdd%2520to%2520Cart%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%253C%252Fbutton%253E%250A%253C%252Fdiv%253E%250A%250A%253Cdiv%2520class%253D%2522%2520card%2520product-card%2522%253E%250A%2509%253Cdiv%2520class%253D%2522product-image%2522%253E%250A%2509%2509%253Cimg%2520src%253D%2522%252Fimages%252Fadidas-x-speedflow.png%2522%2520alt%253D%2522%2522%253E%250A%2509%2509%253Cbutton%2520class%253D%2522btn%2520btn-wishlist%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522material-icons%2522%253Efavorite_border%253C%252Fspan%253E%253C%252Fbutton%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253Cp%2520class%253D%2522product-name%2522%253EAdidas%2520X%2520Speedflow%253C%252Fp%253E%250A%2520%2520%2520%2520%253Cp%2520class%253D%2522product-price%2522%253E%25E2%2582%25B9%25207500%253C%252Fp%253E%250A%2520%2520%2520%2520%253Cbutton%2520class%253D%2522%2520btn%2520btn-contained-primary%2520btn-add-to-cart%2522%253E%250A%2520%2520%2520%2520%2520%2509%253Cspan%253E%253Ci%2520class%253D%2522fas%2520fa-shopping-cart%2522%253E%2520%253C%252Fi%253EAdd%2520to%2520Cart%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%253C%252Fbutton%253E%250A%2509%253Cdiv%2520class%253D%2522overlay-text%2522%253E%250A%2509%2509%253Cp%2520class%253D%2522overlay-img-description%2522%253EOUT%2520OF%2520STOCK%253C%252Fp%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%253C%252Fdiv%253E"
            style="border:0; transform: scale(1); overflow:hidden;"
            sandbox="allow-scripts allow-same-origin">
        </iframe>
    </code>
</div>

<p class="sub-header">Example of Horizontal Product Cards</p>

<p>A horizontal product card is normally used in my-cart section of an e-commerce websites.</p>
<p>Use class name = <span class="bold-font blue-text">my-cart-product-card</span>
    and structure the card as shown in the code snippet according to your needs.
</p>

<div class="avatar-container">

    <div class="card-container">

        <div class="my-cart-product-card">
            <div class="my-cart-product-image-div">
                <img src="/images/adidas-x-19.1-sg.png" alt="">

            </div>
            <div class="my-cart-product-description-div">
                <p class="product-name">Adidas X 19.1 SG</p>
                <h4 class="product-price">Rs. 3999</h4>
                <label for="size">Size:</label>
                <select name="size" id="size">
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
                <div class="quantity-btns">
                    <button class="horizontal-card-btn">+</button>
                    <span class="quantity">0</span>
                    <button class="horizontal-card-btn">-</button>
                </div>
            </div>
            <div class="product-card-btns-div">
                <button id="delete-btn"><span class="material-icons">delete</span></button><br>
                <button class="btn btn-text-secondary wishlit-btn">MOVE TO WISHLIST</button>
            </div>
        </div>

        <div class="my-cart-product-card">
            <div class="my-cart-product-image-div">
                <img src="/images/men-away-kit-jersey.png" alt="">
            </div>
            <div class="my-cart-product-description-div">
                <p class="product-name">Men Home Kit Jersey</p>
                <h4 class="product-price">Rs. 3999</h4>
                <label for="size">Size:</label>
                <select name="size" id="size">
                    <option value="small">S</option>
                    <option value="medium">M</option>
                    <option value="large">L</option>
                    <option value="x-large">XL</option>
                </select>
                <div class="quantity-btns">
                    <button class="horizontal-card-btn">+</button>
                    <span class="quantity">0</span>
                    <button class="horizontal-card-btn">-</button>
                </div>
            </div>
            <div class="product-card-btns-div">
                <button id="delete-btn"><span class="material-icons">delete</span></button><br>
                <button class="btn btn-text-secondary wishlit-btn">MOVE TO WISHLIST</button>
            </div>
        </div>
    </div>

</div>

<div class="code-snippet-display">
    <code>
        <iframe
            src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=one-light&wt=none&l=htmlmixed&width=650&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=143%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522my-cart-product-card%2522%253E%250A%2509%253Cdiv%2520class%253D%2522my-cart-product-image-div%2522%253E%250A%2520%2509%2509%253Cimg%2520src%253D%2522%252Fimages%252Fadidas-x-19.1-sg.png%2522%2520alt%253D%2522%2522%253E%250A%2509%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522my-cart-product-description-div%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522product-name%2522%253EAdidas%2520X%252019.1%2520SG%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch4%2520class%253D%2522product-price%2522%253ERs.%25203999%253C%252Fh4%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Clabel%2520for%253D%2522size%2522%253ESize%253A%253C%252Flabel%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cselect%2520name%253D%2522size%2522%2520id%253D%2522size%2522%253E%250A%2509%2509%2509%2509%253Coption%2520value%253D%25227%2522%253E7%253C%252Foption%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Coption%2520value%253D%25228%2522%253E8%253C%252Foption%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Coption%2520value%253D%25229%2522%253E9%253C%252Foption%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Coption%2520value%253D%252210%2522%253E10%253C%252Foption%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fselect%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522quantity-btns%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522horizontal-card-btn%2522%253E%252B%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522quantity%2522%253E0%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522horizontal-card-btn%2522%253E-%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522product-card-btns-div%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520id%253D%2522delete-btn%2522%253E%253Cspan%2520class%253D%2522material-icons%2522%253Edelete%253C%252Fspan%253E%253C%252Fbutton%253E%253Cbr%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522btn%2520btn-text-secondary%2520wishlit-btn%2522%253EMOVE%2520TO%2520WISHLIST%253C%252Fbutton%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%253C%252Fdiv%253E"
            style="border:0; transform: scale(1); overflow:hidden;"
            sandbox="allow-scripts allow-same-origin">
        </iframe>
    </code>
</div>

<p class="sub-header">Example of UI Control Cards</p>

<p>Supplemental actions within the card are explicitly called out using icons, text, and UI controls,
    typically placed at the bottom of the card. It can be used on music streaming platforms like Spotify.</p>
<p>Use class name = <span class="bold-font blue-text">music-card</span>
    and structure the card as shown in the code snippet according to your needs.
</p>

<div class="avatar-container">

    <div class="card-container">

        <div class="music-card">

            <div class="music-card-img-container">
                <img src="images//music-image.png" alt="">
            </div>

            <div class="card-description">

                <div class="card-text">
                    <p class="music-card-title">'Till I Collapse</p>
                    <p class="music-card-descp">Eminem, Nate Dogg</p>
                </div>

                <div class="btn-container">
                    <span><i class="fas fa-backward"></i></span>
                    <span><i class="fas fa-play"></i></span>
                    <span><i class="fas fa-forward"></i></span>
                </div>
            </div>

        </div>

    </div>
</div>

<div class="code-snippet-display">
    <code>
        <iframe
            src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=one-light&wt=none&l=htmlmixed&width=650&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=143%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522music-card%2522%253E%250A%2509%253Cdiv%2520class%253D%2522music-card-img-container%2522%253E%250A%2509%2509%253Cimg%2520src%253D%2522images%252F%252Fmusic-image.png%2522%2520alt%253D%2522%2522%253E%250A%2509%253C%252Fdiv%253E%250A%250A%2509%253Cdiv%2520class%253D%2522card-description%2522%253E%250A%2509%2509%253Cdiv%2520class%253D%2522card-text%2522%253E%250A%2509%2509%2509%253Cp%2520class%253D%2522music-card-title%2522%253E%27Till%2520I%2520Collapse%253C%252Fp%253E%250A%2509%2509%2509%253Cp%2520class%253D%2522music-card-descp%2522%253EEminem%252C%2520Nate%2520Dogg%253C%252Fp%253E%250A%2509%2509%253C%252Fdiv%253E%250A%2509%2509%253Cdiv%2520class%253D%2522btn-container%2522%253E%250A%2509%2509%2509%253Cspan%253E%253Ci%2520class%253D%2522fas%2520fa-backward%2522%253E%253C%252Fi%253E%253C%252Fspan%253E%250A%2509%2509%2509%253Cspan%253E%253Ci%2520class%253D%2522fas%2520fa-play%2522%253E%253C%252Fi%253E%253C%252Fspan%253E%250A%2509%2509%2509%253Cspan%253E%253Ci%2520class%253D%2522fas%2520fa-forward%2522%253E%253C%252Fi%253E%253C%252Fspan%253E%250A%2509%2509%253C%252Fdiv%253E%250A%2509%253C%252Fdiv%253E%250A%253C%252Fdiv%253E"
            style="border:0; transform: scale(1); overflow:hidden;"
            sandbox="allow-scripts allow-same-origin">
        </iframe>
    </code>
</div>

<p class="sub-header">Example of Cards with Gradient Background</p>

<p>If your website has a funky look then you can also use these funky looking cards.</p>
<p>We have two types of gradients available:</p>
<p>Use class name = <span class="bold-font blue-text">light-gradient-card</span>
    in parent element for gradient effect of light colors and add class name = <span class="bold-font red-text">card basic-card/image-card </span>according to your use case.
</p>

<p>Use class name = <span class="bold-font blue-text">dark-gradient-card</span>
    in parent element for gradient effect of dark colors and add class name = <span class="bold-font red-text">card basic-card/image-card </span>according to your use case.
</p>

<div class="avatar-container">

    <div class="card-container">

        <div class="card image-card light-gradient-card">

            <div class="card-img-container">
                <img src="images/card-img.png" class="card-img" alt="">
            </div>
            <div class="card-content">
                <p class="card-header">Become a Culer.</p>
                <p class="card-description">You'll have access to all FC Barcelona's exclusive content
                    and
                    you'll get disconts on matchday tickets.</p>
                <div class="card-button-container">
                    <button class="btn btn-contained-primary card-btn">JOIN NOW</button>
                    <button class="btn btn-text-secondary card-btn">LEARN MORE</button>
                </div>
            </div>
        </div>

        <div class="card image-card dark-gradient-card">

            <div class="card-img-container">
                <img src="images/card-img.png" class="card-img" alt="">
            </div>
            <div class="card-content">
                <p class="card-header">Become a Culer.</p>
                <p class="card-description" style="color: white;">You'll have access to all FC
                    Barcelona's exclusive content and
                    you'll get disconts on matchday tickets.</p>
                <div class="card-button-container">
                    <button class="btn btn-contained-primary card-btn">JOIN NOW</button>
                    <button class="btn btn-outlined-secondary card-btn">LEARN MORE</button>
                </div>
            </div>
        </div>

        <div class=" card basic-card light-gradient-card">
            <div class="card-content">
                <p class="card-title">Word of the Day</p>
                <p class="card-header">cu•ler</p>
                <p class="card-sub-header">adjective</p>
                <p class="card-description">fan of FC Barcelona.</p>
                <p class="card-description"> "I'm a culer"</p>
                <button class="btn btn-text-secondary card-btn">LEARN MORE</button>
            </div>
        </div>

    </div>
</div>

<div class="code-snippet-display">
    <code>
        <iframe
            src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=one-light&wt=none&l=htmlmixed&width=650&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=143%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522card%2520image-card%2520light-gradient-card%2522%253E%250A%2509%253Cdiv%2520class%253D%2522card-img-container%2522%253E%250A%2509%2509%253Cimg%2520src%253D%2522images%252Fcard-img.png%2522%2520class%253D%2522card-img%2522%2520alt%253D%2522%2522%253E%250A%2509%253C%252Fdiv%253E%250A%2509%253Cdiv%2520class%253D%2522card-content%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522card-header%2522%253EBecome%2520a%2520Culer.%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522card-description%2522%253EYou%27ll%2520have%2520access%2520to%2520all%2520FC%2520Barcelona%27s%2520exclusive%2520%2509%2509%2509%2509%2509%2509content%2520and%2520you%27ll%2520get%2520disconts%2520on%2520matchday%2520tickets.%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522card-button-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2509%253Cbutton%2520class%253D%2522btn%2520btn-contained-primary%2520card-btn%2522%253EJOIN%2520NOW%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2509%253Cbutton%2520class%253D%2522btn%2520btn-text-secondary%2520card-btn%2522%253ELEARN%2520MORE%253C%252Fbutton%253E%250A%2509%2509%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%253C%252Fdiv%253E%250A%250A%253Cdiv%2520class%253D%2522card%2520image-card%2520dark-gradient-card%2522%253E%250A%2509%253Cdiv%2520class%253D%2522card-img-container%2522%253E%250A%2509%2509%253Cimg%2520src%253D%2522images%252Fcard-img.png%2522%2520class%253D%2522card-img%2522%2520alt%253D%2522%2522%253E%250A%2509%253C%252Fdiv%253E%250A%2509%253Cdiv%2520class%253D%2522card-content%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522card-header%2522%253EBecome%2520a%2520Culer.%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522card-description%2522%253EYou%27ll%2520have%2520access%2520to%2520all%2520FC%2520Barcelona%27s%2520exclusive%2520%2509%2509%2509%2509%2509%2509content%2520and%2520you%27ll%2520get%2520disconts%2520on%2520matchday%2520tickets.%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522card-button-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2509%253Cbutton%2520class%253D%2522btn%2520btn-contained-primary%2520card-btn%2522%253EJOIN%2520NOW%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2509%253Cbutton%2520class%253D%2522btn%2520btn-text-secondary%2520card-btn%2522%253ELEARN%2520MORE%253C%252Fbutton%253E%250A%2509%2509%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%253C%252Fdiv%253E%250A%250A%253Cdiv%2520class%253D%2522%2520card%2520basic-card%2520light-gradient-card%2522%253E%250A%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522card-content%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522card-title%2522%253EWord%2520of%2520the%2520Day%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522card-header%2522%253Ecu%25E2%2580%25A2ler%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522card-sub-header%2522%253Eadjective%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522card-description%2522%253Efan%2520of%2520FC%2520Barcelona.%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522card-description%2522%253E%2520%2522I%27m%2520a%2520culer%2522%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522btn%2520btn-text-secondary%2520card-btn%2522%253ELEARN%2520MORE%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%253C%252Fdiv%253E"
            style="border:0; transform: scale(1); overflow:hidden;"
            sandbox="allow-scripts allow-same-origin">
        </iframe>
    </code>
</div>
`;

document.querySelector("#Cards").appendChild(cardsTemplate.content);