type optionsType = {
  bottom: string;
  right: string;
  left: string;
  transitionTime: string;
  backgroundColor: string;
  buttonDarkColor: string;
  buttonLightColor: string;
  content: string;
  saveInCookies: boolean;
  animation: string;
  buttonWidth: string;
  buttonHeight: string;
};

type cssType ={
  darkmode-wrap: {
    background:string;
    transition: string;
    transform: string;
  }
  darkmode-toggle {
    background: string;
    width: string;
    height: string;
    position: string;
    border-radius: string;
    border:string;
    right: string;
    bottom: string;
    left: string;
    cursor: string;
    transition: string;
    display: string;
    justify-content: string;
    align-items: string;
  }
  darkmode-toggle--white {
    background:string;
  }
};
export default class DarkMode {
  constructor(options: optionsType) {
    const defaultOptions = {
      bottom: "30px",
      right: "30px",
      left: "unset",
      transitionTime: "0.3s",
      backgroundColor: "#121212",
      buttonDarkColor: "#141414",
      buttonLightColor: "#fff",
      content: "",
      saveInCookies: true,
      animation: "scale(100)",
      buttonWidth: "3rem",
      buttonHeight: "3rem",
    };

    options = { ...defaultOptions, ...options };

    const css = `
      .darkmode-wrap {
        background: ${options.backgroundColor};
        transition: all ${options.transitionTime} ease;
        transform: ${options.animation};
      }
      .darkmode-toggle {
        background: ${options.buttonDarkColor};
        width: ${options.buttonWidth};
        height: ${options.buttonHeight};
        position: fixed;
        border-radius: 50%;
        border:none;
        right: ${options.right};
        bottom: ${options.bottom};
        left: ${options.left};
        cursor: pointer;
        transition: all 0.5s ease;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .darkmode-toggle--white {
        background: ${options.buttonLightColor};
      }
    `;

    const button = document.createElement("button");

    const darkmodeActivated =
      window.localStorage.getItem("darkmode") === "true";

    const darkmodeNeverActivatedByAction =
      window.localStorage.getItem("darkmode") === null;

    if (darkmodeActivated === true && options.saveInCookies) {
      button.classList.add("darkmode-toggle--white");
      document.body.classList.add("darkmode--activated");
    }
    this.addStyle(css);

    document.body.insertBefore(button, document.body.firstChild);
  }
  addStyle(css:cssType) {
    const linkElement = document.createElement("link");

    linkElement.setAttribute(
      "href",
      "data:text/css;charset=UTF-8," + encodeURIComponent(css)
    );
    document.head.appendChild(linkElement);
  }
  showWidget() {}
}
