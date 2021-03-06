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
    constructor(options: optionsType);
    activeDark: () => void;
    toggle: () => void;
    isActiveDark(): boolean;
}
export {};
