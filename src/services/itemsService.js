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
