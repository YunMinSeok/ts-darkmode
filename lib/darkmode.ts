interface optionsType {
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
}

export default class Darkmode {
  button: HTMLButtonElement;
  time: string;
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

    button.innerHTML = options.content;

    const darkmodeActivated =
      window.localStorage.getItem("darkmode") === "true";

    if (darkmodeActivated === true) {
      button.classList.add("darkmode-toggle--white");
      document.body.classList.add("darkmode--activated");
    }
    //add css Style
    const linkElement = document.createElement("link");
    linkElement.setAttribute(
      "href",
      "data:text/css;charset=UTF-8," + encodeURIComponent(css)
    );
    document.head.appendChild(linkElement);

    this.button = button;
    this.time = options.transitionTime;
  }

  showWidget() {
    const button = this.button;
    const time = parseFloat(this.time) * 1000;

    button.classList.add("darkmode-toggle");
    button.classList.remove("darkmode-toggle--inactive");
    button.setAttribute("aria-label", "Activate dark mode");
    button.setAttribute("aria-checked", "false");
    button.setAttribute("role", "checkbox");

    button.addEventListener("click", () => {
      const isDarkmode = this.isActivated();

      if (!isDarkmode) {
        button.setAttribute("disabled", true);
        setTimeout(() => {
          button.removeAttribute("disabled");
        }, time);
      } else {
        button.setAttribute("disabled", true);
        setTimeout(() => {
          button.removeAttribute("disabled");
        }, 1);
      }

      button.classList.toggle("darkmode-toggle--white");
      document.body.classList.toggle("darkmode--activated");
      window.localStorage.setItem("darkmode", !isDarkmode);
    });
  }
}
