// local time

function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0')
    const minutes = now.getMinutes().toString().padStart(2, '0')
    const seconds = now.getSeconds().toString().padStart(2, '0')
    const timeString = `${hours}:${minutes}:${seconds}`
    document.getElementById('localtime').textContent = timeString
}

setInterval(updateClock, 1000);

// London time

function londonLocalTime() {
  const vancouverOffset = -7
  const londonOffset = 1
  const now = new Date();
  const timeDifference = londonOffset - vancouverOffset
  now.setHours(now.getHours() + timeDifference)
  const hours = now.getHours().toString().padStart(2, '0')
  const minutes = now.getMinutes().toString().padStart(2, '0')
  const seconds = now.getSeconds().toString().padStart(2, '0')
  const timeString = `${hours}:${minutes}:${seconds}`
  document.getElementById('londonlocaltime').textContent = timeString
}

setInterval(londonLocalTime, 1000);

// Weather API

fetch('https://api.openweathermap.org/data/2.5/weather?lat=49.2827&lon=-123.1207&appid=72673e9232497d283eb95d9b2f750bb0&units=metric')
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
})
.then(data => {
    displayWeatherData(data);
})
.catch(error => {
    console.error('There was a problem with the fetch operation:', error);
});

function displayWeatherData(data) {
const weatherMain = document.getElementById('weathercondition');
const weatherCity = document.getElementById('weathercity');
const weatherIcon = document.getElementById('weathericon');
const weatherTemp = document.getElementById('weathertemp');

weathericon.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"> </p>`;

weatherCity.textContent = `${data.name}`;
weatherMain.textContent = `${data.weather[0].description}`
weatherTemp.textContent = `${Math.floor(data.main.temp)}°C`;
}

fetch('https://api.openweathermap.org/data/2.5/weather?lat=51.5072&lon=-0.1276&appid=72673e9232497d283eb95d9b2f750bb0&units=metric')
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    console.log(response);
    return response.json();
})
.then(data => {
    console.log(data);
    displayLondonWeatherData(data);
    })
.catch(error => {
    console.error('There was a problem with the fetch operation:', error);
});

function displayLondonWeatherData(data) {
const weatherLondonMain = document.getElementById('weatherlondoncondition');
const weatherLondonCity = document.getElementById('weatherlondon');
    const weatherLondonIcon = document.getElementById('weatherlondonicon');
    const weatherLondonTemp = document.getElementById('weatherlondontemp');

    weatherLondonCity.textContent = `${data.name}`;
    weatherLondonMain.textContent = `${data.weather[0].description}`;
    weatherLondonIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">`;
    weatherLondonTemp.textContent = `${Math.floor(data.main.temp)}°C`;
}



// Quiz

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("quizForm");
    const celebration = document.getElementById("celebration");
    const guessButton = document.getElementById("guessButton");
    const correctAnswer = ["Thailand", "UK", "Canada"];  // The correct answer

    guessButton.addEventListener("click", function() {
        const userAnswer = document.getElementById("answer").value.trim();

        if (correctAnswer.includes(userAnswer)) {
            celebration.style.display = "block";  // Show celebration message
            setTimeout(function() {
                celebration.style.display = "none";  // Hide celebration message after 6 seconds
            }, 2000);  // 2000 milliseconds = 2 seconds
        } else {
            celebration.style.display = "none";  // Hide celebration message if it was previously shown
            alert("Sorry, the answer is not correct. Please try again.");
        }
    });
});

// career highlights

let counter = 0;

    function printMessage() {
      const messages = [
        "I started my career at Framestore, London as a runner, then the head of paint & roto dep, and finally became a compositor.",
        "I worked on two movies that won the Academy Award for Best Visual Effects: The Golden Compass (2008) and Avatar (2010)",
        "The company I worked for the longest is Digital Domain, where I worked on many movies, including Avengers: Infinity War, Beauty and the Beast, and Spiderman",
        "I was a mentor and teacher for a compositing course at a VFX school, Facet School of Visual Effects in Mexico. I worked there twice, 3 months each time. I love traveling!",
        "A movie I worked on that was banned in Russia due to its portrayal of the Russian military was 'Child44'. I enjoyed working on it at Image Engine in Vancouver.",
        "I worked on two animated movies, 'The Tale of Despereaux' and 'The Pirates! Band of Misfits', at Framestore in London and Aardman in Bristol, UK. respectively.",
        "I've worked in 3 countries and 5 cities: UK (London and Bristol), Canada (Vancouver and Montreal), and Mexico (Pachuca).",
        "While working on 'Beauty and the Beast', I had a chance to wear a dress made for Emma Watson because they needed someone to wear it to test the lighting.",
        "From the list of movies I worked on, the one I enjoyed watching the most is 'Now You See Me', and the one I enjoyed the least is 'The Huntsman: Winter's War'",
        "The cutest movie I worked on is Dumbo. I love the baby elephant!"
      ];
      
      if (counter >= messages.length) {
        counter = 0;
      }
      
      const message = messages[counter];
      const resultBox = document.getElementById("careerdiv");
      resultBox.textContent = message;
      counter++;
      
      console.log(message);
    }

    document.getElementById("careerbutton").addEventListener("click", printMessage);

// 

// Rock Paper Scisscors
// 'ROCK✊', 'PAPER📄', 'SCISSORS✂️'

let userHasChosen = false;
        
function startCountdown() {
    let countdownElement = document.getElementById('countdown');
    let gameElement = document.getElementById('game');
    let startButton = document.getElementById('start-button');
    let countdown = 3;
    userHasChosen = false;
    countdownElement.innerText = countdown;

    let countdownInterval = setInterval(() => {
        if (countdown > 0) {
            countdownElement.innerText = countdown;
            countdown--;
        } else if (countdown === 0) {
            countdownElement.innerText = 'Start!';
            countdown--;
        
            setTimeout(() => {
                if (!userHasChosen) {
                    play(null);
                }

            }, 8000); // Allow 5 seconds for the user to make a choice
    //              if (setTimeout(null, 5000)) {
    //                 document.getElementById('result').innerText = `
    //                   YOU = Time out! Computer wins!`
    //                   return;
    // }
        }
    }, 500);
   
}


document.getElementById('start-button').addEventListener('click', startCountdown);

function computerPlaygame() {
    const choices = ['✊', '📄', '✂️']
    const randomChoice = Math.round(Math.random() * 2)
    return choices[randomChoice]
}


function playgame(userChoice) {
    const computerChoice = computerPlaygame()
    determineWinner(userChoice, computerChoice)

    setTimeout(() => {
        clearResult();
    }, 3000);

}

function determineWinner(userChoice, computerChoice) {

if (userChoice === computerChoice) {
document.getElementById('result').innerHTML = `
<p>YOU chose  ${userChoice}</p>   
<p>COMPUTER  ${computerChoice}</p>
<p>It's a tie!</p>
`
return
} 
 else if (
(userChoice === '✊' && computerChoice === '✂️') ||
(userChoice === '📄' && computerChoice === '✊') ||
(userChoice === '✂️' && computerChoice === '📄')
) {
document.getElementById('result').innerHTML = `
<p>YOU chose ${userChoice}</p>   
<p>COMPUTER ${computerChoice}</p>
<p>You win!</p>
`
} else {
document.getElementById('result').innerHTML = `
<p>YOU chose ${userChoice}</p>   
<p>COMPUTER ${computerChoice}</p>
<p>Computer wins</p>
`
}  
}

function clearResult() {
    document.getElementById('result').innerHTML = '';
}



// work experience


document.addEventListener('DOMContentLoaded', () => {
    // Function to display a message in the popup
    const showMessage = (message) => {
        const messageElement = document.getElementById('popup-message');
        messageElement.innerHTML = message;
        messageElement.style.color = 'purple';
        messageElement.style.fontFamily = 'RALEWAY, sans-serif';

        document.getElementById('wepopup').style.display = 'flex';
    }

    // Function to close the popup
    const closePopup = () => {
        document.getElementById('wepopup').style.display = 'none';
    }

    // Attach the closePopup function to the global scope so it can be accessed from the HTML
    window.closePopup = closePopup;
    window.showMessage = showMessage;
});






