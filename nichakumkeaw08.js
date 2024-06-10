// clock

function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0')
    const minutes = now.getMinutes().toString().padStart(2, '0')
    const seconds = now.getSeconds().toString().padStart(2, '0')
    const timeString = `${hours}:${minutes}:${seconds}`
    document.getElementById('clock').textContent = timeString
}

setInterval(updateClock, 1000);

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
const weatherDataDiv = document.getElementById('weatherData');

weatherDataDiv.innerHTML = `<p>${data.name} - ${Math.floor(data.main.temp)}°C - ${data.weather[0].description} <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" width = "40" height = "40"> </p>`;
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

// lucky number

function randomNumber(max) {
    return Math.round(Math.random() * max);
  }
  const button = document.getElementById('buttontwo');
  const resultBox = document.getElementById('divone');
  
  function printNumber() {
    const number = randomNumber(10)
    let message
    
    switch(number) {
      case 0:
        message = "You can never get a cup of tea large enough or a book long enough to suit me";
        break;
      case 1:
        message = "You are never too old to set another goal or to dream a new dream";
        break;
      case 2:
        message = "Courage, dear heart";
        break;
      case 3:
        message = "You can never get a cup of tea large enough or a book long enough to suit me";
        break;
      case 4:
        message = "You can make anything by writing";
        break;
      case 5:
        message = "There are far, far better things ahead than any we leave behind";
        break;
      case 6:
        message = "To love at all is to be vulnerable";
        break;
      case 7:
        message = "Experience: that most brutal of teachers. But you learn, my God, do you learn";
        break;
      case 8:
        message = "Integrity is doing the right thing, even when no one is watching";
        break;
      case 9:
        message = "You can't go back and change the beginning, but you can start where you are and change the ending";
        break;
      default:
        message = "Hardships often prepare ordinary people for an extraordinary destiny";
        break;
    }
  
    
      resultBox.textContent = `Your Lucky Number is ${number} = ${message}`;
    }
  
    setTimeout(function() {
      resultBox.style.display = 'none';
    }, 10000); 
  
  
  resultBox.style.display = 'none';
  
  button.addEventListener('click', function() {
    
    resultBox.style.display = 'block';
    
    printNumber();
  });

// feedback form

  function feedbackForm() {
    let x = document.forms["myForm"]["feedback"].value;
    if (x == "") {
        alert("Feedback must be filled out");
        return false;
    }
    
    alert("Form submitted!")
    document.getElementById("myForm").reset()
    
    return false
}

