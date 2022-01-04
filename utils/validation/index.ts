/**
 *  Validates the given email value against an email regex.
 * @param {any} email Email Input
 * @returns {boolean} Whether the email is valid or not
 */
export const validateEmail = (email: string) => {
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

  return emailRegex.test(email);
};

/**
 * Validates the given password value, checks if it is at least 1 characters long.
 * @param {any} password Password Input
 * @returns {boolean} Whether the password is valid or not
 */
export const validatePassword = (password: string) => password.length > 0;
