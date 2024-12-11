export const addition = (a: number, b: number): number => {
  return a + b;
}
export const subtraction = (a: number, b: number): number => {
  return a - b;
}
export const multiplication = (a: number, b: number): number => {
  return a * b;
}

export const division = (a: number, b: number): number|string  => {
  if(b === 0) return 'Cannot divide by zero'
  return a / b;
}