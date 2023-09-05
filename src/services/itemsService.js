export const getItems = () => {
  return fetch(`http://localhost:8088/items`).then((res) => {
    return res.json()
  })
}
