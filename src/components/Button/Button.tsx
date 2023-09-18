import React, { PropsWithChildren } from "react";

const Button = ({ children }: PropsWithChildren) => {
  return (
    <button
      style={{
        display: "inline-block",
        outline: "none",
        cursor: "pointer",
        fontSize: "16px",
        lineHeight: "20px",
        fontWeight: "600",
        borderRadius: "8px",
        padding: "14px 24px",
        border: "none",
        transition:
          "box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s, -webkit-transform 0.1s ease 0s, transform 0.1s ease 0s",
        background:
          "linear-gradient(to right, rgb(230, 30, 77) 0%, rgb(227, 28, 95) 50%, rgb(215, 4, 102) 100%)",
        color: "#fff",
      }}
    >
      {children}
    </button>
  );
};

export default Button;
