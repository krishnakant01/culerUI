const formTemplate = document.createElement('template');

formTemplate.innerHTML = `

<p class="component-header">Form Components</p>

                <p class="header-description">There are form fields listed below and form validation is
                    also styled.</p>

                <p>In Culer <span class="nav-U-I blue-text">U</span><span class="nav-U-I red-text">I</span>,
                    we have 4 types of Alert Bars available:
                </p>

                <p class="sub-header">Example of Active form fields</p>

                <p>Add <span class="nav-U-I blue-text">form-label</span> class to labels and
                    <span class="nav-U-I red-text">form-field</span> for input element,
                    <span class="nav-U-I blue-text">form-field, form-textarea</span> for textarea element(mulitple lines
                    input).</p>
                <p>Add <span class="nav-U-I red-text">form-label-required-field</span> class to labels if the field
                    is required, it will show an astrick on the field.</p>

                <div class="bar-container">
                    <label class="form-label form-label-required-field">Email address</label>
                    <input type="email" class="form-field" placeholder="name@example.com" required>

                    <label class="form-label">Example Textarea</label>
                    <textarea type="email" class="form-field form-textarea" placeholder="start writing here.."
                        rows="3"></textarea>
                </div>
            </div>


            <p class="sub-header">Example of Disabled/Read only form fields</p>
            <p>Add <span class="nav-U-I blue-text">disabled</span> attribute to your form element to make them
                disable. No need to add any extra class.</p>
            <p> Add <span class="nav-U-I red-text">readonly</span> attribute to your form element to make them
                read only. No need to add any extra class.</p>

            <div class="bar-container">

                <div class="row">
                    <input type="email" class="form-field" placeholder="Disabled input" disabled>
                </div>

                <div class="row">
                    <input type="email" class="form-field" placeholder="Disabled read only" disabled readonly>
                </div>
            </div>

            <p class="sub-header">Example of Read only plain text form field</p>
            <p>Add <span class="nav-U-I blue-text">read-only</span> attribute to your form element to make them
                read-only. Add <span class="nav-U-I red-text">form-field-plain-text</span> class to form field
                element.</p>

            <div class="bar-container">
                <div class="row">

                    <label class="form-label">Enter email</label>

                    <input class="form-field form-field-plain-text" value="name@example.com" required readonly />
                </div>
                <div class="row">

                    <label class="form-label">Enter password</label>

                    <input class="form-field" placeholder="enter password here" required />

                </div>
            </div>

            <p class="sub-header">Example of Form Validation</p>
            <p>Below is the form validation example. You can have error message and check passed message on field
                level. For classes checkout the code snippet below.</p>
            <div class="bar-container">
                <form class="submit-form-example" novalidate>
                    <div class="row">
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

                    <div class="row">
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

                    <div class="row">
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

                    <div class="row">
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