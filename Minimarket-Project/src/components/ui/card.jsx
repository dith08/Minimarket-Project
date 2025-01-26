import React from "react";

export const Card = ({ children, className }) => {
  return (
    <div
      className={`rounded-xl shadow-lg p-4 bg-red ${className || ""}`}
    >
      {children}
    </div>
  );
};

export const CardContent = ({ children }) => {
  return <div>{children}</div>;
};
