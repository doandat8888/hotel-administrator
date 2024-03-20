import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react'

interface Props {
    isOpen: boolean
    content: string,
    onConfirm: () => void,
    confirmTxt: string,
    colorConfirmBtn: "default" | "primary" | "secondary" | "success" | "warning" | "danger" | undefined,
    onCloseModal: () => void
}

const ModalConfirm = ({ isOpen, content, onConfirm, colorConfirmBtn, onCloseModal, confirmTxt }: Props) => {
    return (
        <>
            <Modal
                backdrop="opaque"
                isOpen={isOpen}
                classNames={{
                    backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"
                }}
            >
                <ModalContent>
                    <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                    <ModalBody>
                        {content}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="default" variant="light" onPress={onCloseModal}>
                            Close
                        </Button>
                        <Button color={colorConfirmBtn} onPress={onConfirm}>
                            {confirmTxt}
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default ModalConfirm