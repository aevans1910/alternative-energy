const questions = [
    {
        q: 'What is Hydroelectric energy?',
        a: [
            'A form of renewable energy that uses the power of moving water to generate electricity',
            'A form of renewable energy that uses the power of falling water to generate electricity',
            "A form of renewable energy that uses the power of a liquid's current to generate electricity"
        ],
        correct: 0
    },
    {
        q: "Which one doesn't belong? Geothermal energy is:",
        a: [
            'It always runs, rain or shine',
            'It is clean (does not pollute much)',
            'It is very cheap (< $1000 for all the equipment)'
        ],
        correct: 2
    },
    {
        q: "What is solar power?",
        a: [
            'Solar power is the conversion of sunlight into electricity',
            'Solar power is the cultivation of sunlight',
            'Solar power is the storing of solar electricity',
        ],
        correct: 0
    },
    {
        q: "About how much of the world's renewable energy is hydropower?",
        a: [
            '40%',
            '70%',
            '85%',
        ],
        correct: 1
    },
    {
        q: "How much land per GWh does Geothermal energy use on average?",
        a: [
            '404 square meters',
            '576 square meters',
            '312 square meters'
        ],
        correct: 0
    },
    {
        q: "How much solar power is installed in the US?",
        a: [
            '56 GW',
            '78 GW',
            '69 GW',
        ],
        correct: 2
    },
]
function init() {
    const quizElement = document.getElementById("quiz");
    let quizString = ""

    questions.forEach(function(question, qIndex) {
    let answerString = ""

        const answerOrder = randomRange(question.a.length);
        question.a.forEach(function(answer, aIndex) {
            answerString += `
                <li style="order: ${answerOrder[aIndex]}">
                    <label>
                        <input 
                            type="radio" 
                            name="q-${qIndex}"
                            data-correct="${question.correct === aIndex}"
                        >
                        ${answer}
                    </label>
                </li>`
        })
        quizString += `
            <form>
                <h1>${question.q}</h1>
                <div class="alert"></div>
                <ul style="display: flex; flex-direction: column">
                    ${answerString}
                </ul>
                <button type="submit">Submit</button>
            </form>`
    })

    quizElement.innerHTML = quizString
    quizElement.addEventListener("submit", function(e) {
        e.preventDefault();
        const alert = e.target.querySelector("div.alert")
        const selectedInput = e.target.querySelector("input[type=radio]:checked");
            if (selectedInput === null) {
                alert.innerHTML = "Please chose one of the options below."
            } else if (selectedInput.dataset.correct === "true"){
                alert.innerHTML = "Good job, you got it right :)"
            } else {
                alert.innerHTML = "Sorry, wrong answer :( Try again."
            }
    })
}
init()

function random(n) {
    const r = Math.random() * n
    return Math.floor(r)
}

function randomRange(x){
    const arr = []
    for (let i =0; i < x; i += 1) {
        arr.push(i)
    }
    const randomArr = []
    while(arr.length > 0) {
        const randomIndex = random(arr.length)
        const randomNumber = arr[randomIndex]
        randomArr.push(randomNumber)
        arr.splice(randomIndex,1)
    }
    return randomArr
}

console.log(randomRange(10))