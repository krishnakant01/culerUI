const cardsTemplate = document.createElement('template');

cardsTemplate.innerHTML = `

<p class="component-header">Cards</p>
<p class="header-description">Cards contain content and actions about a single subject.</p>
<p>Cards are surfaces that display content and actions on a single topic.
    They should be easy to scan for relevant and actionable information.
    Elements, like text and images, should be placed on them in a way that clearly indicates hierarchy.
</p>

<p>In Culer <span class="nav-U-I blue-text">U</span><span class="nav-U-I red-text">I</span>,
    we have various types of Cards available:
</p>

<p class="sub-header">Example of Basic Card</p>

<p>Although cards can support multiple actions, UI controls,
    and an overflow menu, use restraint and remember that cards are entry points to more complex and
    detailed information.</p>
<p>Use this to display simple information. Use class name = <span class="nav-U-I blue-text">card</span>
    and add class name = <span class="nav-U-I red-text">basic-card</span>
    for a basic card and structure your card as shown in the code snippet.
</p>

<div class="avatar-container">

    <div class=" card basic-card">
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

<p class="sub-header">Example of Image in Basic Card</p>

<p>A basic card can also contain an image to convey the necessary information. It can be used in video streaming platforms or to dislay subscription plans on any website.</p>
<p>Use class name = <span class="nav-U-I blue-text">card</span>
    and add class name = <span class="nav-U-I red-text">image-card </span>for a basic card.
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


<p class="sub-header">Example of Card with Text Overlay</p>

<p>A card can have an overlayed text which will display on hover.</p>
<p>Use class name = <span class="nav-U-I blue-text">overlay-card</span>
    in parent div for an overlayed card and use class name = <span class="nav-U-I red-text">overlay-text
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

<p class="sub-header">Example of Vertical Product Cards</p>

<p>A vertical product card is normally used in e-commerce websites to display product details in concise manner.</p>
<p>Use class name = <span class="nav-U-I blue-text">card</span>
    and add class name = <span class="nav-U-I red-text">product-card </span>for a vertical product card.
</p>

<div class="avatar-container">

    <div class="card-container">

        <div class=" card product-card">
            <div class="product-image">
                <img src="/images/adidas-x-19.1-sg.png" alt="">

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

        <div class=" card product-card">
            <div class="product-image">
                <img src="/images/adidas-x-speedflow.png" alt="">

                <button class="btn btn-wishlist"><span class="material-icons">
                        favorite_border
                    </span></button>
            </div>
            <p class="product-name">Adidas X 19.1 SG</p>
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


<p class="sub-header">Example of Horizontal Product Cards</p>

<p>A horizontal product card is normally used in my-cart section of an e-commerce websites.</p>
<p>Use class name = <span class="nav-U-I blue-text">card</span>
    and add class name = <span class="nav-U-I red-text">image-card </span>for a basic card.
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

<p class="sub-header">Example of UI Control Cards</p>

<p>Supplemental actions within the card are explicitly called out using icons, text, and UI controls,
    typically placed at the bottom of the card. It can be used on music streaming platforms like Spotify.</p>
<p>Use class name = <span class="nav-U-I blue-text">card</span>
    and add class name = <span class="nav-U-I red-text">image-card </span>for a basic card.
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


<p class="sub-header">Example of Cards with Gradient Background</p>

<p>If your website has a funky look then you can also use these funky looking cards.</p>
<p>Use class name = <span class="nav-U-I blue-text">card</span>
    and add class name = <span class="nav-U-I red-text">image-card </span>for a basic card.
</p>

<div class="avatar-container">

    <div class="card-container">

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



    </div>
</div>

`;

document.querySelector("#Cards").appendChild(cardsTemplate.content);