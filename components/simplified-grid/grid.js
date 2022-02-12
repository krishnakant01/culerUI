const gridTemplate = document.createElement('template');

gridTemplate.innerHTML = `

<p class="component-header">Simplified Grid</p>
<p class="header-description">The grid creates visual consistency between layouts while allowing
    flexibility across a wide variety of designs.</p>

<p class="sub-header">Example of 50:50 grid layout</p>

<p>Add <span class="bold-font blue-text">grid-50-50-layout </span> class on wrapper div which is wrapping 2 divs.</p>

<div class="avatar-container">

    <div class="grid-50-50-layout">
        <div>
            <img src="images/pedri-grid.png" alt="" class="image-responsive">
        </div>
        <div class="grid-text-div">
            <h1 class="grid-heading">Pedri, a year of consolidation</h1>
            <p>Winner of the Kopa and Golden Boy trophies, the Barça midfielder had an outstanding 2021.
                In addition to the individual awards...</p>
            <button class="btn btn-contained-primary">Read more</button>
        </div>
    </div>

</div>

<div class="code-snippet-display">
        <code>
            <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=one-light&wt=none&l=htmlmixed&width=650&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=143%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522grid-50-50-layout%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522images%252Fpedri-grid.png%2522%2520alt%253D%2522%2522%2520class%253D%2522image-responsive%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522grid-text-div%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch1%2520class%253D%2522grid-heading%2522%253EPedri%252C%2520a%2520year%2520of%2520consolidation%253C%252Fh1%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253EWinner%2520of%2520the%2520Kopa%2520and%2520Golden%2520Boy%2520trophies%252C%2520the%2520Bar%25C3%25A7a%2520midfielder%2520had%2520an%2520outstanding%25202021.%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520In%2520addition%2520to%2520the%2520individual%2520awards...%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522btn%2520btn-contained-primary%2522%253ERead%2520more%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%253C%252Fdiv%253E"
                style="border:0; transform: scale(1); overflow:hidden;"
                sandbox="allow-scripts allow-same-origin">
            </iframe>
        </code>
</div>

<p class="sub-header">Example of 70:30 grid layout</p>

<p>Add <span class="bold-font red-text">grid-70-30-layout </span> class on wrapper div which is wrapping 2 divs.</p>

<div class="avatar-container">

    <div class="grid-70-30-layout grid-dark-bg">
        <div>
            <img src="images/Alexia-Putellas-grid.png" alt="" class="image-responsive">
        </div>
        <div class="grid-text-div">
            <h1 class="grid-heading">Alexia Putellas, an unforgettable 2021</h1>
            <p>The Barça captain has been one of the world's standout footballers in 2021. The Catalan
                midfielder...</p>
            <button class="btn btn-text-primary card-btn">READ MORE</button>
        </div>
    </div>

</div>

<div class="code-snippet-display">
        <code>
            <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=one-light&wt=none&l=htmlmixed&width=650&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=143%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522grid-70-30-layout%2520grid-dark-bg%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522images%252FAlexia-Putellas-grid.png%2522%2520alt%253D%2522%2522%2520class%253D%2522image-responsive%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522grid-text-div%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ch1%2520class%253D%2522grid-heading%2522%253EAlexia%2520Putellas%252C%2520an%2520unforgettable%25202021%253C%252Fh1%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%253EThe%2520Bar%25C3%25A7a%2520captain%2520has%2520been%2520one%2520of%2520the%2520world%27s%2520standout%2520footballers%2520in%25202021.%2520The%2520Catalan%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520midfielder...%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522btn%2520btn-text-primary%2520card-btn%2522%253EREAD%2520MORE%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%253C%252Fdiv%253E"
                style="border:0; transform: scale(1); overflow:hidden;"
                sandbox="allow-scripts allow-same-origin">
            </iframe>
        </code>
</div>

<p class="sub-header">Example of 4 column grid layout</p>

<p>Add <span class="bold-font red-text">grid-4-column-layout </span> class on wrapper div which is wrapping 2 divs.</p>

<div class="avatar-container">

    <div class="grid-4-column-layout">

        <div class=" card product-card text-badge-container">
            <div class="product-image badge-container">
                <img src="/images/gk-adidas-predator-pro.png" alt="">
                <span class="text-badge badge-primary">New</span>
                <button class="btn btn-wishlist"><span class="material-icons">
                        favorite_border
                    </span></button>
            </div>
            <p class="product-name">Adidas Predator Pro</p>
            <p class="product-price">₹ 9600</p>
            <button class=" btn btn-contained-primary btn-add-to-cart">
                <span><i class="fas fa-shopping-cart"> </i>
                    Add to Cart</span>
            </button>
        </div>

        <div class=" card product-card text-badge-container">
            <div class="product-image badge-container">
                <img src="/images/men-home-kit-jersey.png" alt="">
                <span class="text-badge badge-primary">New</span>
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
                <img src="/images/men-away-kit-jersey.png" alt="">
                <span class="text-badge badge-primary">New</span>
                <button class="btn btn-wishlist"><span class="material-icons">
                        favorite_border
                    </span></button>
            </div>
            <p class="product-name">Men Away Kit Jersey</p>
            <p class="product-price">₹ 4500</p>
            <button class=" btn btn-contained-primary btn-add-to-cart">
                <span><i class="fas fa-shopping-cart"> </i>
                    Add to Cart</span>
            </button>
        </div>

        <div class=" card product-card text-badge-container">
            <div class="product-image badge-container">
                <img src="/images/adidas-x-speedflow.png" alt="">
                <span class="text-badge badge-primary">New</span>
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
        </div>

    </div>

</div>

<div class="code-snippet-display">
        <code>
            <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=one-light&wt=none&l=htmlmixed&width=650&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=143%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522grid-4-column-layout%2522%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522%2520card%2520product-card%2520text-badge-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522product-image%2520badge-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522%252Fimages%252Fgk-adidas-predator-pro.png%2522%2520alt%253D%2522%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522text-badge%2520badge-primary%2522%253ENew%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522btn%2520btn-wishlist%2522%253E%253Cspan%2520class%253D%2522material-icons%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520favorite_border%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fspan%253E%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522product-name%2522%253EAdidas%2520Predator%2520Pro%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522product-price%2522%253E%25E2%2582%25B9%25209600%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522%2520btn%2520btn-contained-primary%2520btn-add-to-cart%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%253E%253Ci%2520class%253D%2522fas%2520fa-shopping-cart%2522%253E%2520%253C%252Fi%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Add%2520to%2520Cart%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522%2520card%2520product-card%2520text-badge-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522product-image%2520badge-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522%252Fimages%252Fmen-home-kit-jersey.png%2522%2520alt%253D%2522%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522text-badge%2520badge-primary%2522%253ENew%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522btn%2520btn-wishlist%2522%253E%253Cspan%2520class%253D%2522material-icons%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520favorite_border%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fspan%253E%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522product-name%2522%253EMen%2520Home%2520Kit%2520Jersey%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522product-price%2522%253E%25E2%2582%25B9%25204000%253C%252Fp%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522%2520btn%2520btn-contained-primary%2520btn-add-to-cart%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%253E%253Ci%2520class%253D%2522fas%2520fa-shopping-cart%2522%253E%2520%253C%252Fi%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Add%2520to%2520Cart%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522%2520card%2520product-card%2520text-badge-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522product-image%2520badge-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cimg%2520src%253D%2522%252Fimages%252Fmen-away-kit-jersey.png%2522%2520alt%253D%2522%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522text-badge%2520badge-primary%2522%253ENew%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520class%253D%2522btn%2520btn-wishlist%2522%253E%253Cspan%2520class%253D%2522material-icons%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520favorite_border%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fspan%253E%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Cp%2520class%253D%2522product-name%2522%253EMen%2520Away%2520Kit%2520"
                style="border:0; transform: scale(1); overflow:hidden;"
                sandbox="allow-scripts allow-same-origin">
            </iframe>
        </code>
</div>
`;

document.querySelector("#Grid").appendChild(gridTemplate.content);