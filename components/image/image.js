const imageTemplate = document.createElement('template');

imageTemplate.innerHTML = `

<p class="component-header">Image</p>

<p class="header-description">Images can be responsive to fit the parent's width, and also can be
    customised to be round shaped.</p>

<p class="sub-header">Example of Responsive Image</p>

<p class="">You can add class <span class="bold-font red-text">img-responsive</span> to make your image
    fit the width of container.
    It's height will get adjusted by keeping the aspect ratio same.
    If you want to change the aspect ratio, you will have to crop the image.</p>

<div class="bar-container">
        <img src="/images/camp-nou.png" class="image-responsive" alt="image">
</div>

<div class="code-snippet-display">
    <code>
        <iframe
            src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=one-light&wt=none&l=htmlmixed&width=650&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=143%25&si=false&es=2x&wm=false&code=%2520%253Cimg%2520src%253D%2522%252Fimages%252Fcamp-nou.png%2522%2520class%253D%2522image-responsive%2522%2520alt%253D%2522image%2522%253E"
            style="border:0; transform: scale(1); overflow:hidden;"
            sandbox="allow-scripts allow-same-origin">
        </iframe>
    </code>
</div>

<p class="sub-header">Example of Round Image</p>

<p class="">You can add class <span class="bold-font red-text">img-round</span> to make your image round shaped. 
    </p>

<div class="bar-container">
        <img src="/images/women-away-kit.png" class="image-round" alt="round-image">
</div>  

<div class="code-snippet-display">
    <code>
        <iframe
            src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=one-light&wt=none&l=htmlmixed&width=650&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=143%25&si=false&es=2x&wm=false&code=%2520%2520%253Cimg%2520src%253D%2522%252Fimages%252Fwomen-away-kit.png%2522%2520class%253D%2522image-round%2522%2520alt%253D%2522round-image%2522%253E"
            style="border:0; transform: scale(1); overflow:hidden;"
            sandbox="allow-scripts allow-same-origin">
        </iframe>
    </code>
</div>

`;

document.querySelector("#Image").appendChild(imageTemplate.content);