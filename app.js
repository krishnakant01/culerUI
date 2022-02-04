//form
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