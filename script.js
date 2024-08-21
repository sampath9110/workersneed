function sendMail(){
const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
	e.preventDefault();
	const name = document.getElementById('name').value;
	const email = document.getElementById('email').value;
	const phone = document.getElementById('phone').value;
	const dropdown = document.getElementById('dropdown').value;
	if (name && email && phone && dropdown) {
		alert('Form submitted successfully!');
		// Send email using EmailJS
		emailjs.send('service_0mpxx1i', 'template_a7g3g98', {
			name,
			email,
			phone,
			dropdown
		})
		.then((response) => {
			console.log('Email sent successfully!', response);
		})
		.catch((error) => {
			console.error('Error sending email:', error);
		});
	} else {
		alert('Please fill out all fields!');
	}
});}