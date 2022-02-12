const avatarTemplate = document.createElement('template');

avatarTemplate.innerHTML = `

<p class="component-header">Avatar</p>
<p class="header-description">Avatars are user profile pictures, usually found in circular shapes.
    Avatars can be used for 'container' objects — projects, spaces, repositories, etcetera — to give
    them a recognisable visual identity.</p>
<p>In Culer <span class="bold-font blue-text">U</span><span class="bold-font red-text">I</span>,
    we have 2 types of Avatar available:
</p>
<p>1. Image Avatar.</p>
<p>2. Text Avatar.</p>
<p>Avatars are available in 3 sizes:</p>
<p>1. Large size.</p>
<p>2. Medium size.</p>
<p>3. Small size.</p>

<p class="sub-header">Example of Image Avatar</p>

<p>Image Avatars are most commonly used for profile pictures.</p>
<p>Use class name = <span class="bold-font blue-text">avatar</span>
    for avatar and class name = <span class="bold-font red-text">lg-size, m-size, s-size </span>for sizes.</p>

<div class="avatar-container">

    <div class="avatar lg-size">
        <img src="images/avatar.png" class="img-round img-responsive" alt="avatar-lg">
    </div>

    <div class="avatar m-size">
        <img src="images/avatar.png" class="img-round img-responsive" alt="avatar-m">
    </div>

    <div class="avatar s-size">
        <img src="images/avatar.png" class="img-round img-responsive" alt="avatar-sm">
    </div>
</div>

<div class="code-snippet-display">
    <code>
        <iframe
            src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=one-light&wt=none&l=htmlmixed&width=650&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=143%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522avatar%2520lg-size%2522%253E%250A%2509%253Cimg%2520src%253D%2522images%252Favatar.png%2522%2520class%253D%2522img-round%2520img-responsive%2522%2520alt%253D%2522avatar-lg%2522%253E%250A%253C%252Fdiv%253E%250A%250A%253Cdiv%2520class%253D%2522avatar%2520m-size%2522%253E%250A%2509%253Cimg%2520src%253D%2522images%252Favatar.png%2522%2520class%253D%2522img-round%2520img-responsive%2522%2520alt%253D%2522avatar-m%2522%253E%250A%253C%252Fdiv%253E%250A%250A%253Cdiv%2520class%253D%2522avatar%2520s-size%2522%253E%250A%2509%253Cimg%2520src%253D%2522images%252Favatar.png%2522%2520class%253D%2522img-round%2520img-responsive%2522%2520alt%253D%2522avatar-sm%2522%253E%250A%253C%252Fdiv%253E"
            style="border:0; transform: scale(1); overflow:hidden;"
            sandbox="allow-scripts allow-same-origin">
        </iframe>
    </code>
</div>

<p class="sub-header">Example of Text Avatar</p>

<p>Text Avatar is another commonly used avatar which normally contains the initials of the person.</p>
<p>Use class name = <span class="bold-font blue-text">avatar</span>
    for avatar and class name = <span class="bold-font red-text">lg-size, m-size, s-size </span>for sizes.</p>

<div class="avatar-container">

    <div class="avatar avatar-text lg-size">
       <p>KS</p>
    </div>

    <div class="avatar avatar-text m-size">
       <p>KS</p>
    </div>

    <div class="avatar avatar-text s-size">
       <p>KS</p>
    </div>

</div>

<div class="code-snippet-display">
    <code>
        <iframe
            src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=one-light&wt=none&l=htmlmixed&width=650&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=143%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522avatar%2520avatar-text%2520lg-size%2522%253E%250A%2509%253Cp%253EKS%253C%252Fp%253E%250A%253C%252Fdiv%253E%250A%250A%253Cdiv%2520class%253D%2522avatar%2520avatar-text%2520m-size%2522%253E%250A%2509%253Cp%253EKS%253C%252Fp%253E%250A%253C%252Fdiv%253E%250A%250A%253Cdiv%2520class%253D%2522avatar%2520avatar-text%2520s-size%2522%253E%250A%2509%253Cp%253EKS%253C%252Fp%253E%250A%253C%252Fdiv%253E"
            style="border:0; transform: scale(1); overflow:hidden;"
            sandbox="allow-scripts allow-same-origin">
        </iframe>
    </code>
</div>
`;

document.querySelector("#Avatar").appendChild(avatarTemplate.content);