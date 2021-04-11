import React from "react";

import CommentContext from "./commentContext";
import io from "socket.io-client";

const commentState = (props) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const socket = io();
    setSocket(socket);
    return () => socket.close();
  }, []);
  const state = {
    socket,
  };
  return (
    <CommentContext.Provider value={state}>
      {props.children}
    </CommentContext.Provider>
  );
};

export default commentState;
