import React from 'react';

export function useInput(initialValue: string | number, action?: (value: string | number) => void) {
    const [value, setValue] = React.useState(initialValue);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {
            target: { value },
        } = e;

        if (action) {
            action(value);
        }
        setValue(value);
    };

    return {
        value,
        onChange,
    };
}
