function setLocalDarkMode(value: boolean) {
  localStorage.setItem("darkmode-dark", value.toString());
}

function getLocalDarkMode(): boolean {
  const localValue = localStorage.getItem("darkmode-dark");

  if (!localValue) {
    return false;
  }

  return localValue === "true";
}

export function isDark(): boolean {
  return (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
}

export function isDarkLocal(): boolean {
  const localDark = getLocalDarkMode();

  if (!localDark) {
    return isDark();
  }

  return localDark;
}

export function setDark(isDark: boolean) {
  setLocalDarkMode(isDark);
}

export function onUpdate(cb: (isDark: boolean) => void) {
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", () => cb(isDark()));
}
