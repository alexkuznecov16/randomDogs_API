const button = document.querySelector('button')
const img = document.querySelector('.dog')
const url = 'https://dog.ceo/api/breeds/image/random'

async function apiDogGenerator() {
	try {
		// The Fetch API provides a JavaScript interface for working with HTTP requests and responses.
		const response = await fetch(url)
		const data = await response.json()
		img.src = data.message
	} catch (error) {
		console.log(error)
	}
}

button.addEventListener('click', () => {
	apiDogGenerator()
})
