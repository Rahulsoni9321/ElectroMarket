import axios from "axios";

export async function call() {


const options = {
  method: 'POST',
  url: 'https://llm19.p.rapidapi.com/chat',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': 'f4fdb55a1bmsh14f59ccdf535998p170d75jsn53f1dd37107c',
    'X-RapidAPI-Host': 'llm19.p.rapidapi.com'
  },
  data: {
    chatid: '',
    role: 'You are a Helpful Assistant.',
    message: 'Hello! How are you?'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
    return response.data;
} catch (error) {
	console.error(error);
}
}
