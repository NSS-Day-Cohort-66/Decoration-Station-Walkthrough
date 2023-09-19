export const getItems = () => {
  return fetch(`http://localhost:8088/items`).then((res) => {
    return res.json()
  })
}

export const postItem = (item) => {
  return fetch(`http://localhost:8088/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  })
}

export const getItemById = (id) => {
  return fetch(
    `http://localhost:8088/items/${id}?_expand=season&_expand=category`
  ).then((res) => res.json())
}

export const editItem = (item) => {
  return fetch(`http://localhost:8088/items/${item.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  })
}

export const getItemsBySeasonId = (seasonId) => {
  return fetch(`http://localhost:8088/items?seasonId=${seasonId}`).then((res) =>
    res.json()
  )
}
