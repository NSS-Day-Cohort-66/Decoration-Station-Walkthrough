export const getSeasons = () => {
  return fetch(`http://localhost:8088/seasons`).then((res) => res.json())
}
