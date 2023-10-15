const apiUrl = process.env.BACKEND_URL || 'http://localhost:5000/'

export async function getTestHistory(token) {
  try {
    //fetch history list
    const response = await fetch(`${apiUrl}api/test/history/get`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${token}`,
      },
    })

    const json = await response.json()
    return json
  } catch (error) {
    console.log(error)
  }
}

export async function getTestHistoryByWord(token) {
  try {
    const response = await fetch(`${apiUrl}api/test/history/byword/get`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
    const json = await response.json()
    return json
  } catch (error) {
    console.log(error)
  }
}
