import React from "react";

const Chat = () => {
  async function sendPromptToChatGPT(prompt) {
    const apiKey = ""; // Replace with your OpenAI API key
    try {
      const response = await axios.post(
        "https://api.openai.com/v1/engines/text-davinci-003/completions",
        {
          prompt: prompt,
          max_tokens: 500, // Adjust the number of tokens according to your requirements
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );
      // Handle the response from the API
      const generatedText = response.data.choices[0].text.trim();
      console.log(response);
      // console.log(generatedText); // Do something with the generated text
      return response;
    } catch (error) {
      console.error("Error:", error);
    }
  }
  const App = () => {
    const [prompt, setPrompt] = useState("");
    const [res, setRes] = useState(null);
    const handleInputChange = (event) => {
      setPrompt(event.target.value);
    };
    const handleButtonClick = () => {
      // console.log(prompt); // Do something with the prompt value
      setRes(sendPromptToChatGPT(prompt));
    };
    return (
      <div className="App">
        <input
          className="inpt"
          type="text"
          label="Enter Prompt"
          value={prompt}
          onChange={handleInputChange}
        ></input>
        <button onClick={handleButtonClick}>Submit</button>
        {/* <p>{res}</p> */}
      </div>
    );
  };
};

export default Chat;
