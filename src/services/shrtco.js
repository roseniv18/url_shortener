const getShortCode = async (url) => {
    try {
        const shrtco_api_url = new URL(`https://api.shrtco.de/v2/shorten?url=${url}`)
        const res = await fetch(shrtco_api_url)
        const data = await res.json()
        return data
    } catch (err) {
        throw new Error(err)
    }
}

export default getShortCode
