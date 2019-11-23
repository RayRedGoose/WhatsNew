export const getArticles = () => {
  return fetch('https://whats-new-api.herokuapp.com/api/v1/news')
    .then(response => {
      if (!response.ok) {
        throw Error('Error fetching articles')
      }
      return response.json()
    })
}
