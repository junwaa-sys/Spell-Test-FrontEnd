const apiUrl = 'https://api.quotable.io'

export async function getRandomQuote() {
  try {
    // fetch random qoute
    const response = await fetch(`${apiUrl}/quotes/random`, {
      method: 'GET',
    })
    const json = response.json()
    return json
  } catch (error) {
    console.log(error)
  }
}
