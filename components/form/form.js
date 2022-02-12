const formTemplate = document.createElement('template');

formTemplate.innerHTML = `

<p class="component-header">Form Components</p>

                <p class="header-description">There are form fields listed below and form validation is
                    also styled.</p>

                <p>In Culer <span class="bold-font blue-text">U</span><span class="bold-font red-text">I</span>,
                    we have 4 types of Alert Bars available:
                </p>

                <p class="sub-header">Example of Active form fields</p>

                <p>Add <span class="bold-font blue-text">form-label</span> class to labels and
                    <span class="bold-font red-text">form-field</span> for input element,
                    <span class="bold-font blue-text">form-field, form-textarea</span> for textarea element(mulitple lines
                    input).</p>
                <p>Add <span class="bold-font red-text">form-label-required-field</span> class to labels if the field
                    is required, it will show an astrick on the field.</p>

                <div class="bar-container">
                    <label class="form-label form-label-required-field">Email address</label>
                    <input type="email" class="form-field" placeholder="name@example.com" required>

                    <label class="form-label">Example Textarea</label>
                    <textarea type="email" class="form-field form-textarea" placeholder="start writing here.."
                        rows="3"></textarea>
                </div>

                <div class="code-snippet-display">
                    <code>
                        <iframe
                            src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=one-light&wt=none&l=htmlmixed&width=650&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=143%25&si=false&es=2x&wm=false&code=%253Clabel%2520class%253D%2522form-label%2520form-label-required-field%2522%253EEmail%2520address%253C%252Flabel%253E%250A%253Cinput%2520type%253D%2522email%2522%2520class%253D%2522form-field%2522%2520placeholder%253D%2522name%2540example.com%2522%2520required%253E%250A%250A%253Clabel%2520class%253D%2522form-label%2522%253EExample%2520Textarea%253C%252Flabel%253E%250A%253Ctextarea%2520type%253D%2522email%2522%2520class%253D%2522form-field%2520form-textarea%2522%2520placeholder%253D%2522start%2520writing%2520here..%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520rows%253D%25223%2522%253E%253C%252Ftextarea%253E"
                            style="border:0; transform: scale(1); overflow:hidden;"
                            sandbox="allow-scripts allow-same-origin">
                        </iframe>
                    </code>
                </div>

            <p class="sub-header">Example of Disabled/Read only form fields</p>
            <p>Add <span class="bold-font blue-text">disabled</span> attribute to your form element to make them
                disable. No need to add any extra class.</p>
            <p> Add <span class="bold-font red-text">readonly</span> attribute to your form element to make them
                read only. No need to add any extra class.</p>

            <div class="bar-container">

                <div>
                    <input type="email" class="form-field" placeholder="Disabled input" disabled>
                </div>

                <div>
                    <input type="email" class="form-field" placeholder="Disabled read only" disabled readonly>
                </div>
            </div>

            <div class="code-snippet-display">
                    <code>
                        <iframe
                            src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=one-light&wt=none&l=htmlmixed&width=650&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=143%25&si=false&es=2x&wm=false&code=%253Cdiv%253E%250A%2509%253Cinput%2520type%253D%2522email%2522%2520class%253D%2522form-field%2522%2520placeholder%253D%2522Disabled%2520input%2522%2520disabled%253E%250A%253C%252Fdiv%253E%250A%250A%253Cdiv%253E%250A%2509%253Cinput%2520type%253D%2522email%2522%2520class%253D%2522form-field%2522%2520placeholder%253D%2522Disabled%2520read%2520only%2522%2520disabled%2520readonly%253E%250A%253C%252Fdiv%253E"
                            style="border:0; transform: scale(1); overflow:hidden;"
                            sandbox="allow-scripts allow-same-origin">
                        </iframe>
                    </code>
            </div>

            <p class="sub-header">Example of Read only plain text form field</p>
            <p>Add <span class="bold-font blue-text">read-only</span> attribute to your form element to make them
                read-only. Add <span class="bold-font red-text">form-field-plain-text</span> class to form field
                element.</p>

            <div class="bar-container">
                <div>

                    <label class="form-label">Enter email</label>

                    <input class="form-field form-field-plain-text" value="name@example.com" required readonly />
                </div>
                <div>

                    <label class="form-label">Enter password</label>

                    <input class="form-field" placeholder="enter password here" required />

                </div>
            </div>

            <div class="code-snippet-display">
                    <code>
                        <iframe
                            src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=one-light&wt=none&l=htmlmixed&width=650&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=143%25&si=false&es=2x&wm=false&code=%253Cdiv%253E%250A%2509%253Clabel%2520class%253D%2522form-label%2522%253EEnter%2520email%253C%252Flabel%253E%250A%2509%253Cinput%2520class%253D%2522form-field%2520form-field-plain-text%2522%2520value%253D%2522name%2540example.com%2522%2520required%2520readonly%2520%252F%253E%250A%253C%252Fdiv%253E%250A%253Cdiv%253E%250A%2509%253Clabel%2520class%253D%2522form-label%2522%253EEnter%2520password%253C%252Flabel%253E%250A%2509%253Cinput%2520class%253D%2522form-field%2522%2520placeholder%253D%2522enter%2520password%2520here%2522%2520required%2520%252F%253E%250A%253C%252Fdiv%253E"
                            style="border:0; transform: scale(1); overflow:hidden;"
                            sandbox="allow-scripts allow-same-origin">
                        </iframe>
                    </code>
            </div>

            <p class="sub-header">Example of Form Validation</p>
            <p>Below is the form validation example. You can have error message and check passed message on field
                level. For classes checkout the code snippet below.</p>
            
            <div class="bar-container">
                <form class="submit-form-example" novalidate>
                    <div>
                        <div>
                            <label class="form-label form-label-required-field">Email</label>
                        </div>
                        <div>
                            <input class="form-field" placeholder="name@example.com"
                                pattern="" required />
                            <div class="form-validation-msg form-field-error"><span class="form-field-symbol"><i
                                        class="fas fa-exclamation-circle"></i></span>Please enter your email address!
                            </div>
                            <div class="form-validation-msg form-field-success"><span class="form-field-symbol"><i
                                        class="fas fa-check-circle"></i></span>check pass</div>
                        </div>
                    </div>

                    <div>
                        <div>
                            <label class="form-label form-label-required-field">Select your country</label>
                        </div>
                        <div>
                            <select class="form-field" required>
                                <option value="India">India</option>
                                <option value="China">China</option>
                                <option value="Australia">Australia</option>
                                <option value="New Zealand">New Zealand</option>
                                <option value="USA">USA</option>

                            </select>
                        </div>
                    </div>

                    <div>
                        <div>
                            <label class="form-label">Gender</label>
                        </div>
                        <div>
                            <div>
                                <input class="form-checkbox-field" type="radio" name="gender" value="F" id="female" />
                                <label for="female">Female</label>

                                <input class="form-checkbox-field" type="radio" name="gender" value="M" id="male" />
                                <label for="male">Male</label>

                                <input class="form-checkbox-field" type="radio" name="gender" value="O" id="other" />
                                <label for="other">Other</label>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div>
                            <input class="form-checkbox-field" type="checkbox" required />
                            <label class="form-label form-label-required-field" style=" margin-top: 2rem;"> Yes, I accept the terms.</label>
                            <div class="form-validation-msg form-field-error"><span class="form-field-symbol"><i
                                        class="fas fa-exclamation-circle"></i></span>Please check the box!</div>
                            <div class="form-validation-msg form-field-success"><span class="form-field-symbol"><i
                                        class="fas fa-check-circle"></i></span>check pass</div>
                        </div>
                    </div>

                    <button class="btn btn-outlined-primary" style=" margin-top: 0.875rem;" type="submit">Submit</button>

                </form>

            </div>

            <div class="code-snippet-display">
                    <code>
                        <iframe
                            src="https://carbon.now.sh/embed?bg=rgba%28255%2C255%2C255%2C1%29&t=one-light&wt=none&l=htmlmixed&width=650&ds=false&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=143%25&si=false&es=2x&wm=false&code=%253Cform%2520class%253D%2522submit-form-example%2522%2520novalidate%253E%250A%2520%2520%253Cdiv%253E%250A%2520%2520%2520%2520%253Cdiv%253E%250A%2520%2520%2520%2520%2520%2520%253Clabel%2520class%253D%2522form-label%2520form-label-required-field%2522%253EEmail%253C%252Flabel%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253Cdiv%253E%250A%2520%2520%2520%2520%2520%2520%253Cinput%250A%2520%2520%2520%2520%2520%2520%2520%2520class%253D%2522form-field%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520placeholder%253D%2522name%2540example.com%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520pattern%253D%2522%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520required%250A%2520%2520%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522form-validation-msg%2520form-field-error%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522form-field-symbol%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ci%2520class%253D%2522fas%2520fa-exclamation-circle%2522%253E%253C%252Fi%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520Please%2520enter%2520your%2520email%2520address%21%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%2520class%253D%2522form-validation-msg%2520form-field-success%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cspan%2520class%253D%2522form-field-symbol%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%253Ci%2520class%253D%2522fas%2520fa-check-circle%2522%253E%253C%252Fi%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253C%252Fspan%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520check%2520pass%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%253Cdiv%253E%250A%2520%2520%2520%2520%253Cdiv%253E%250A%2520%2520%2520%2520%2520%2520%253Clabel%2520class%253D%2522form-label%2520form-label-required-field%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520Select%2520your%2520country%250A%2520%2520%2520%2520%2520%2520%253C%252Flabel%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253Cdiv%253E%250A%2520%2520%2520%2520%2520%2520%253Cselect%2520class%253D%2522form-field%2522%2520required%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Coption%2520value%253D%2522India%2522%253EIndia%253C%252Foption%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Coption%2520value%253D%2522China%2522%253EChina%253C%252Foption%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Coption%2520value%253D%2522Australia%2522%253EAustralia%253C%252Foption%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Coption%2520value%253D%2522New%2520Zealand%2522%253ENew%2520Zealand%253C%252Foption%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Coption%2520value%253D%2522USA%2522%253EUSA%253C%252Foption%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fselect%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%253Cdiv%253E%250A%2520%2520%2520%2520%253Cdiv%253E%250A%2520%2520%2520%2520%2520%2520%253Clabel%2520class%253D%2522form-label%2522%253EGender%253C%252Flabel%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253Cdiv%253E%250A%2520%2520%2520%2520%2520%2520%253Cdiv%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cinput%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520class%253D%2522form-checkbox-field%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520type%253D%2522radio%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520name%253D%2522gender%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520value%253D%2522F%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520id%253D%2522female%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Clabel%2520for%253D%2522female%2522%253EFemale%253C%252Flabel%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cinput%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520class%253D%2522form-checkbox-field%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520type%253D%2522radio%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520name%253D%2522gender%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520value%253D%2522M%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520id%253D%2522male%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Clabel%2520for%253D%2522male%2522%253EMale%253C%252Flabel%253E%250A%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cinput%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520class%253D%2522form-checkbox-field%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520type%253D%2522radio%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520name%253D%2522gender%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520value%253D%2522O%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520id%253D%2522other%2522%250A%2520%2520%2520%2520%2520%2520%2520%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Clabel%2520for%253D%2522other%2522%253EOther%253C%252Flabel%253E%250A%2520%2520%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%253C%252Fdiv%253E%250A%250A%2520%2520%253Cdiv%253E%250A%2520%2520%2520%2520%253Cdiv%253E%250A%2520%2520%2520%2520%2520%2520%253Cinput%2520class%253D%2522form-checkbox-field%2522%2520type%253D%2522checkbox%2522%2520required%2520%252F%253E%250A%2520%2520%2520%2520%2520%2520%253Clabel%250A%2520%2520%2520%2520%2520%2520%2520%2520c"
                            style="border:0; transform: scale(1); overflow:hidden;"
                            sandbox="allow-scripts allow-same-origin">
                        </iframe>
                    </code>
            </div>
`;

document.querySelector("#Form").appendChild(formTemplate.content);

const allForms = document.querySelectorAll('.submit-form-example');
allForms.forEach((form) => {
	form.addEventListener(
		'submit',
		(e) => {
			if (!form.checkValidity()) {
				e.preventDefault();
			}
			e.preventDefault();
			form.classList.add('form-validated');
		},
		false,
	);
});