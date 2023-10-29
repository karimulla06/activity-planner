import { useEffect, useState } from "react";

function getValueFromLocalStorage(key, initialValue) {
  const data = localStorage.getItem(key);
  if (data) {
    return JSON.parse(data);
  }
  if (initialValue instanceof Function) return initialValue();
  return initialValue;
}

const useLocalState = (key, initialValue) => {
  const [state, setState] = useState(() =>
    getValueFromLocalStorage(key, initialValue)
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

export default useLocalState;
