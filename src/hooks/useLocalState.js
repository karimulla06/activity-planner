import { useEffect, useState } from "react";

function getValueFromLocalStorage(key, initialValue) {
  const data = localStorage.getItem(key);
  if (data) {
    try {
      return JSON.parse(data);
    } catch (error) {
      console.error("Error parsing JSON data from localStorage:", error);
    }
  }
  if (initialValue instanceof Function) return initialValue();
  return initialValue;
}

const useLocalState = (key, initialValue, clearOnUnMount) => {
  const [state, setState] = useState(() =>
    getValueFromLocalStorage(key, initialValue)
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));

    return () => {
      if (clearOnUnMount) {
        localStorage.removeItem(key);
      }
    };
  }, [key, state, clearOnUnMount]);

  return [state, setState];
};

export default useLocalState;
