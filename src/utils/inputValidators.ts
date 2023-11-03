/***
 * @isStrongPassword
 * @param {password} String
  @return {boolean}
 `
 ***/
// String Password Validator
export const isStrongPassword = (password: string) => {
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

export const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
}

/***
 * @isValidName
 * @param {name} 
  @return {boolean}
 `
 ***/
// user name validator
export const isValidName = (name: string) => {
  const symbolRegex = /[$&+,:;=?@#|'<>.^*()%!-]/ // symbol regex
  const numberRegex = /[0-9]/ // number regex

  if (symbolRegex.test(name) || numberRegex.test(name) || name === '') {
    return false // Name has symbols or numbers
  }

  return true // Name is valid
}
