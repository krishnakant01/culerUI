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
`;

document.querySelector("#Grid").appendChild(gridTemplate.content);