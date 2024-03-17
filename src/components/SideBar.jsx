/* eslint-disable */
import { useState, useEffect } from "react";
import {
  MdMenu,
  MdOutlineArrowRight,
  MdChat,
  MdSave,
  MdDelete,
  MdLink,
  MdSort,
} from "react-icons/md";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { AiOutlineGithub } from "react-icons/ai";
import "./chart.css";

const SideBar = ({ allChat, updateChat, messages, setMessages }) => {
  const [open, setOpen] = useState(true);

  function handleResize() {
    window.innerWidth <= 720 ? setOpen(false) : setOpen(true);
  }

  useEffect(() => {
    handleResize();
  }, []);

  return (
    <section
      className={`${
        open ? "w-72" : "w-16"
      } bg-neutral flex flex-col items-center gap-y-4 h-screen pt-4 relative duration-100 shadow-md`}
    >
      <div className="flex items-center justify-between w-full px-2 mx-auto">
        <div
          className={` ${
            !open && "scale-0 hidden"
          } flex flex-row items-center gap-2 mx-auto w-full`}
        >
          <img
            src="/src/assets/Group_39488.png"
            alt="logo"
            className="w-6 h-6"
          />
          <div>
            <h1 className={` ${!open && "scale-0 hidden"}`}>John Carter</h1>
            <p className="accountSet">Account Settings</p>
          </div>
        </div>
        <div
          className="mx-auto btn btn-square btn-ghost"
          onClick={() => setOpen(!open)}
        >
          {open ? <MdOutlineArrowRight size={25} /> : <MdMenu size={15} />}
        </div>
      </div>

      <ul className="w-full menu rounded-box">
        <li>
          <button
            className="border border-slate-500 newChatBtn"
            onClick={() => setMessages("")}
          >
            <p className={`${!open && "hidden"} newChatp`}>New Chat</p>
            <img
              src="/src/assets/NewChat_Icon.png"
              alt="Custom Icon"
              className="newChatIcon"
            />
          </button>
        </li>
      </ul>
      {messages?.length > 0 && (
        <>
          <div className="myChatDiv">
            <h3 placeholder="" className="myChatHead">
              My Chats
            </h3>
            <Button
              variant="outline-secondary"
              id="button-addon3"
              className="myChatBtn"
            >
              <MdSort />
            </Button>
          </div>
          <div className="container">
            <div className="row">
              <button
                className="myBtn gradientBox"
                style={{
                  height: "10px !important",
                  fontSize: "9px",
                  margin: "6px",
                }}
              >
                <MdChat size={12} style={{ padding: "2px" }} />
                Chats &nbsp; <p className="chatCount"> 12 </p>
              </button>
              <button className="myBtn savedChatBtn">
                <MdSave size={12} style={{ padding: "2px" }} />
                Saved &nbsp; <p className="chatCount"> 26 </p>
              </button>
            </div>
          </div>
          <InputGroup
            style={{ display: "flex", alignItems: "center", height: "20px" }}
          >
            <FormControl
              placeholder=""
              aria-label="Search"
              aria-describedby="basic-addon2"
              style={{ flex: 1, width: "170px" }}
            />
            <Button
              variant="outline-secondary"
              id="button-addon3"
              className="sortBtn"
            >
              <MdSort />
            </Button>
          </InputGroup>
          <div>
            {allChat.map((item, index) => (
              <div key={index} className="allChatDiv">
                <MdSave size={25} style={{ marginRight: "8px" }} />
                <div>
                  <h5 style={{ fontSize: "10px", color: "white" }}>
                    {item.message}
                  </h5>
                  <p style={{ fontSize: "6px" }}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever
                  </p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      <ul className="absolute bottom-0 w-full gap-1 menu rounded-box">
        <li>
          <a target="_blank">
            <MdDelete size={15} />
            <p className={`${!open && "hidden"}`}>Clear Conversation</p>
          </a>
        </li>
        <li>
          <a target="_blank">
            <AiOutlineGithub size={15} />
            <p className={`${!open && "hidden"}`}>Open Ai Discord</p>
          </a>
        </li>
        <li>
          <a>
            <MdLink size={15} />
            <p className={`${!open && "hidden"}`}>Updates & FAQ</p>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default SideBar;
