const typographyTemplate = document.createElement('template');

typographyTemplate.innerHTML = `

<p class="component-header">Typography</p>
<p class="header-description">Use typography to present your design and content as clearly and
    efficiently as possible.</p>

<p class="sub-header">Example of Heading Text</p>

<p>For heading you can use h1, h2, h3, h4, h5, h6 elements.
    Font size for these elements is defined under <span class="bold-font blue-text">text-badge-container
    </span>
    class.</p>

<div class="typography-container text-badge-container">

    <h1>H1-Heading</h1>
    <h2>H2-Heading</h2>
    <h3>H3-Heading</h3>
    <h4>H4-Heading</h4>
    <h5>H5-Heading</h5>
    <h6>H6-Heading</h6>
    <p>Paragraph</p>

</div>

<p class="sub-header">Example of Paragraph Text</p>

<p>We have 2 sizes for Paragraph Text. We use <span class="bold-font blue-text">lg-font-size </span> for
    header description and
    <span class="bold-font blue-text">rg-font-size </span> for sub-header description.
</p>

<div class="typography-container">
    <p class="header-description">Paragraph with large-font-size.</p>
    <p>Paragraph with regular-font-size.</p>
</div>

<p class="sub-header">Example of Other Styled Text</p>
<!-- <p>We have 2 types of colored text: primary and secondary text</p> -->
<p>1.To make text color change to primary-text-color use class <span
        class="bold-font red-text">red-text.</span></p>
<p>2.To make text color change to secondary-text-color use class <span
        class="bold-font blue-text">blue-text.</span></p>
<p>3.To make text bold (weight: 600), add <span class="bold-font red-text">bold-font</span> class</p>
<p>4.To strike-through the text, add <span class="bold-font blue-text">text-strike-through</span> class
</p>
<div class="typography-container">
    <p class="red-text">Text with primary color.</p>
    <p class="blue-text">Text with secondary color.</p>
    <p class="bold-font">Text with bold font weight.</p>
    <p class="text-strike-through">Text with strike through.</p>
</div>

`;

document.querySelector("#Typography").appendChild(typographyTemplate.content);