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
    animation?: string;
    buttonWidth?: string;
    buttonHeight?: string;
}
export default class Darkmode {
    button: HTMLButtonElement;
    time: string;
    constructor(options: optionsType);
    showWidget: () => void;
    toggle: () => void;
    isDarkActived(): boolean;
}
export {};
