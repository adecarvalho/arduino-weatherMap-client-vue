const API_WEATHER_URL = 'http://localhost:5000/api/openweathermap/'

async function getDonneesMeteo(ville) {
	const url = API_WEATHER_URL + ville

	try {
		const response = await fetch(url)

		const json = await response.json()

		if (json.message) {
			return {
				name: 'Erreur',
				temperature: '?',
				description: 'Données non disponibles',
				condition: 'default'
			}
		} else {
			return {
				name: json.name,
				temperature: json.temperature,
				description: json.description,
				condition: json.condition
			}
		}
	} catch (error) {
		console.error('erreur getDonneesMeteo')
	}
}

export default {
	getDonneesMeteo
}
