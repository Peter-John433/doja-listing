import React, { createContext, Component } from "react";

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    isShowLight: true,
    dark: { textColor: "#000", bgColor: "#fff" },
    light: { textColor: "#fff", bgColor: "#000" },
  };
  toggleTheme = () => {
    this.setState({ isShowLight: !this.state.isShowLight });
  };
  render() {
    return (
      <div>
        <ThemeContext.Provider
          value={{ ...this.state, toggleTheme: this.toggleTheme }}
        >
          {this.props.children}
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default ThemeContextProvider;
