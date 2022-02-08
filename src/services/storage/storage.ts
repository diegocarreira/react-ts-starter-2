/* eslint-disable @typescript-eslint/no-explicit-any */
import Cookies from 'js-cookie';

type storageType = {
  get: (key: string) => any;
  set: (key: string, value: any) => void;
  remove: (key: string) => void;
};

const storage: storageType = {
  get: () => undefined,
  set: () => undefined,
  remove: () => undefined,
};

// Safari in incognito has local storage, but size 0
// This system falls back to cookies in that situation
try {
  if (!window.localStorage) {
    throw Error('no local storage');
  }

  // Setup simple local storage wrapper
  storage.set = (key, value) => {
    return localStorage.setItem(key, JSON.stringify(value));
  };
  storage.get = (key) => {
    const item = localStorage.getItem(key);
    try {
      return item ? JSON.parse(item) : null;
    } catch (e) {
      return null;
    }
  };
  storage.remove = (key) => localStorage.removeItem(key);
} catch (e) {
  storage.set = Cookies.set;
  storage.get = Cookies.getJSON;
  storage.remove = Cookies.remove;
}

export default storage;
