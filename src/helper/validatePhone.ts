export default function validatePhone(text: string) {
  if (text.length > 0) {
    if ((/^[\+]?\d+$/.test(text))) {
      if (text.length < 10 || text.length > 13) return 'Character length must be 10-13 characters';
    } else {
      return 'Can only contain numbers'
    }
  }
}