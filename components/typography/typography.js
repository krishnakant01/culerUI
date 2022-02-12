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

<div class="code-snippet-display">
        <code>
            <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=one-light&wt=none&l=htmlmixed&width=650&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=143%25&si=false&es=2x&wm=false&code=%2509%253Ch1%253EH1-Heading%253C%252Fh1%253E%250A%2520%2520%2520%2520%253Ch2%253EH2-Heading%253C%252Fh2%253E%250A%2520%2520%2520%2520%253Ch3%253EH3-Heading%253C%252Fh3%253E%250A%2520%2520%2520%2520%253Ch4%253EH4-Heading%253C%252Fh4%253E%250A%2520%2520%2520%2520%253Ch5%253EH5-Heading%253C%252Fh5%253E%250A%2520%2520%2520%2520%253Ch6%253EH6-Heading%253C%252Fh6%253E%250A%2520%2520%2520%2520%253Cp%253EParagraph%253C%252Fp%253E"
                style="border:0; transform: scale(1); overflow:hidden;"
                sandbox="allow-scripts allow-same-origin">
            </iframe>
        </code>
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

<div class="code-snippet-display">
        <code>
            <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=one-light&wt=none&l=htmlmixed&width=650&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=143%25&si=false&es=2x&wm=false&code=%2509%253Cp%2520class%253D%2522header-description%2522%253EParagraph%2520with%2520large-font-size.%253C%252Fp%253E%250A%2520%2520%2520%2520%253Cp%253EParagraph%2520with%2520regular-font-size.%253C%252Fp%253E"
                style="border:0; transform: scale(1); overflow:hidden;"
                sandbox="allow-scripts allow-same-origin">
            </iframe>
        </code>
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

<div class="code-snippet-display">
        <code>
            <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=one-light&wt=none&l=htmlmixed&width=650&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=143%25&si=false&es=2x&wm=false&code=%2509%253Cp%2520class%253D%2522red-text%2522%253EText%2520with%2520primary%2520color.%253C%252Fp%253E%250A%2520%2520%2520%2520%253Cp%2520class%253D%2522blue-text%2522%253EText%2520with%2520secondary%2520color.%253C%252Fp%253E%250A%2520%2520%2520%2520%253Cp%2520class%253D%2522bold-font%2522%253EText%2520with%2520bold%2520font%2520weight.%253C%252Fp%253E%250A%2520%2520%2520%2520%253Cp%2520class%253D%2522text-strike-through%2522%253EText%2520with%2520strike%2520through.%253C%252Fp%253E"
                style="border:0; transform: scale(1); overflow:hidden;"
                sandbox="allow-scripts allow-same-origin">
            </iframe>
        </code>
</div>

`;

document.querySelector("#Typography").appendChild(typographyTemplate.content);