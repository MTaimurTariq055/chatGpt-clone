/* eslint-disable */
import { useState, useEffect } from "react";
import {
  MdClose,
  MdMenu,
  MdOutlineCoffee,
  MdOutlineVpnKey,
  MdAdd,
} from "react-icons/md";
import { AiOutlineGithub } from "react-icons/ai";

const SideBar = ({allChat, updateChat, messages, setMessages}) => {
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
            src="https://cdn1.vectorstock.com/i/1000x1000/73/40/user-icon-male-person-symbol-profile-avatar-vector-20787340.jpg"
            alt="logo"
            className="w-6 h-6"
          />
          <h1 className={` ${!open && "scale-0 hidden"}`}>John Carter</h1>
        </div>
        <div
          className="mx-auto btn btn-square btn-ghost"
          onClick={() => setOpen(!open)}
        >
          {open ? <MdClose size={15} /> : <MdMenu size={15} />}
        </div>
      </div>

      <ul className="w-full menu rounded-box">
        <li>
          <button className="border border-slate-500" onClick={() => setMessages("")}>
            <p className={`${!open && "hidden"}`}>New Chat</p>
            <MdAdd size={15} />
          </button>
        </li>
      </ul>
      <div className="container">
        <div className="row">
          <button
            className="btn"
            style={{
              border: "1px solid grey",
              height: "10px !important",
              minHeight: "10px",
              maxWidth: "80px",
              fontSize: "9px",
              margin: "6px",
            }}
          >
            Chats &nbsp; 12
          </button>
          <button
            className="btn"
            style={{
              border: "1px solid grey",
              height: "10px !important",
              minHeight: "10px",
              maxWidth: "80px",
              fontSize: "9px",
              margin: "6px",
            }}
          >
            Saved &nbsp; 12
          </button>
        </div>
      </div>
      {allChat.map((item, index) => (
        <p key={index}>{item.message}</p>
      ))} 
      <ul className="absolute bottom-0 w-full gap-1 menu rounded-box">
        <li>
          <a target="_blank">
            <MdOutlineCoffee size={15} />
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
            <MdOutlineVpnKey size={15} />
            <p className={`${!open && "hidden"}`}>Updates & FAQ</p>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default SideBar;
