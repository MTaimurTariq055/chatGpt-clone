/* eslint-disable */
import { useState, useRef } from "react";
import { Card, Button } from "react-bootstrap";
import {
  MdCopyAll,
  MdDelete,
  MdEdit,
  MdLogout,
  MdRecycling,
  MdSend,
  MdShare,
  MdThumbDown,
  MdThumbUp,
} from "react-icons/md";
import "./chart.css";

const template = [
  {
    title: "Come up with concepts",
    prompt: "for a retro style arcade game",
  },
  {
    title: "Explain why popcorn pops",
    prompt: "to a kid who loves to watch in the microwave",
  },
  {
    title: "Give me idea",
    prompt: "For what to do with my kid art.",
  },
  {
    title: "Come up with concepts",
    prompt: "for a retro style arcade game",
  },
];

const ChatView = ({ allChat, updateChat, messages, setMessages }) => {
  const messagesEndRef = useRef();
  const inputRef = useRef();
  const [formValue, setFormValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };
  const sendMessage = async (e) => {
    e.preventDefault();
    const newMessages = [...messages, { sender: "You", message: formValue }];
    setMessages(newMessages);
    setFormValue("");
    scrollToBottom();
    if (allChat) {
      updateChat([...newMessages]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage(e);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="relative flex flex-col h-screen p-1 overflow-hidden dark:bg-light-grey">
      <Button type="success" disabled={!formValue} className="logoutBtn">
        Logout <MdLogout size={20} />
      </Button>
      {messages.length === 0 ? (
        <section
          className="flex flex-col flex-grow w-full px-4 overflow-y-scroll sm:px-10 md:px-32"
          style={{ marginTop: "100px" }}
        >
          <div className="flex my-2">
            <div className="w-screen overflow-hidden">
              <ul className="grid grid-cols-2 gap-2 mx-10">
                {template.map((item, index) => (
                  <li
                    onClick={() => setFormValue(item.prompt)}
                    key={index}
                    className="p-6 rounded-lg hover:border-slate-500 gradientBox"
                    style={{ height: "69px" }}
                  >
                    <p
                      className="text-base font-semibold"
                      style={{ marginTop: "-10px", color: "white" }}
                    >
                      {item.title}
                    </p>
                    <p className="text-sm">{item.prompt}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ) : (
        <section className="flex flex-col flex-grow w-full px-4 overflow-y-scroll sm:px-10 md:px-32">
          <div className="flex">
            <div className="w-screen overflow-hidden">
              <ul className="grid grid-cols-1 gap-1 mx-10">
                {messages.map((message, index) => (
                  <div key={`message-${index}`}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img
                        src="/images/Ellipse_139.png"
                        alt="Profile Image"
                        className="msgImg"
                      />
                      <Card key={index} className="mx-auto my-2 msgCard">
                        <Card.Body className="msgBody">
                          <span style={{ marginRight: "auto" }}>
                            <Card.Text>{message.message}</Card.Text>
                          </span>
                          <MdEdit size={20} />
                        </Card.Body>
                      </Card>
                    </div>
                    <div
                      style={{ position: "relative", display: "inline-block" }}
                    >
                      <div className="cDiv">
                        <div>
                          <button
                            className="myBtn1 btn-outline-primary mr-2"
                            style={{ width: "80px" }}
                          >
                            <span className="cDspan">
                              <MdCopyAll size={10} />
                              <span
                                style={{ marginLeft: "5px", fontSize: "10px" }}
                              >
                                Copy
                              </span>
                            </span>
                          </button>
                          <button
                            className="myBtn1 btn-outline-danger mr-2"
                            style={{ width: "120px" }}
                          >
                            <span className="shareSpan">
                              <MdShare size={10} />
                              <span
                                style={{ marginLeft: "5px", fontSize: "10px" }}
                              >
                                Share link to Prompt
                              </span>
                            </span>
                          </button>
                          <button
                            className="myBtn1 btn-outline-warning"
                            style={{ width: "100px" }}
                          >
                            <span className="delSpan">
                              <MdDelete size={12} />
                              <span
                                style={{ marginLeft: "5px", fontSize: "10px" }}
                              >
                                Delete Prompt
                              </span>
                            </span>
                          </button>
                        </div>
                      </div>
                      <div className="resDiv">
                        <img
                          src="/images/image_29-removebg-preview_1.png"
                          alt="Profile Image"
                          className="resImg"
                        />
                        <Card key={index} className="mx-auto my-2 resCard">
                          <Card.Body>
                            <Card.Text style={{ marginLeft: "40px" }}>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry's standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book. It has survived not only five centuries, but
                              also the leap into electronic typesetting,
                              remaining essentially unchanged. It was
                              popularised in the 1960s with the release of
                              Letraset sheets containing Lorem Ipsum passages,
                              and more recently with desktop publishing software
                              like Aldus PageMaker including versions of Lorem
                              Ipsum.
                            </Card.Text>
                            <div className="resThumb">
                              <MdThumbUp size={20} />
                              <MdThumbDown size={20} />
                            </div>
                          </Card.Body>
                        </Card>
                      </div>
                    </div>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}
      {messages?.length > 0 && (
        <Button
          type="success"
          className="gradientBox regButton"
          disabled={messages?.length === 0}
        >
          Regenerate Response <MdRecycling size={20} />
        </Button>
      )}
      <form
        className="flex flex-col px-10 mb-2 md:px-32 join sm:flex-row"
        onSubmit={sendMessage}
      >
        <div className="flex items-stretch justify-between w-full">
          <textarea
            ref={inputRef}
            className={`w-full grow input join-item max-h-[20rem] min-h-[2rem] ${
              isFocused ? "focused" : ""
            }`}
            value={formValue}
            placeholder="How can i help you ?"
            onKeyDown={handleKeyDown}
            onFocus={handleFocus}
            style={{ padding: "10px", border: "1px solid grey" }}
            onChange={(e) => setFormValue(e.target.value)}
          />
          <button type="submit" className="join-item btn" disabled={!formValue}>
            <MdSend size={30} />
          </button>
        </div>
      </form>
    </main>
  );
};

export default ChatView;
