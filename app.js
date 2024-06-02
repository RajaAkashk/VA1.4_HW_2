<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>replit</title>

</head>

<body>
  <label for="ansTextarea">What is a JavaScript? </label>
  <textarea id="ansTextarea"></textarea>
  <button id="ansTextareaBtn">Display Answer</button>
  <button id="countWordsBtn">Count Words</button>
  <p id="ansTextareaDisplay"></p>


  <label for="todoTextarea">List to do's: </label>
  <textarea id="todoTextarea"></textarea>
  <button id="todoTextareaBtn">Display to do</button>
  <button id="countTodoBtn">Count to do</button>
  <p id="todoTextareaDisplay"></p>


  <label for="passwordInput">Enter Password:</label>
  <input type="password" id="passwordInput" />
  <button id="passwordInputBtn">Display Password</button>
  <button id="checkPasswordBtn">Check Password</button>
  <p id="passwordInputDisplay"></p>

  <script>

    const ansTextarea = document.querySelector('#ansTextarea')
    const ansTextareaBtn = document.querySelector('#ansTextareaBtn')
    const ansTextareaDisplay = document.querySelector('#ansTextareaDisplay')
    const countWordsBtn = document.querySelector('#countWordsBtn')


    ansTextareaBtn.addEventListener('click', function () {
      let answer = ansTextarea.value
      ansTextareaDisplay.textContent = `Your answer: ${answer}`
    })

    countWordsBtn.addEventListener("click", function () {
      let answer = ansTextarea.value
      const countWords = ansTextarea.value.split(" ")
      let count = 0;
      for (let i = 0; i < countWords.length; i++) {
        count++;
      }

      if (count <= 3) {
        ansTextareaDisplay.innerHTML = `<p>Your answer: ${answer}</p> </n> Your word count: ${count}.</n> <p> Your answer is very short.</p> `
        ansTextareaDisplay.style.color = "red"
      }
      else if (count >= 7) {
        ansTextareaDisplay.innerHTML = `<p>Your answer: ${answer}</p> </n> 
 Your word count: ${count}.</n> <p> Your answer is too long.</p> `
        ansTextareaDisplay.style.color = "red"
      }
      else {
        ansTextareaDisplay.innerHTML = `<p>Your answer: ${answer}</p> </n>  Your word count: ${count}. </n> <p>Your answer is great.</p> `
        ansTextareaDisplay.style.color = "green"
      }
    })



    const todoTextarea = document.querySelector('#todoTextarea')
    const todoTextareaBtn = document.querySelector('#todoTextareaBtn')
    const todoTextareaDisplay = document.querySelector('#todoTextareaDisplay')
    const countTodoBtn = document.querySelector('#countTodoBtn')

    todoTextareaBtn.addEventListener('click', function () {
      let result = todoTextarea.value
      todoTextareaDisplay.textContent = `Your To Do's: ${result}`
    })

    countTodoBtn.addEventListener('click', function () {
      let sum = 0;
      // todoTextarea.indexOf = ","
      const countToDo = todoTextarea.value.split(", ");
      for (let i = 0; i < countToDo.length; i++) {
        sum++;
      }
      todoTextareaDisplay.textContent = `Your Number of to do's: ${sum}`
      todoTextareaDisplay.style.color = "green";
    })



    const passwordInput = document.querySelector('#passwordInput')
    const passwordInputBtn = document.querySelector("#passwordInputBtn")
    const checkPasswordBtn = document.querySelector('#checkPasswordBtn')
    const passwordInputDisplay = document.getElementById('passwordInputDisplay')

    passwordInputBtn.addEventListener('click', function () {
      const displayPassword = passwordInput.value;
      passwordInputDisplay.textContent = `Your Password: ${displayPassword}`
    })

    checkPasswordBtn.addEventListener('click', function () {
      let countChar = 0;
      const number = passwordInput.value.split('')
      for (let i = 0; i < number.length; i++) {
        countChar++;
      }
      passwordInputDisplay.textContent = `Your Password charcter: ${countChar}`

      if (countChar > 5 && (passwordInput.value.includes("@") || passwordInput.value.includes("$") || passwordInput.value.includes("!"))) {
        passwordInputDisplay.textContent = `Your Password charcter is great.`
        passwordInputDisplay.style.color = "green"
      }
      else {
        passwordInputDisplay.textContent = `Your Password should have more than 5 characters and contain @ or $ or ! symbols.`
        passwordInputDisplay.style.color = "red"
      }
    })

  </script>

</body>

</html>
