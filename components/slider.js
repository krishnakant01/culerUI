const sliderTemplate = document.createElement('template');

sliderTemplate.innerHTML =`

<p class="component-header">Slider</p>
<p class="header-description">Sliders allow users to make selections from a range of values. They are
    ideal for adjusting settings such as volume, brightness, or applying image filters.</p>

<p class="sub-header">Example of Default Slider</p>

<p>Use class name = <span class="nav-U-I blue-text">default-slider </span>for a default slider.</p>
<p>Use class name = id = <span class="nav-U-I red-text">default-slider
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

<p class="sub-header">Example of Custom Slider</p>

<p>Use class name = id = <span class="nav-U-I blue-text">custom-slider </span> for input element
    and class name = <span class="nav-U-I red-text">tooltip-value</span> for the span element to get
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