import React from 'react'
import chatbotImage from '../../assets/chatbot.png';
import chat from '../chat.json'
import { format } from "timeago.js";
import "./AiChat.css";
function AiChat(props) {
  return (
    <div style={{ backgroundImage: 'linear-gradient(to right, #243d91 0%, #e3eeff 299%, #24979b 100%)' }} className='w-full max-h-screen flex-col flex items-center'>
        <h1 className='text-3xl mt-4 font-bold text-center text-white'>Ai Assistant</h1>

        <div  className='w-5/6 flex bg-white mt-10 border h-5/6'>
        <div className='w-full flex flex-col items-center'>
          <img src={chatbotImage} alt="" className=' h-full object-cover'/>
        </div>
        <div className='w-full flex flex-col items-center'>
        {/* <div className="ChatBox-container "> */}
        {chat ? (
          <>
            {/* chat-body */}
            <div className="relative chat-body bg-[#222] w-11/12" >
              {chat.map((message) => (
                <>
                  <div ref={scroll}
                    className={
                      message.senderId === "clynftm9i0001n2hpivbddlnj"
                        ? "message own"
                        : "message"
                    }
                  >
                    <span>{message.text}</span>{" "}
                    <span>{format(message.createdAt)}</span>
                  </div>
                </>
              ))}
            </div>

<div className='w-full gap-2 flex p-2 bottom-0 justify-between bg-[#333]'>
          <input type='text'
          placeholder='Ask me anything ...' 
          className=' ml-4 w-full sticky bg-blue-100 p-1 border rounded-2xl placeholder:text-blue-600 '/>
          <button className='bg-blue-500 text-white p-1 rounded-xl'>Send</button>
</div>
          </>
        ) : (
          <span className="chatbox-empty-message ">
            Tap on a chat to start conversation...
          </span>
        )}
      {/* </div> */}
        {/* <h1 className='text-xl font-bold text-center text-[#beced3] w-full border-b-2'>Chat Bot</h1>

        {chat.map((message, index) => (
          <div key={index} className={`w-full p-2 ${message.senderId === 'clynftm9i0001n2hpivbddlnj' ? 'text-right' : 'text-left'} `}>
            {message.text} 
            </div>
        ))}

        <div className='w-full gap-2 flex p-2 absolute bottom-0 '>
          <input type='text'
          placeholder='Ask me anything ...' 
          className='w-full fixed bg-blue-100 p-1 border rounded-2xl placeholder:text-blue-600 '/>
          <button className='bg-blue-500 text-white p-1 rounded-xl'>Send</button> */}

        </div>
        </div>
        </div>
        

        

  )
}

export default AiChat
