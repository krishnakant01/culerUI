const sliderTemplate = document.createElement('template');

sliderTemplate.innerHTML =`

<p class="component-header">Slider</p>
<p class="header-description">Sliders allow users to make selections from a range of values. They are
    ideal for adjusting settings such as volume, brightness, or applying image filters.</p>

<p class="sub-header">Example of Default Slider</p>

<p>Use class name = <span class="bold-font blue-text">default-slider </span>for a default slider.</p>
<p>Use class name = id = <span class="bold-font red-text">default-slider
    </span>for default-slider with icon. Click on icon to mute/unmute.
</p>

<div class="avatar-container">

    <div class="slider-container">
        <input type="range" min="1" max="100" value="50" id="" class="default-slider">
    </div>

    <div class="slider-container">
        <label for="default-slider"><i class="fas fa-volume-up" id="slider-volume-up"></i> </label>
        <label for="default-slider"><i class="fas fa-volume-slash" id="slider-volume-mute"></i></label>
        <input type="range" min="1" max="100" value="50" id="default-slider" class="default-slider">
    </div>

</div>

<div class="code-snippet-display">
        <code>
            <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=one-light&wt=none&l=htmlmixed&width=650&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=143%25&si=false&es=2x&wm=false&code=%253Cdiv%2520class%253D%2522slider-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cinput%2520type%253D%2522range%2522%2520min%253D%25221%2522%2520max%253D%2522100%2522%2520value%253D%252250%2522%2520id%253D%2522%2522%2520class%253D%2522default-slider%2522%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%2520%2520%253Cdiv%2520class%253D%2522slider-container%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Clabel%2520for%253D%2522default-slider%2522%253E%253Ci%2520class%253D%2522fas%2520fa-volume-up%2522%2520id%253D%2522slider-volume-up%2522%253E%253C%252Fi%253E%2520%253C%252Flabel%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Clabel%2520for%253D%2522default-slider%2522%253E%253Ci%2520class%253D%2522fas%2520fa-volume-slash%2522%2520id%253D%2522slider-volume-mute%2522%253E%253C%252Fi%253E%253C%252Flabel%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cinput%2520type%253D%2522range%2522%2520min%253D%25221%2522%2520max%253D%2522100%2522%2520value%253D%252250%2522%2520id%253D%2522default-slider%2522%2520class%253D%2522default-slider%2522%253E%250A%253C%252Fdiv%253E"
                style="border:0; transform: scale(1); overflow:hidden;"
                sandbox="allow-scripts allow-same-origin">
            </iframe>
        </code>
</div>

<p class="sub-header" style="color: var(--color-dark-gray)">Javascript</p>

<div class="code-snippet-display">
        <code>
            <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=one-light&wt=none&l=javascript&width=650&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=143%25&si=false&es=2x&wm=false&code=const%2520btnVolumeUp%2520%253D%2520document.querySelector%28%2522%2523slider-volume-up%2522%29%253B%250Aconst%2520btnVolumeMute%2520%253D%2520document.querySelector%28%2522%2523slider-volume-mute%2522%29%253B%250Aconst%2520defaultSlider%2520%253D%2520document.querySelector%28%2522%2523default-slider%2522%29%253B%250A%250AbtnVolumeMute.style.display%2520%253D%2520%2522none%2522%253B%250A%250AbtnVolumeUp.addEventListener%28%2522click%2522%252C%2520%28%29%2520%253D%253E%2520%257B%250A%2520%2520%2520%2520btnVolumeMute.style.display%2520%253D%2520%2522block%2522%253B%250A%2520%2520%2520%2520btnVolumeUp.style.display%2520%253D%2520%2522none%2522%253B%250A%2520%2520%2520%2520defaultSlider.value%2520%253D%25200%253B%250A%257D%29%253B%250A%250AbtnVolumeMute.addEventListener%28%2522click%2522%252C%2520%28%29%2520%253D%253E%2520%257B%250A%2520%2520%2520%2520btnVolumeMute.style.display%2520%253D%2520%2522none%2522%253B%250A%2520%2520%2520%2520btnVolumeUp.style.display%2520%253D%2520%2522block%2522%253B%250A%2520%2520%2520%2520defaultSlider.value%2520%253D%252050%253B%250A%257D%29%253B"
                style="border:0; transform: scale(1); overflow:hidden;"
                sandbox="allow-scripts allow-same-origin">
            </iframe>
        </code>
</div>

<p class="sub-header">Example of Custom Slider</p>

<p>Use class name = id = <span class="bold-font blue-text">custom-slider </span> for input element
    and class name = <span class="bold-font red-text">tooltip-value</span> for the span element to get
    the input value everytime you slide it.

    <p>Include a style tag for the change in size of the thumb.</p>

    <div class="avatar-container">

        <style data="test" type="text/css">
        </style>
        <div class="slider-container">
            <span class="tooltip-value"></span>

            <input type="range" min="1" max="100" value="50" id="custom-slider" class="custom-slider">
        </div>

    </div>

    <div class="code-snippet-display">
        <code>
            <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=one-light&wt=none&l=htmlmixed&width=650&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=143%25&si=false&es=2x&wm=false&code=%253Cstyle%2520data%253D%2522test%2522%2520type%253D%2522text%252Fcss%2522%253E%253C%252Fstyle%253E%250A%250A%253Cdiv%2520class%253D%2522slider-container%2522%253E%250A%2509%253Cspan%2520class%253D%2522tooltip-value%2522%253E%253C%252Fspan%253E%250A%2509%253Cinput%2520type%253D%2522range%2522%2520min%253D%25221%2522%2520max%253D%2522100%2522%2520value%253D%252250%2522%2520id%253D%2522custom-slider%2522%2520class%253D%2522custom-slider%2522%253E%250A%253C%252Fdiv%253E"
                style="border:0; transform: scale(1); overflow:hidden;"
                sandbox="allow-scripts allow-same-origin">
            </iframe>
        </code>
    </div>

    <p class="sub-header" style="color: var(--color-dark-gray)">Javascript</p>

    <div class="code-snippet-display">
        <code>
            <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=one-light&wt=none&l=javascript&width=650&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=143%25&si=false&es=2x&wm=false&code=const%2520customSlider%2520%253D%2520document.querySelector%28%2522%2523custom-slider%2522%29%253B%250Aconst%2520style%2520%253D%2520document.querySelector%28%27%255Bdata%253D%2522test%2522%255D%27%29%253B%250Aconst%2520tooltipValue%2520%253D%2520document.querySelector%28%2522.tooltip-value%2522%29%253B%250A%250Aconst%2520sliderWidth%2520%253D%2520customSlider.clientWidth%253B%250AsetData%28customSlider.value%29%253B%250A%250AcustomSlider.oninput%2520%253D%2520function%28%29%2520%257B%250A%2520%2520%2520%2520setData%28this.value%29%253B%250A%2520%2520%2520%2520setTranslationDistance%28this.value%29%253B%250A%257D%250A%250Afunction%2520setData%28x%29%2520%257B%250A%2520%2520%2520%2520tooltipValue.innerHTML%2520%253D%2520x%253B%250A%2520%2520%2520%2520style.innerHTML%2520%253D%2520%2522.custom-slider%253A%253A-webkit-slider-thumb%2520%257B%2520width%253A%2520%2522%2520%252B%2520%28x%2520%253C%252010%2520%253F%252010%2520%253A%2520%2810%2520%252B%2520%28x-10%29%252F9%29%29%2520%252B%2520%2522px%2520%21important%253B%2520height%253A%2520%2522%250A%2520%2520%2520%2520%2520%252B%2520%28x%2520%253C%252010%2520%253F10%253A%2520%2810%2520%252B%2520%28x-10%29%252F9%29%29%2520%252B%2520%2522px%2520%21important%253B%2520%257D%2522%253B%250A%257D%250A%250Afunction%2520setTranslationDistance%28x%29%2520%257B%250A%2520%2520%2520%2520const%2520translateDistance%2520%253D%2520%28x*sliderWidth%29%252F100%253B%250A%250A%2520%2520%2520%2520style.innerHTML%2520%253D%2520style.innerHTML%2520%252B%2520%2522.tooltip-value%2520%257B%2520transform%253A%2520translateX%28%2522%250A%2520%2520%2520%2520%2520%252B%2520%28translateDistance%2520-%2520sliderWidth%252F2%29%2520%252B%2520%2522px%29%2520%21important%253B%257D%2520.slider-container%2520.tooltip-value%253A%253Aafter%2520%257B%2520transform%253A%2520translateX%28%2522%250A%2520%2520%2520%2520%2520%252B%2520%28translateDistance%2520-%2520%28sliderWidth%252B2%29%252F2%29%2520%252B%2520%2522px%29%2520%21important%253B%257D%2522%253B%250A%257D"
                style="border:0; transform: scale(1); overflow:hidden;"
                sandbox="allow-scripts allow-same-origin">
            </iframe>
        </code>
    </div>
`;

document.querySelector("#Slider").appendChild(sliderTemplate.content);

const btnVolumeUp = document.querySelector("#slider-volume-up");
const btnVolumeMute = document.querySelector("#slider-volume-mute");
const defaultSlider = document.querySelector("#default-slider");

btnVolumeMute.style.display = "none";

btnVolumeUp.addEventListener("click", () => {
    btnVolumeMute.style.display = "block";
    btnVolumeUp.style.display = "none";
    defaultSlider.value = 0;
});

btnVolumeMute.addEventListener("click", () => {
    btnVolumeMute.style.display = "none";
    btnVolumeUp.style.display = "block";
    defaultSlider.value = 50;
});

// ------------------------------------- Custom Slider -----------------------------------------//

const customSlider = document.querySelector("#custom-slider");
const style = document.querySelector('[data="test"]');
const tooltipValue = document.querySelector(".tooltip-value");

const sliderWidth = customSlider.clientWidth;
setData(customSlider.value);

customSlider.oninput = function() {
    setData(this.value);
    setTranslationDistance(this.value);
}

function setData(x) {
    tooltipValue.innerHTML = x;
    style.innerHTML = ".custom-slider::-webkit-slider-thumb { width: " + (x < 10 ? 10 : (10 + (x-10)/9)) + "px !important; height: "
     + (x < 10 ?10: (10 + (x-10)/9)) + "px !important; }";
}

function setTranslationDistance(x) {
    const translateDistance = (x*sliderWidth)/100;

    style.innerHTML = style.innerHTML + ".tooltip-value { transform: translateX("
     + (translateDistance - sliderWidth/2) + "px) !important;} .slider-container .tooltip-value::after { transform: translateX("
     + (translateDistance - (sliderWidth+2)/2) + "px) !important;}";
}