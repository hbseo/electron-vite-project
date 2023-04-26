import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Button,
    ModalProps,
    ModalContentProps,
} from '@chakra-ui/react';
import React from 'react';

export interface ModalCustomProps extends ModalProps {
    title: string;
    ref?: React.Ref<HTMLDivElement>;
    modalContentProps?: ModalContentProps;
    handleModalConfirm: () => void;
}

export const ModalCustom = React.forwardRef<HTMLDivElement, ModalCustomProps>(
    ({ title, isOpen, onClose, handleModalConfirm, modalContentProps, children }, ref) => {
        return (
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent {...modalContentProps} ref={ref}>
                    <ModalHeader>{title}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>{children}</ModalBody>
                    <ModalFooter>
                        <Button mr={3} colorScheme="blue" onClick={handleModalConfirm}>
                            확인
                        </Button>
                        <Button onClick={onClose}>닫기</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        );
    },
);
