const questions = [
  {
    question: "Qual é a capital do Brasil?",
    choices: ["Brasília", "Rio de Janeiro", "São Paulo", "Salvador"],
    answer: "Brasília",
  },
  {
    question: "Qual é a capital da Argentina?",
    choices: ["Buenos Aires", "Brasília", "Lisboa", "Paris"],
    answer: "Buenos Aires",
  },
  {
    question: "Qual é a capital da França?",
    choices: ["Roma", "Madri", "Paris", "Londres"],
    answer: "Paris",
  },
  {
    question: "Qual é a capital da Espanha?",
    choices: ["Lisboa", "Madri", "Barcelona", "Valência"],
    answer: "Madri",
  },
  {
    question: "Qual é a capital da Itália?",
    choices: ["Veneza", "Milão", "Roma", "Nápoles"],
    answer: "Roma",
  },
  {
    question: "Qual é a capital do Canadá?",
    choices: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
    answer: "Ottawa",
  },
  {
    question: "Qual é a capital dos Estados Unidos?",
    choices: ["Nova York", "Los Angeles", "Chicago", "Washington D.C."],
    answer: "Washington D.C.",
  },
  {
    question: "Qual é a capital do Reino Unido?",
    choices: ["Liverpool", "Manchester", "Edimburgo", "Londres"],
    answer: "Londres",
  },
];

// Element Selection

const questionElement = document.querySelector('#question')
const choiceElements = document.querySelectorAll('.choice')
const nextButton = document.querySelector('#next')
const scoreElement = document.querySelector('#score')
const wrongElement = document.querySelector('#wrong')

// Variables

let currentQuestion = 0
let answerChosen = false
let score = 0
let wrong = 0


function loadQueastion(index){
  let { question, choices } = questions.at(index)

  questionElement.textContent = question

  choiceElements[0].textContent = choices.at(0)
  choiceElements[0].classList.remove('selected')

  choiceElements[1].textContent = choices.at(1)
  choiceElements[1].classList.remove('selected')

  choiceElements[2].textContent = choices.at(2)
  choiceElements[2].classList.remove('selected')

  choiceElements[3].innerText = choices.at(3)
  choiceElements[3].classList.remove('selected')

  answerChosen = false
}

function shuffleArray(array) {
  let currentIndex = array.length
  let tempValue
  let randomIndex

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    tempValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = tempValue
  }
  return array
}

function checkAnswer (e) {
  if(answerChosen) return;
  answerChosen = true
  e.target.classList.add('selected')

  if(e.target.innerText === questions[currentQuestion].answer){
    score++
    scoreElement.innerText = `Score: ${score}`
    alert("Parabéns! Está correto!")
  } else {
    wrong += 1
    wrongElement.textContent = `Erros: ${wrong}`
    alert(`Errado! Aresposta correta é: ${questions[currentQuestion].answer}`)
  }
}

choiceElements.forEach( (btn) => {
  btn.addEventListener("click", checkAnswer)
})

nextButton.addEventListener("click", () => {
  if(!answerChosen){
    alert("Você deve selecionar uma opção de resposta antes de avançar.")
    return;
  }
  currentQuestion++
  if(currentQuestion < questions.length){

    loadQueastion(currentQuestion);
  } else {
    alert(`Fim de jogo!\nVocê acertou ${score} de ${questions.length} perguntas.`)
    restartQuiz()
  }

})

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  wrong = 0;
  scoreElement.innerText = `Score: ${score}`
  wrongElement.innerText = `Wrong: ${wrong}`
  loadQueastion(currentQuestion)
}

loadQueastion(currentQuestion)

