import React from 'react';
import { InputLeftElement, Input, InputGroup, InputGroupProps } from '@chakra-ui/react';
import { FiSearch } from 'react-icons/fi';
import { useInput } from '@/hooks';

export interface InputTextProps extends InputGroupProps {
    initialValue?: string | number;
    placeholder?: string;
    ref?: React.Ref<HTMLInputElement>;
    action?: (valut: string | number) => void;
}

export const InputText = React.forwardRef<HTMLInputElement, InputTextProps>(
    ({ initialValue = '', placeholder, action, children, ...props }, ref) => {
        const value = useInput(initialValue, action);
        return (
            <InputGroup {...props}>
                <InputLeftElement pointerEvents="none">
                    <FiSearch />
                </InputLeftElement>
                <Input placeholder={placeholder} {...value} ref={ref} />
            </InputGroup>
        );
    },
);
