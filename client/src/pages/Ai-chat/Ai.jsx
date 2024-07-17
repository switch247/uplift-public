import React from 'react'
import chatbotImage from '../../assets/chatbot.png';
import { useNavigate } from 'react-router-dom';

export default function Ai (){
    const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/ai-chat');
  };

  return (
    <div style={{ backgroundImage: 'linear-gradient(to right, #243d91 0%, #e3eeff 299%, #24979b 100%)' }} className='w-full max-h-screen flex-col flex items-center'>
        <h1 className='text-3xl mt-4 font-bold text-center text-white'>Ai Assistant</h1>

        <div  className='w-5/6 flex bg-white items-center justify-center mt-10 border h-5/6'>
        <div className='w-1/2 flex flex-col items-center'>
        <h1 className='text-4xl font-bold text-center text-[#43b9dd]'>Wellcome to Mental Health Ai Assistant</h1>
        <img src={chatbotImage} className="w-4/6 mt-4 filter" />

           <button
      style={{
        backgroundImage:
          'linear-gradient(to right, #243d91 0%, #e3eeff 149%, #24979b 100%)',
      }}
      className="w-full max-h-screen mt-7 p-3 font-semibold text-white rounded-full"
      onClick={handleButtonClick}
    >
      Start Chat
    </button>
        </div>
        </div>
        

        
    </div>
  )
}
