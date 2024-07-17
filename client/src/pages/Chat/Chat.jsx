import React, { useRef, useState } from "react";
import ChatBox from "../../components/ChatBox/ChatBox";
import Conversation from "../../components/Coversation/Conversation";
import LogoSearch from "../../components/LogoSearch/LogoSearch";
import NavIcons from "../../components/NavIcons/NavIcons";
import "./Chat.css";
import { useEffect } from "react";
import { userChats } from "../../api/ChatRequests";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
import { SearchIcon } from 'lucide-react'
import dp from '../../../../server/public/images/1655342713379paul-walker-21044993-1-402.jpg'

const Chat = () => {
  const dispatch = useDispatch();
  const socket = useRef();
  const { user } = useSelector((state) => state.authReducer.authData);

  const [chats, setChats] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [sendMessage, setSendMessage] = useState(null);
  const [receivedMessage, setReceivedMessage] = useState(null);
  // Get the chat in chat section
  useEffect(() => {
    const getChats = async () => {
      try {
        const { data } = await userChats(user.id);
        setChats(data);
      } catch (error) {
        console.log(error);
      }
    };
    getChats();
  }, [user.id]);

  // Connect to Socket.io
  useEffect(() => {
    socket.current = io("ws://localhost:8800");
    socket.current.emit("new-user-add", user.id);
    socket.current.on("get-users", (users) => {
      setOnlineUsers(users);
    });
  }, [user]);

  // Send Message to socket server
  useEffect(() => {
    if (sendMessage !== null) {
      socket.current.emit("send-message", sendMessage);
    }
  }, [sendMessage]);


  // Get the message from socket server
  useEffect(() => {
    socket.current.on("recieve-message", (data) => {
      console.log(data)
      setReceivedMessage(data);
    }

    );
  }, []);


  const checkOnlineStatus = (chat) => {
    const chatMember = chat.members.find((member) => member !== user.id);
    const online = onlineUsers.find((user) => user.userId === chatMember);
    return online ? true : false;
  };

  return (
    <div className="Chat h-screen">
      {/* Left Side */}
      <div className="Left-side-chat">
        {/* <LogoSearch /> */}
        <div className="Chat-container bg-white m-2 w-full h-full mb-2">
          <div class="relative rounded-md w-full">
            <input type="text" class="w-full px-8 py-3 rounded-l-md bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500" placeholder="Search..." />
            <button type="button" class="absolute inset-y-0 right-0 px-3 py-2 rounded-r-md bg-blue-500 text-white hover:bg-blue-700">
              <SearchIcon className="h-6 w-6 mr-2" style={{ color: 'inherit' }} />
            </button>
          </div>
        <span>Active Now</span>
          <div class="flex flex-wrap justify-center gap-4">
            <div class="w-24 h-24 flex flex-col items-center">
              <img class="w-full h-full rounded-full object-cover" src={dp} alt="Avatar 1" />
              <div class="text-center text-gray-700 mt-2 font-bold">Name 1</div>
            </div>
            <div class="w-24 h-24 flex flex-col items-center">
              <img class="w-full h-full rounded-full object-cover" src={dp} alt="Avatar 2" />
              <div class="text-center text-gray-700 mt-2 font-bold">Name 2</div>
            </div>
            <div class="w-24 h-24 flex flex-col items-center">
              <img class="w-full h-full rounded-full object-cover" src={dp} alt="Avatar 3" />
              <div class="text-center text-gray-700 mt-2 font-bold">Name 3</div>
            </div>
          </div>



          <div>
            <br />
            <h2>Messages</h2>
            <div className="Chat-list">
              {chats.map((chat) => (
                <div
                  onClick={() => {
                    setCurrentChat(chat);
                  }}
                >
                  <Conversation
                    data={chat}
                    currentUser={user.id}
                    online={checkOnlineStatus(chat)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right Side */}

      <div className="Right-side-chat bg-white m-2 w-full  max-h-screen overflow-y-auto">
        {/* <div style={{ width: "20rem", alignSelf: "flex-end" }}>
          <NavIcons />
        </div> */}
        <ChatBox
          chat={currentChat}
          currentUser={user.id}
          setSendMessage={setSendMessage}
          receivedMessage={receivedMessage}
        />
      </div>
    </div>
  );
};

export default Chat;
