const setLocalStorage = (key, data) => {
  if (key) {
    localStorage.setItem(key, data);
  }
};

const getLocalStorage = (key) => {
  if (key) {
    return localStorage.getItem(key);
  }
};

export { setLocalStorage, getLocalStorage };
