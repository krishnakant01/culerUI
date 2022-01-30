const avatarTemplate = document.createElement('template');

avatarTemplate.innerHTML = `

<p class="component-header">Avatar</p>
<p class="header-description">Avatars are user profile pictures, usually found in circular shapes.
    Avatars can be used for 'container' objects — projects, spaces, repositories, etcetera — to give
    them a recognisable visual identity.</p>
<p>In Culer <span class="nav-U-I blue-text">U</span><span class="nav-U-I red-text">I</span>,
    we have 2 types of Avatar available:
</p>
<p>1. Image Avatar.</p>
<p>2. Text Avatar.</p>
<p>Avatars are available in 3 sizes:</p>
<p>1. Large size.</p>
<p>2. Medium size.</p>
<p>2. Small size.</p>

<p class="sub-header">Example of Image Avatar</p>

<p>Image Avatars are most commonly used for profile pictures.</p>
<p>Use class name = <span class="nav-U-I blue-text">avatar</span>
    for avatar and class name = <span class="nav-U-I red-text">lg-size, m-size, s-size </span>for sizes.</p>

<div class="avatar-container">

    <div class="avatar lg-size">
        <img src="images/avatar.png" class="img-round img-responsive" alt="">
    </div>

    <div class="avatar m-size">
        <img src="images/avatar.png" class="img-round img-responsive" alt="">
    </div>

    <div class="avatar s-size">
        <img src="images/avatar.png" class="img-round img-responsive" alt="">
    </div>
</div>

<p class="sub-header">Example of Text Avatar</p>

<p>Text Avatar is another commonly used avatar which normally contains the initials of the person.</p>
<p>Use class name = <span class="nav-U-I blue-text">avatar</span>
    for avatar and class name = <span class="nav-U-I red-text">lg-size, m-size, s-size </span>for sizes.</p>

<div class="avatar-container">

    <div class="avatar lg-size">
       <p>KS</p>
    </div>

    <div class="avatar m-size">
       <p>KS</p>
    </div>

    <div class="avatar s-size">
       <p>KS</p>
    </div>


</div>

`;

document.querySelector("#Avatar").appendChild(avatarTemplate.content);