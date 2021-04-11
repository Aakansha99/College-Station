import React, { useState, useContext, useEffect } from "react";
import "./chat.css";
import axios from "axios";
import io from "socket.io-client";
import AuthContext from "../../Auth/AuthContext";
import ProfileContext from "../../Profile/ProfileContext";

const socket = io("http://localhost:5001");

const Chat = (props) => {
  const { student, GetAllStudent } = useContext(ProfileContext);
  const [data, setData] = useState({
    content: "",
    conversation: "",
    chosenUser: "",
    listeMessages: [],
    listeUsers: [],
    connectedUser: localStorage.id,
  });
  const {
    content,
    conversation,
    chosenUser,
    listeUsers,
    listeMessages,
    connectedUser,
  } = data;

  const handleInput = (e) => {
    setData((prevData) => ({ ...prevData, content: e.target.value }));
  };

  const sendMessage = async (event) => {
    event.preventDefault();
    const message = {
      content: content,
      user: connectedUser,
    };
    try {
      const res = await axios.post(
        "/api/chat/sendMessage/" + conversation,
        message
      );
    } catch (err) {
      console.log(err);
    }
  };

  const clickUser = async (idUser) => {
    console.log(idUser);
    setData((datas) => ({ ...datas, chosenUser: idUser }));
    try {
      const res = await axios.get(
        "/api/chat/getPrivateMessage/" +
          idUser +
          "/" +
          connectedUser
      );
      setData((prevData) => ({
        ...prevData,
        conversation: res.data._id,
        listeMessages: res.data.messages,
      }));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const filldata = () => {
      GetAllStudent();
      setData((prevData) => ({
        ...prevData,
        listeUsers: student.filter((obj) => obj._id !== connectedUser),
      }));
    };
    filldata();
    // clickUser(student[0]._id);

    socket.on("newMessageSended", (data) => {
      clickUser(chosenUser);
    });

    socket.on("newUserAdded", (data) => {
      GetAllStudent();
      setData((prevData) => ({
        ...prevData,
        listeUsers: student.filter((obj) => obj._id !== connectedUser),
      }));
      clickUser(student[0]._id);
    });
  }, []);

  return (
    <>
      <div className="chat-container">
        <h3 className=" text-center">Messaging</h3>
        <div className="messaging">
          <div className="inbox_msg">
            <div className="inbox_people">
              <div className="headind_srch">
                <div className="recent_heading">
                  <h4>Recent</h4>
                </div>
              </div>
              <div className="inbox_chat">
                <div className="chat_list">
                  {listeUsers.map((el, i) => (
                    <div
                      className="chat_people"
                      key={el._id}
                      onClick={() => clickUser(el._id)}
                    >
                      <div className="chat_img">
                        {" "}
                        <img
                          src="https://ptetutorials.com/images/user-profile.png"
                          alt="sunil"
                        />{" "}
                      </div>
                      <div className="chat_ib">
                        <h5>{el.name}</h5>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mesgs">
              <div className="msg_history">
                {listeMessages.map((el, i) => (
                  <>
                    {el.user !== connectedUser && (
                      <div className="incoming_msg ">
                        <div className="incoming_msg_img">
                          {" "}
                          <img
                            src="https://ptetutorials.com/images/user-profile.png"
                            alt="sunil"
                          />
                        </div>
                        <div className="received_msg">
                          <div className="received_withd_msg">
                            <p>{el.content}</p>
                            <span className="time_date"> {el.CreatedDate}</span>
                          </div>
                        </div>
                      </div>
                    )}
                    {el.user === connectedUser && (
                      <div className="outgoing_msg ifUserConnected">
                        <div className="sent_msg">
                          <p>{el.content}</p>
                          <span className="time_date"> {el.CreatedDate}</span>
                        </div>
                      </div>
                    )}
                  </>
                ))}
              </div>
              <div className="type_msg">
                <div className="input_msg_write">
                  <form>
                    <input
                      type="text"
                      id="content"
                      value={content}
                      onChange={handleInput}
                      className="write_msg"
                      placeholder="Type a message"
                    />
                    <button
                      className="msg_send_btn"
                      onClick={sendMessage}
                      type="submit"
                    >
                      <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
