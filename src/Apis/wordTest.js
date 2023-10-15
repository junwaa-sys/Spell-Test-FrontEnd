const apiUrl = process.env.BACKEND_URL || 'http://localhost:5000/'

export async function fetchTestSetting(token) {
  try {
    const settings = await fetch(`${apiUrl}api/test/setting/get`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${token}`,
      },
    })

    const jsonSettings = await settings.json()
    return jsonSettings
  } catch (error) {
    console.log(error)
  }
}

export async function addTestSetting(data) {
  try {
    const addedSetting = await fetch(`${apiUrl}api/test/setting/add`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${data.token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    const jsonData = await addedSetting.json()
    return jsonData
  } catch (error) {
    console.log(error)
  }
}

export async function updateTestSetting(data) {
  try {
    const updatedSetting = await fetch(`${apiUrl}api/test/setting/update`, {
      method: 'PUT',
      headers: {
        authorization: `Bearer ${data.token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    const jsonData = await updatedSetting.json()
    return jsonData
  } catch (error) {
    console.log(error)
  }
}

export async function fetchTestWords(data) {
  try {
    const testWords = await fetch(`${apiUrl}api/test/words/get`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${data.token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    const jsonData = await testWords.json()
    return jsonData
  } catch (error) {
    console.log(error)
  }
}

export async function addTestResult(data) {
  try {
    const testResult = await fetch(`${apiUrl}api/test/result/add`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${data.token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    const jsonData = await testResult.json()
    return jsonData
  } catch (error) {
    console.log(error)
  }
}
