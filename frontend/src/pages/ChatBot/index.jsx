import { useState } from "react";
import Helmet from "react-helmet";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    const newMessage = e.target.message.value;
    setMessages([...messages, newMessage]);
    e.target.message.value = "";
  };

  return (
    <>
      <Helmet>
        <title>ElectroMarket Chatbot</title>
        <meta name="description" content="Chat with our support team" />
      </Helmet>
      <div className="flex flex-col items-center gap-10 bg-white-A700 dark:bg-gray-300 min-h-screen">
        <section className="flex flex-col items-center py-8 bg-white dark:bg-gray-800 w-full flex-grow">
          <div className="flex flex-col items-center w-full h-screen max-w-screen-md px-6">
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              ChatBot
            </h1>
            <div className="w-full bg-gray-800 h-full border-2 border-gray-500 rounded-lg p-4">
              <div className="bg-white dark:bg-gray-700 rounded-md p-4 overflow-y-auto max-h-80">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className="mb-2 text-gray-900 dark:text-white"
                  >
                    {message}
                  </div>
                ))}
              </div>
              <form onSubmit={handleMessageSubmit} className="mt-4">
                <input
                  type="text"
                  name="message"
                  className="border border-gray-300 rounded-md p-2 w-full dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                  placeholder="Type your message..."
                />
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Chatbot;
