import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';

function useCloseOnClickOutside(ref, handler = '') {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        handler(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);
}

function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
    };
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
}

function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}
function useLocalStorageState(
  key,
  defaultValue = '',
  { serialize = JSON.stringify, deserialize = JSON.parse } = {}
) {
  const [state, setState] = useState(() => {
    const valueInLocalStorage = window.localStorage.getItem(key);
    if (valueInLocalStorage) {
      return deserialize(valueInLocalStorage);
    }
    return typeof defaultValue === 'function' ? defaultValue() : defaultValue;
  });
  // note: for checking if the key is changed by the user or someone else in between or while using the app
  const prevKeyRef = useRef(key);

  useEffect(() => {
    const prevKey = prevKeyRef.current;
    if (prevKey !== key) {
      window.localStorage.removeItem(prevKey);
    }
    prevKeyRef.current = key;
    window.localStorage.setItem(key, serialize(state));
  }, [key, state, serialize]);

  return [state, setState];
}
const useInput = (state) => {
  const [inputState, setInputState] = useState(state);
  const inputUpdate = (e) => {
    const inpValue = e.target.value;
    setInputState({
      ...inputState,
      [e.target.name]: inpValue,
    });
  };
  return { inputState, inputUpdate, setInputState };
};

const useLocalStorageSetItem = (itemName, itemValue) =>
  localStorage.setItem(itemName, itemValue);
const useLocalStorageGetItem = (itemName) => localStorage.getItem(itemName);

export {
  useCloseOnClickOutside,
  useMediaQuery,
  useScrollToTop,
  useLocalStorageState,
  useLocalStorageSetItem,
  useLocalStorageGetItem,
  useInput,
};
