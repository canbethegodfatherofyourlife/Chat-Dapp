import React,{useState} from 'react'
import { useMoralis } from "react-moralis"

const SendMessage = ({endOfMessage}) => {
    const {user,Moralis} = useMoralis();
    const [message,setmessage] = useState("");
    const sendMessage = (e) => {
        e.preventDefault();
        if(!message){
            return;
        }
        const Messages = Moralis.Object.extend("Messages");
        const messages = new Messages();

        messages.save({
            message: message,
            username: user.getUsername(),
            ethAddress: user.get('ethAddress'),
        })
        .then((message) => {

        },
        (error) => {
            consol.log(error.message);
        }
    )
    endOfMessage.current.scrollIntoView({ behavior: 'smooth'})
    setmessage("")
}

  return (
    <form className="w-11/12 flex fixed bottom-10 
    bg-black opacity-80 px-6 py-4 max-w-2xl shadow-xl rounded-full border-blue-400 border-4">
        <input type="text"
        value={message} 
        onChange={e => setmessage(e.target.value)}
        className="flex-grow outline-none 
        bg-transparent text-white placeholder-gray-500 pr-5" placeholder={`Enter a Message ${user.getUsername()}...`} />
        <button 
        className="font-bold text-pink-500"
        onClick={sendMessage}>Send</button>
    </form>
  )
}

export default SendMessage