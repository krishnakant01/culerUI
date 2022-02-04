const imageTemplate = document.createElement('template');

imageTemplate.innerHTML = `

<p class="component-header">Images</p>

<p class="header-description">Images can be responsive to fit the parent's width, and also can be
    customised to be round shaped.</p>

<p class="sub-header">Example of Responsive Image</p>

<p class="">You can add class <span class="nav-U-I red-text">img-responsive</span> to make your image
    fit the width of container.
    It's height will get adjusted by keeping the aspect ratio same.
    If you want to change the aspect ratio, you will have to crop the image.</p>

<div class="bar-container">
        <img src="/images/camp-nou.png" class="image-responsive" alt="">
</div>

<p class="sub-header">Example of Round Image</p>

<p class="">You can add class <span class="nav-U-I red-text">img-round</span> to make your image round shaped. 
    </p>

<div class="bar-container">
        <img src="/images/women-away-kit.png" class="image-round" alt="">
</div>    
`;

document.querySelector("#Image").appendChild(imageTemplate.content);