type optionsType = {
  bottom: string;
  right: string;
  left: string;
  time: string;
  mixColor: string;
  backgroundColor: string;
  buttonColorDark: string;
  buttonColorLight: string;
  content: string;
  saveInCookies: boolean;
};

export default class DarkMode {
  constructor(options: optionsType) {
    const defaultOptions = {
      bottom: "30px",
      right: "30px",
      left: "unset",
      time: "0.3s",
      mixColor: "#fff",
      backgroundColor: "#fff",
      buttonColorDark: "#141414",
      buttonColorLight: "#fff",
      content: "",
      saveInCookies: true,
    };

    options = { ...defaultOptions, ...options };

    const css = `
      
    `;
  }
}
