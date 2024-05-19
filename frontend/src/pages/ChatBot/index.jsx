import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Helmet from "react-helmet";
import { backend_route } from "../../config";
import { useAuthContext } from "../../Context/AuthContext";
import {Link, useNavigate} from "react-router-dom";

const Chatbot = () => {
  const [messages, setMessages] = useState("");
  const [input, setinput] = useState("");
  const {isauthenticated} = useAuthContext();
  const navigate= useNavigate();

  const handleclick = async () => {
    console.log("response sent");
    try {
   
      const response = await axios.post(`${backend_route}/user/gpt`, {input:input});
      setMessages(response.data.response);
    } catch (e) {
      console.error(e);
      setMessages(`Something went wrong while fetching the response.`, e);
    }
  };

  if (!isauthenticated) {
    return <div className="flex flex-col items-center gap-4  dark:bg-gray-800 min-h-screen border-l border-gray-500 overflow-y-auto px-3">
      <div className="text-white text-xl font-normal text-center">Signup to access Chatbot Support.</div>
      <button onClick={()=>navigate('/user/signin')} className="text-white text-md font-medium bg-violet-700 px-4 py-0.5 rounded-md">Signup</button>
       </div>
  }

  return (
    <>
      <Helmet>
        
        <title>ElectroMarket Chatbot</title>
        <meta name="description" content="Chat with our support team" />
      </Helmet>
      <div className="flex flex-col items-center gap-10  dark:bg-gray-800 min-h-screen border-l border-gray-500 overflow-y-auto">
        <section className="flex flex-col items-center py-8  w-full flex-grow">
          <div className="flex flex-col items-center w-full h-screen max-w-screen-md px-6">
            <h1 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Have Doubt related to this Product?{" "}
              <span className="text-violet-500">Ask AI..!!</span>
            </h1>
            <div className="w-full bg-gray-800  border-gray-500 rounded-lg flex gap-3 items-center">
              <input
                type="text"
                name="message"
                onChange={(e) => {
                  setinput(e.target.value);
                }}
                className="border border-gray-300 rounded-md px-2 py-0.5 text-sm dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                placeholder="Type your message..."
              />
              <button
                onClick={handleclick}
                className="bg-violet-600 text-gray-200 text-sm px-4 py-0.5 rounded-md"
              >
                ask
              </button>
            </div>
            <div className="text-md transition-all font-normal text-gray-100 py-4">
              {messages}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Chatbot;
