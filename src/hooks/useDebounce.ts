import { useEffect, useState } from 'react';

const useDebounce = (text: string, delay = 500): string => {
  const [debouncedValue, setDebouncedValue] = useState(text);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(text);
    }, delay);

    return (): void => {
      clearTimeout(handler);
    };
  }, [delay, text]);

  return debouncedValue;
};

export default useDebounce;
