import react from 'react'

const getShortCode = async (url) => {

    const shrtco_api_url = new URL(`https://api.shrtco.de/v2/shorten?url=${url}`)

    const response = await fetch(shrtco_api_url).then(res => res.json())

    return response

}

export default getShortCode