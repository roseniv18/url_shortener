const getShortCode = async (url) => {
    const shrtco_api_url = new URL(`https://api.shrtco.de/v2/shorten?url=${url}`)
    const res = await fetch(shrtco_api_url)
    const data = await res.json()
    return data
}

export default getShortCode