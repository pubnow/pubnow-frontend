export const errorProcess = async e => {
  const { response } = e
  const err = await response.json()
  const keys = Object.keys(err.errors)
  const message = keys.map(k => {
    return `
      <li>
        ${err.errors[k][0]}
      </li>
    `
  })
  return `<ul>${message.join('')}</ul>`
}
