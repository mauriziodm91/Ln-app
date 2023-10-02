export const groupAndCountTags = (data) => {
  // Creamos un objeto para realizar el conteo de los tags
  const tagCount = {}

  // Iteramos sobre los elementos del arreglo
  data.forEach((item) => {
    // Obtenemos la propiedad tags de cada elemento
    const tags = item.taxonomy.tags

    // Iteramos sobre los tags de cada elemento
    tags.forEach((tag) => {
      // Verificamos si el tag ya existe en el objeto de conteo
      if (tagCount[tag.slug]) {
        // Si existe, incrementamos el contador
        tagCount[tag.slug].count++
      } else {
        // Si no existe, creamos una nueva entrada en el objeto de conteo
        tagCount[tag.slug] = {
          slug: tag.slug,
          text: tag.text,
          count: 1,
        }
      }
    })
  })

  // Convertimos el objeto de conteo en un arreglo de objetos
  const result = Object.values(tagCount)

  // Ordenamos el arreglo en orden descendente según el contador
  result.sort((a, b) => b.count - a.count)

  return result
}
