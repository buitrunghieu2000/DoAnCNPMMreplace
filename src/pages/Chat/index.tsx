import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../features/auths/slice/selector";
import { getCurrentUserAsync } from "../../features/auths/slice/thunk";
import { selectAllChart } from "../../features/chart/slice/selector";
import img from "../../images/imageAvatar.png";
import {
  selectAllMessage,
  selectAllRoom,
} from "../../features/chat/slice/selector";
import {
  getAllMessageAsync,
  getAllRoomAsync,
} from "../../features/chat/slice/thunk";
import "./style.scss";

interface ChatProps {}

const ChatSocket = (props: ChatProps) => {
  const [avatar, setAvatar] = useState<any>("");
  const [name, setName] = useState("");

  const dispatch = useDispatch();
  const chatRoom = useSelector(selectAllRoom);
  const message = useSelector(selectAllMessage);
  const curUser = useSelector(selectCurrentUser);

  React.useEffect(() => {
    (async () => {
      dispatch(getCurrentUserAsync());
      if (curUser.role === 1) {
        dispatch(getAllRoomAsync());
      } else if (curUser.role === 0) {
        dispatch(
          getAllMessageAsync({
            idRoom: "61b9bba6437befdd57b05427",
            skip: 1,
            limit: 15,
          })
        );
      } else {
        return "";
      }
    })();
  }, []);

  console.log(chatRoom);
  const handleClick = (roomId: string, avatar: string, name: string) => {
    dispatch(
      getAllMessageAsync({
        idRoom: roomId,
        skip: 1,
        limit: 15,
      })
    );
    setAvatar(avatar);
    setName(name);
  };

  return (
    <div>
      <div className="container">
        <div className="Chat ">
          <div className="row no-gutters">
            <div className="col-md-4 border-right">
              <div className="settings-tray">
                <img
                  className="profile-image"
                  src={curUser.avatar}
                  alt="Profile img"
                />
                <span className="settings-tray--right">
                  <i className="material-icons">cached</i>
                  <i className="material-icons">message</i>
                  <i className="material-icons">menu</i>
                </span>
              </div>
              <div className="search-box">
                <div className="input-wrapper">
                  <i className="material-icons">search</i>
                  <input placeholder="Search here" type="text" />
                </div>
              </div>
              {chatRoom.map((item: any, i: number) => (
                <div
                  className="friend-drawer friend-drawer--onhover"
                  key={i}
                  onClick={() =>
                    handleClick(item.idRoom, item.avatar, item.name)
                  }
                >
                  <img className="profile-image" src={item.avatar} alt="" />
                  <div className="text">
                    <h6>{item.name}</h6>
                    <p className="text-muted">{item.message}</p>
                  </div>
                  <span className="time text-muted small">13:21</span>
                </div>
              ))}
            </div>
            <div
              className="col-md-8"
              style={{
                height: "80vh",
                overflowY: "scroll",
                overflowX: "hidden",
              }}
            >
              <div className="settings-tray">
                <div className="friend-drawer no-gutters friend-drawer--grey">
                  {avatar == "" ? (
                    ``
                  ) : (
                    <img className="profile-image" src={avatar} alt="" />
                  )}

                  <div className="text">
                    <h6>{name == "" ? `` : name}</h6>
                    {/* <p className="text-muted">
                      Layin' down the law since like before Christ...
                    </p> */}
                  </div>
                  <span className="settings-tray--right">
                    <i className="material-icons">cached</i>
                    <i className="material-icons">message</i>
                    <i className="material-icons">menu</i>
                  </span>
                </div>
              </div>
              <div className="chat-panel" style={{ height: "100%" }}>
                {message.map((item: any) => (
                  <>
                    {curUser._id !== item.creatorUser ? (
                      <div className="row no-gutters">
                        <div className="col-md-3">
                          <div className="chat-bubble chat-bubble--left">
                            {item.message}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="row no-gutters">
                        <div className="col-md-3 offset-md-9">
                          <div className="chat-bubble chat-bubble--right">
                            {item.message}
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                ))}

                <div className="row">
                  <div className="col-12">
                    <div className="chat-box-tray">
                      <i className="material-icons">sentiment_very_satisfied</i>
                      <input
                        type="text"
                        placeholder="Type your message here..."
                      />
                      <i className="material-icons">mic</i>
                      <i className="material-icons">send</i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatSocket;
