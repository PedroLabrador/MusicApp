import config from "./config"

const { api_key } = config

export default function getArtists(country) {
	const URL = `https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=${country}&api_key=${api_key}&format=json`
	return fetch(URL)
		.then(res => res.json())
		.then(json => json.topartists.artist)
}