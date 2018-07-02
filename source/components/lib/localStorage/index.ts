export const setLocalStorageItem = (key, val) => {
  try {
    const { localStorage } = window;
    const serializedValue = JSON.stringify(val);
    localStorage.setItem(key, serializedValue);
  } catch (err) {}
};

export const getLocalStorageItem = (key) => {
  try {
    const { localStorage } = window;
    const serializedValue = localStorage.getItem(key);
    if (serializedValue === null) {
      return null;
    }
    return JSON.parse(serializedValue);
  } catch (err) {
    return null;
  }
};
