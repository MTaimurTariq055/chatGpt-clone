/* eslint-disable */
import { useState, useRef } from "react";
import { Card, Button } from "react-bootstrap";
import { MdLogout, MdRecycling, MdSend } from "react-icons/md";

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

// eslint-disable-next-line react/prop-types
const ChatView = ({ allChat, updateChat, messages, setMessages }) => {
  const messagesEndRef = useRef();
  const inputRef = useRef();
  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    const newMessages = [...messages, { sender: "You", message: formValue }];
    setMessages(newMessages);
    setFormValue("");
    scrollToBottom();
    // eslint-disable-next-line react/prop-types
    if (allChat ) {
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
      <Button
        type="success"
        disabled={!formValue}
        style={{
          color: "white",
          float: "right",
          marginRight: "-90%",
          fontSize: "10px",
        }}
      >
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
                    className="p-6 border rounded-lg border-slate-300 hover:border-slate-500"
                  >
                    <p className="text-base font-semibold">{item.title}</p>
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
                    <Card
                      key={index}
                      className="mx-auto my-2"
                      style={{
                        width: "100%",
                        border: "1px solid grey",
                        height: "50px",
                        borderRadius: "10px",
                      }}
                    >
                      <Card.Body>
                        <Card.Text style={{ marginLeft: "40px" }}>
                          {message.message}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                    <Card
                      key={index}
                      className="mx-auto my-2"
                      style={{
                        width: "100%",
                        border: "1px solid grey",
                        height: "50px",
                        borderRadius: "10px",
                      }}
                    >
                      <Card.Body>
                        <Card.Text style={{ marginLeft: "40px" }}>
                          The response from Api{" "}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}
      <Button
        type="success"
        className="btn"
        disabled={messages?.length === 0}
        style={{
          color: "grey",
          fontSize: "10px",
          marginLeft: "40%",
          border: "1px solid grey",
          borderRadius: "10px",
          height: "50px",
          marginBottom: "10px",
          width: "200px",
        }}
      >
        Regenerate Response <MdRecycling size={20} />
      </Button>
      <form
        className="flex flex-col px-10 mb-2 md:px-32 join sm:flex-row"
        onSubmit={sendMessage}
      >
        <div className="flex items-stretch justify-between w-full">
          <textarea
            ref={inputRef}
            className="w-full grow input input-bordered join-item max-h-[20rem] min-h-[3rem]"
            value={formValue}
            onKeyDown={handleKeyDown}
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
