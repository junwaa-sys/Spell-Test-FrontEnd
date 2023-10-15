const apiUrl = 'spell-test-backend-production.up.railway.app/'

export async function getTestHistory(token) {
  try {
    //fetch history list
    console.log(process.env.REACT_APP_BACKEND_URL)
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
