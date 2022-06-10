const url= "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&start_date="


export const fetcher = async () => {
    
    let date = new Date()
    date.setDate(date.getDate() - 6)
    date = date.toISOString().slice(0, 10)

    try {
        const response = await fetch(url+date);
        if (response.ok) {
          console.log(await response.json());
          const data = await response.json()
          return data
        } else {
          console.log('Respuesta de red OK pero respuesta de HTTP no OK');
        }
      } catch (error) {
        console.log('Hubo un problema con la petición Fetch:' + error.message);
      }
  }
  