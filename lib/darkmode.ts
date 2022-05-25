interface optionsType {
  bottom?: string;
  right?: string;
  left?: string;
  transitionTime?: string;
  backgroundColor?: string;
  buttonDarkColor?: string;
  buttonLightColor?: string;
  content: string;
  saveInCookies?: boolean;
  buttonWidth?: string;
  buttonHeight?: string;
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
      backgroundColor: "#fff",
      buttonDarkColor: "#141414",
      buttonLightColor: "#fff",
      content: "",
      saveInCookies: true,
      buttonWidth: "3rem",
      buttonHeight: "3rem",
    };

    options = { ...defaultOptions, ...options };

    const css = `
      .darkmode-wrap {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background : ${options.backgroundColor}
        z-index: -10;
        pointer-events: none;
        mix-blend-mode: difference;
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
      .darkmode--activated{
        background: ${options.backgroundColor};
      }
      img, .darkmode-ignore {
        isolation: isolate;
        display: inline-block;
      }
    `;

    const button = document.createElement("button");

    button.innerHTML = options.content;

    const darkmodeActive = window.localStorage.getItem("darkmode") === "true";

    if (darkmodeActive === true) {
      button.classList.add("darkmode-toggle--white");
      document.body.classList.add("darkmode-wrap");
    }

    document.body.insertBefore(button, document.body.firstChild);

    const linkElement = document.createElement("link");
    linkElement.setAttribute("rel", "stylesheet");
    linkElement.setAttribute("type", "text/css");
    linkElement.setAttribute(
      "href",
      "data:text/css;charset=UTF-8," + encodeURIComponent(css)
    );
    document.head.appendChild(linkElement);

    this.button = button;
    this.time = options.transitionTime!;
  }

  showWidget = (): void => {
    const button = this.button;
    const time = parseFloat(this.time) * 1000;

    button.classList.add("darkmode-toggle");
    button.setAttribute("aria-label", "Activate dark mode");
    button.setAttribute("aria-checked", "false");
    button.setAttribute("role", "checkbox");

    button.addEventListener("click", () => {
      const isDarkmode = this.isDarkActived();

      if (!isDarkmode) {
        button.setAttribute("disabled", "true");
        setTimeout(() => {
          button.removeAttribute("disabled");
        }, time);
      } else {
        button.setAttribute("disabled", "true");
        setTimeout(() => {
          button.removeAttribute("disabled");
        }, 1);
      }

      button.classList.toggle("darkmode-toggle--white");
      document.body.classList.toggle("darkmode--activated");
      window.localStorage.setItem("darkmode", (!isDarkmode).toString());
    });
  };

  toggle = (): void => {
    const isDarkmode = this.isDarkActived();
    const button = this.button;

    document.body.classList.toggle("darkmode--activated");
    document.body.classList.toggle("darkmode-wrap");
    window.localStorage.setItem("darkmode", (!isDarkmode).toString());
    button.setAttribute("aria-label", "De-activate dark mode");
    button.setAttribute("aria-checked", "true");
  };

  isDarkActived() {
    return document.body.classList.contains("darkmode--activated");
  }
}
