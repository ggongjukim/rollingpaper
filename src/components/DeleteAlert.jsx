import * as C from '@chakra-ui/react';
import { useRef

 } from 'react';
export default function DeleteAlert({props}) {
    const { isOpen, onOpen, onClose } = useDisclosure({defaultprops : props});
    const cancelRef = useRef();
  
    return (
      <>
        <C.Button colorScheme='red' onClick={onOpen}>
          Delete Customer
        </C.Button>
  
        <C.AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <C.AlertDialogOverlay>
            <C.AlertDialogContent>
              <C.AlertDialogHeader fontSize='lg' fontWeight='bold'>
              </C.AlertDialogHeader>
  
              <C.AlertDialogBody>
                Are you sure? You can't undo this action afterwards.
              </C.AlertDialogBody>
  
              <C.AlertDialogFooter>
                <C.Button ref={cancelRef} onClick={onClose}>
                  Cancel
                </C.Button>
                <C.Button colorScheme='red' onClick={onClose} ml={3}>
                  Delete
                </C.Button>
              </C.AlertDialogFooter>
            </C.AlertDialogContent>
          </C.AlertDialogOverlay>
        </C.AlertDialog>
      </>
    )
  }