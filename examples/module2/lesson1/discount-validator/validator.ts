export function formValidator(
  firstName: string,
  lastName: string,
  age: number
) {
  const errors: string[] = [];

  if (!firstName) {
    errors.push('First name is required');
  }

  if (!lastName) {
    errors.push('Last name is required');
  }

  if (age < 0) {
    errors.push('Age must be a positive number');
  }

  if (firstName.length < 2 || lastName.length < 2) {
    errors.push('First name and last name must have at list one sign');
  }

  if (Number.isNaN(age)) {
    errors.push('Age must be a number');
  }

  return errors;
}
