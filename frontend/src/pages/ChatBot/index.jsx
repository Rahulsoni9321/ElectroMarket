import { useState } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    // Assuming you have a message input field, you can add its value to the messages state
    const newMessage = e.target.message.value;
    setMessages([...messages, newMessage]); // Append the new message to the existing messages array
    e.target.message.value = ""; // Clear the message input field after submission
  };

  return (
    <div className="mt-8">
      <div className="border border-gray-300 rounded-md p-4">
        {/* Render chat messages */}
        {messages.map((message, index) => (
          <div key={index} className="mb-2">
            {/* Display each message */}
            {message}
          </div>
        ))}
      </div>
      {/* Chat input */}
      <form onSubmit={handleMessageSubmit} className="mt-4">
        <input
          type="text"
          name="message" // Add a name attribute to the input field
          className="border border-gray-300 rounded-md p-2 w-full"
          placeholder="Type your message..."
        />
      </form>
    </div>
  );
};

export default Chatbot;
