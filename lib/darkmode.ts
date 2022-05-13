type defaultOptions = {
  bottom: string;
  right: string;
  left: string;
  time: string;
  mixColor: string;
  backgroundColor: string;
  buttonColorDark: string;
  buttonColorLight: string;
  label: string;
  saveInCookies: boolean;
  autoMatchOsTheme: boolean;
};

export default class DarkMode {
  constructor(options: defaultOptions) {}
}
