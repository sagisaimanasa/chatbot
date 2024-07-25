function chatbot(input) {
    let output = "";
    input = input.toLowerCase();
    if (input.includes("hello") || input.includes("hi")) {
      output = "Hello, nice to meet you!";
    } else if (input.includes("how are you")) {
      output = "I'm doing fine, thanks for asking.";
    } else if (input.includes("what is your name")) {
      output = "My name is rockey, I'm a chatbot.";
    } else if (input.includes("what can you do")) {
      output = "I can chat with you and answer some simple questions.";
    } else if (input.includes("tell me a joke")) {
      output = "You know what I saw today? Everything I looked at";
    } else if(input.includes("Tell me a story")){
        output="Sure,here is a  story ....A hungry fox once looked everywhere for food. He couldn’t find anything until he stumbled upon a farmer’s wall. He saw big, purple, juicy grapes. He jumped as high as possible to reach the grapes. No matter how many times he tried, he failed. Finally, he gave up and went home, thinking to himself that the grapes must have been sour anyway...Moral:Nothing comes easy, do not hate what you can’t have. "
    }
    else {
      output = "Sorry, I don't understand that. Please try something else.";
    }
    return output;
  }
  function displayUserMessage(message) {
    let chat = document.getElementById("chat");
    let userMessage = document.createElement("div");
    userMessage.classList.add("message");
    userMessage.classList.add("user");
    let userimages = document.createElement("div");
    userimages.classList.add("images");
    let userText = document.createElement("div");
    userText.classList.add("text");
    userText.innerHTML = message;
    userMessage.appendChild(userimages);
    userMessage.appendChild(userText);
    chat.appendChild(userMessage);
    chat.scrollTop = chat.scrollHeight;
  }
  function displayBotMessage(message) {
    let chat = document.getElementById("chat");
    let botMessage = document.createElement("div");
    botMessage.classList.add("message");
    botMessage.classList.add("bot");
    let botAvatar = document.createElement("div");
    botAvatar.classList.add("avatar");
    let botText = document.createElement("div");
    botText.classList.add("text");
    botText.innerHTML = message;
    botMessage.appendChild(botAvatar);
    botMessage.appendChild(botText);
    chat.appendChild(botMessage);
    chat.scrollTop = chat.scrollHeight;
  }
  function sendMessage() {
    let input = document.getElementById("input").value;
    if (input) {
      displayUserMessage(input);
      let output = chatbot(input);
      setTimeout(function() {
        displayBotMessage(output);
      }, 1000);
      document.getElementById("input").value = "";
    }
  }
  document.getElementById("button").addEventListener("click", sendMessage);
  document.getElementById("input").addEventListener("keypress", function(event) {
    if (event.keyCode == 13) {
      sendMessage();
    }
  });