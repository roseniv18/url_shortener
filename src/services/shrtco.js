import react from 'react'

const getShortCode = async (url) => {
    const shrtco_api_url = new URL(`https://api.shrtco.de/v2/shorten?url=${url}`)

    const response = await fetch(shrtco_api_url).then(res => res.json())

    if(response.ok) {
        return response.result.full_short_link
    } else {
        alert(response.error)
    }

}

export default getShortCode