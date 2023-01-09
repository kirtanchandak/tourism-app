import React, { useState } from "react";
import { styles } from "./styles";

const Avatar = () => {
  const [hover, setHover] = useState(false);
  return (
    <div style={{ position: "fixed", top: "630px", right: "100px" }}>
      <div
        className="transition-3"
        style={{ ...styles.avatarHello, ...{ opacity: hover ? "1" : "0" } }}
      >
        How may I help you?
      </div>
      <div
        className="transition-3"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          ...styles.chatWithMeButton,
          ...{ border: hover ? "2px solid #f9f0ff" : "4px solid #ffffff" },
        }}
      ></div>
    </div>
  );
};

export default Avatar;
