export function validatePassword(password: string | undefined) {
  if (!password) {
    return {
      uppercase: false,
      specialCharacter: false,
      number: false,
      characterLong: false,
    }
  }
  return {
    uppercase: /[A-Z]/.test(password),
    specialCharacter: /[!@#$%^&*]/.test(password),
    number: /\d/.test(password),
    characterLong: password.length >= 6,
  }
}