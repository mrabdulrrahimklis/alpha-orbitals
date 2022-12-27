import { useEffect, useState } from 'react';

function useDebounce<T>(value: string, delay?: number) {
  const [debouncedValue, setDebouncedValue] = useState<string>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  if (value.split('').length > 3) return debouncedValue;
  return '';
}

export default useDebounce;
