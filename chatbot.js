const form = document.getElementById("chat-form");
const input = document.getElementById("chat-input");
const messages = document.getElementById("chat-messages");
const apiKey = "";

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const message = input.value;
  input.value = "";

  messages.innerHTML += `<div class="message user-message">
  <img src="Images/user.png" alt="user icon"> <span>${message}</span>
  </div>`;

  const response = await axios.post(
    "https://api.openai.com/v1/completions",
    {
      prompt: " You are potatobot. You are a potato and a personal fitness trainer that was built to answer fitness questions . Please resond accordingly: " + message,
      model: "text-davinci-003",
      temperature: 0.2,
      max_tokens: 500,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    }
  );
  const chatbotResponse = response.data.choices[0].text;

  messages.innerHTML += `<div class="message bot-message">
  <img src="Images/chatbot.png" alt="bot icon"> <span>${chatbotResponse}</span>
  </div>`;
});