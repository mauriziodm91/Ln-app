export const formatDateInSpanish = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  const date = new Date(dateString)

  const formattedDate = date.toLocaleDateString('es-ES', options)

  const formattedDateParts = formattedDate.split(' ')
  formattedDateParts[2] =
    formattedDateParts[2].charAt(0).toUpperCase() +
    formattedDateParts[2].slice(1).toLowerCase()
  const finalFormattedDate = formattedDateParts.join(' ')

  return finalFormattedDate
}
