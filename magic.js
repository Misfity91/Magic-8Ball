const ballImg = document.querySelector('img')
const text = document.querySelector('input')
const answer = document.querySelector('.answer')
const error = document.querySelector('.error')
const arrAnswer = [
	'Brak opinii',
	'To twoje przeznaczenie',
	'Moim zdaniem tak',
	'Na pewno',
	'Tak, absolutnie',
	'Może...',
	'Bez wątpienia',
	'Bardzo prawdopodobne',
	'Tak',
	'Nie',
	'Mało prawdopodobne',
    'Ciężko powiedzieć...'
]

const shakeBall = () => {
	ballImg.classList.add('shake-animation')
	setTimeout(checkInput, 1000)
}

const checkInput = () => {
	if (text.value !== '' && text.value.slice(-1) === '?') {
		generateAnswer()
		error.textContent = ''
	} else if (text.value !== '' && text.value.slice(-1) !== '?') {
		error.textContent = 'Pytanie powinno kończyć się znakiem zapytania :)'
		answer.textContent = ''
	} else {
		answer.textContent = ''
		error.textContent = 'Musisz zadać jakieś pytanie!'
	}
	ballImg.classList.remove('shake-animation')
}
const generateAnswer = () => {
	const number = Math.floor(Math.random() * arrAnswer.length)
	answer.innerHTML = `<span>Odpowiedź:</span> ${arrAnswer[number]}`
}

ballImg.addEventListener('click', shakeBall)
