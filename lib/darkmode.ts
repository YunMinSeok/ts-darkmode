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
  layer: HTMLDivElement;
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
    .darkmode-layer{
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      mix-blend-mode: difference;
      transition : all ${options.transitionTime} ease;
    }
      .darkmode-container{
        background : ${options.backgroundColor};
      }

      .darkmode-button {
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
        transition: all ${options.transitionTime} ease;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .darkmode-button-whiteType {
        background: ${options.buttonLightColor};
      }

      .darkmode-body-color{
        background: ${options.backgroundColor};
      }

      img, .darkmode-ignore {
        isolation: isolate;
        display: inline-block;
      }
    `;

    const layer = document.createElement("div");
    const button = document.createElement("button");

    button.innerHTML = options.content;

    const darkmodeActive = window.localStorage.getItem("darkmode") === "true";
    layer.classList.add("darkmode-layer");
    document.body.classList.add("darkmode-body-color");

    if (darkmodeActive === true) {
      button.classList.add("darkmode-button-whiteType");
      layer.classList.add("darkmode-container");
    }

    document.body.insertBefore(button, document.body.firstChild);
    document.body.insertBefore(layer, document.body.firstChild);

    const linkElement = document.createElement("link");
    linkElement.setAttribute("rel", "stylesheet");
    linkElement.setAttribute("type", "text/css");
    linkElement.setAttribute(
      "href",
      "data:text/css;charset=UTF-8," + encodeURIComponent(css)
    );
    document.head.appendChild(linkElement);

    this.layer = layer;
    this.button = button;
    this.time = options.transitionTime!;
  }

  activeDark = (): void => {
    const layer = this.layer;
    const button = this.button;
    const time = parseFloat(this.time) * 1000;

    button.classList.add("darkmode-button");
    button.setAttribute("aria-label", "Activate dark mode");
    button.setAttribute("aria-checked", "false");
    button.setAttribute("role", "checkbox");

    button.addEventListener("click", () => {
      const isDarkmode = this.isActiveDark();

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

      button.classList.toggle("darkmode-button-whiteType");
      layer.classList.toggle("darkmode-container");
      // document.body.classList.toggle("darkmode-body-color");
      window.localStorage.setItem("darkmode", (!isDarkmode).toString());
    });
  };

  toggle = (): void => {
    const isDarkmode = this.isActiveDark();
    const layer = this.layer;
    const button = this.button;

    layer.classList.toggle("darkmode-container");
    // document.body.classList.toggle("darkmode-body-color");
    window.localStorage.setItem("darkmode", (!isDarkmode).toString());
    button.setAttribute("aria-label", "De-activate dark mode");
    button.setAttribute("aria-checked", "true");
  };

  isActiveDark() {
    return document.body.classList.contains("darkmode-container");
  }
}
