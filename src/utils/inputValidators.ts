/***
 * @isStrongPassword
 * @param {password} String
  @return {boolean}
 `
 ***/
// String Password Validator
export const isStrongPassword = (password: string): boolean => {
  const charRgx = /[A-Za-z]/ // characters regex
  const symbolRgx = /[$&+,:;=?@#|'<>.^*()%!-]/ // symbol regex
  const numberRgx = /[0-9]/ // number regex

  // minimum length
  const isValidLength = password.length >= 8
  // Check for characters
  const hasChar = charRgx.test(password)
  // Check for symbols
  const hasSymbol = symbolRgx.test(password)
  // Check for numbers
  const hasNumber = numberRgx.test(password)

  return isValidLength && hasChar && hasSymbol && hasNumber
}

/**
 * @function validateEmail
 * @param {email} string
 * @return {boolean}
 */

export const validateEmail = (email: string): boolean => {
  // Regular expression pattern for email validation
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  if (pattern.test(email.toLowerCase())) {
    return true
  } else {
    return false
  }
}

/***
 * @isValidName
 * @param {name} 
  @return {boolean}
 `
 ***/
// user name validator
export const isValidName = (name: string): boolean => {
  const symbolRegex = /[$&+,:;=?@#|'<>.^*()%!-]/ // symbol regex
  const numberRegex = /[0-9]/ // number regex

  if (symbolRegex.test(name) || numberRegex.test(name) || name === '') {
    return false // Name has symbols or numbers
  }

  return true // Name is valid
}
