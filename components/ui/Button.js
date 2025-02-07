import React from "react";
import { ThemeContext } from "@/store/ThemeContext";

const Button = () => {
  return (
    <ThemeContext.Consumer>
      {(context) => {
        const { toggleTheme } = context;
        return <button onClick={toggleTheme}>click me</button>;
      }}
    </ThemeContext.Consumer>
  );
};

export default Button;
