

export const fetcher = async (url) => {
    try {
        const response = await fetch(url);
        if (response.ok) {
          let data = await response.json()
          return data
        } else {
          return new Error("There was an error getting the response.")
        }
      } catch (error) {
        console.log('There was a problem with the Fetch request:' + error.message);
        return error
      }
  }
  