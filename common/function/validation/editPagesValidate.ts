interface IValues {
	firstname: string;
	lastname: string;
	email: string;
	currentPassword: string;
	newPassword: string;
	confirmPassword: string;
}
const validate = (values: IValues) => {
	const errors: IValues = {
		firstname: '',
		lastname: '',

		email: '',
		currentPassword: '',
		newPassword: '',
		confirmPassword: '',
	};
	if (!values.firstname) {
		errors.firstname = 'Required';
	} else if (values.firstname.length < 3) {
		errors.firstname = 'Must be 3 characters or more';
	} else if (values.firstname.length > 20) {
		errors.firstname = 'Must be 20 characters or less';
	}

	if (!values.lastname) {
		errors.lastname = 'Required';
	} else if (values.lastname.length < 3) {
		errors.lastname = 'Must be 3 characters or more';
	} else if (values.lastname.length > 20) {
		errors.lastname = 'Must be 20 characters or less';
	}



	if (!values.email) {
		errors.email = 'Required';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = 'Invalid email address';
	}

	if (values.currentPassword) {
		if (!values.newPassword) {
			errors.newPassword = 'Please provide a valid password.';
		} else {
			errors.newPassword = '';

			if (values.newPassword.length < 8 || values.newPassword.length > 32) {
				errors.newPassword +=
					'The password must be at least 8 characters long, but no more than 32. ';
			}
			if (!/[0-9]/g.test(values.newPassword)) {
				errors.newPassword +=
					'Require that at least one digit appear anywhere in the string. ';
			}
			if (!/[a-z]/g.test(values.newPassword)) {
				errors.newPassword +=
					'Require that at least one lowercase letter appear anywhere in the string. ';
			}
			if (!/[A-Z]/g.test(values.newPassword)) {
				errors.newPassword +=
					'Require that at least one uppercase letter appear anywhere in the string. ';
			}
			if (!/[!@#$%^&*)(+=._-]+$/g.test(values.newPassword)) {
				errors.newPassword +=
					'Require that at least one special character appear anywhere in the string. ';
			}
		}

		if (!values.confirmPassword) {
			errors.confirmPassword = 'Please provide a valid password.';
		} else if (values.newPassword !== values.confirmPassword) {
			errors.confirmPassword = 'Passwords do not match.';
		}
	}

	return errors;
};

export default validate;
