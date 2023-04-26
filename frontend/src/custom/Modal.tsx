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

export interface ModalCustomProps extends ModalProps {
    title: string;
    modalContentProps?: ModalContentProps;
    handleModalConfirm: () => void;
}

export function ModalCustom({
    title,
    isOpen,
    onClose,
    handleModalConfirm,
    modalContentProps,
    children,
}: React.PropsWithChildren<ModalCustomProps>) {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent {...modalContentProps}>
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
}
