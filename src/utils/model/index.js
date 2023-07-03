import { useEffect, useState } from 'react';

export const cleanObject = (obj) => {
    const filteredEntries = Object.entries(obj).filter(([_, value]) => {
        return value !== undefined && value !== '';
    });
    return Object.fromEntries(filteredEntries);
};

export const useMount = (callback) => {
    useEffect(() => {
        callback();
    }, []);
};

export const useDebounce = (value, delay) => {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const timeout = setTimeout(() => setDebounceValue(value), delay);
        return () => clearTimeout(timeout);
    }, [value, delay]);

    return debounceValue;
};
