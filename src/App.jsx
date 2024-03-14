import { useState } from "react";
import SideBar from "./components/SideBar";
import ChatView from "./components/ChatView";

const App = () => {
  const [allChat, setAppChat] = useState([]);
  const [messages, setMessages] = useState([]);
  const updateChat = (newState) => {
    setAppChat([...newState]);
    console.log("new",newState);
  };

  return (
    <div className="flex transition duration-500 ease-in-out">
      <SideBar allChat={allChat} updateChat={updateChat} messages={messages} setMessages={setMessages} />
      <ChatView allChat={allChat} updateChat={updateChat} messages={messages} setMessages={setMessages} />
    </div>
  );
};

export default App;
