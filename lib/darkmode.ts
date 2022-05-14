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
};

export default class DarkMode {
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
      animation: "scale(100)",
    };

    options = { ...defaultOptions, ...options };

    const css = `
      .darkmode-layer {
        background: ${options.backgroundColor};
        transition: all ${options.transitionTime} ease;
      }
      .darkmode-layer--simple {
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        transform: ${options.animation};
      }
      .darkmode-toggle {
        background: ${options.buttonDarkColor};
        width: 3rem;
        height: 3rem;
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

    const layer = document.createElement("div");
    const button = document.createElement("button");
  }
}
