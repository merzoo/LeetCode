export default string =>
  string
    .split('')
    .reverse()
    .join('')

export const fn1 = string =>
  string
    .split(/\s/g)
    .map(item =>
      item
        .split('')
        .reverse()
        .join('')
    )
    .join(' ')
