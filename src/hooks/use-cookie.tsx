import React from 'react';
import Cookies from 'js-cookie';
import CookieAttributes from 'js-cookie';

type SetValue<T> = (value: T | ((val: T) => T)) => void;
type Options = typeof CookieAttributes.attributes;


function useCookie<T>(key: string, defaultValue: T, options: Options = {}): [T, SetValue<T>, () => void] {
  const [value, setStoredValue] = React.useState<T>(() => {
    let currentValue: T | undefined;

    try {
      const cookieValue = Cookies.get(key);
      currentValue = cookieValue ? JSON.parse(cookieValue) : defaultValue;
    } catch (error) {
      currentValue = defaultValue;
    }

    return currentValue as T;
  });

  const setValue: SetValue<T> = (newValue) => {
    // Allow value to be a function to update state based on previous state
    const valueToStore =
      newValue instanceof Function ? newValue(value) : newValue;

    setStoredValue(valueToStore);

    // Update storage
    Cookies.set(key, JSON.stringify(valueToStore), options);
  };

  const deleteCookie = React.useCallback(() => {
    Cookies.remove(key);
    setStoredValue(defaultValue);
  }, [key, defaultValue]);

  // Initialize state from cookie value when component mounts
  const cookieValue = Cookies.get(key);
  React.useMemo(() => {
    if (cookieValue) {
      setStoredValue(JSON.parse(cookieValue));
    }
  }, [cookieValue]);

  // Update cookie value whenever state changes
  React.useEffect(() => {
    Cookies.set(key, JSON.stringify(value), options);
  }, [value, key, options]);
  return [value, setValue, deleteCookie];
}

export default useCookie;
