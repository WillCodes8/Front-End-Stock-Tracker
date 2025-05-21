const API_KEY = "tfteb8ZAaFjj2YUWyogY98QjBJxEUw32"
const baseUrl = "https://api.polygon.io"

export const getMarketTrends = async(ticker) => {
    const url = `${baseUrl}/v2/aggs/ticker/${ticker}/prev?adjusted=true&apiKey=${API_KEY}`

    const data = await fetch(url)

    if(!data.ok){
        throw new Error(`Data Retrival Unsuccessful: ${data.statusText}`)
    } 

    const dataJSON = await data.json()

    return dataJSON
}
