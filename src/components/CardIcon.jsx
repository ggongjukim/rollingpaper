import * as C from '@chakra-ui/react';
import * as S from '../styles';
import { useDisclosure } from '@chakra-ui/react';

export default function CardIcon({ card, idx }) {
  const val = idx % 8;
  const imageurl = 'mail' + val + '.png';
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {' '}
      <S.CardIconContianer>
        <C.Image src={imageurl} onClick={onOpen}></C.Image>
        <S.CardIconName>
          {card.name.length < 5 ? card.name : card.name.slice(0, 4) + '...'}
        </S.CardIconName>
      </S.CardIconContianer>
      <C.Modal size={'xs'} isOpen={isOpen} onClose={onClose} isCentered>
        <C.ModalOverlay />
        <C.ModalContent>
          <C.ModalHeader></C.ModalHeader>
          <C.ModalCloseButton />
          <C.ModalBody minHeight={'150px'}>
            <S.GamjaDiv>{card.content}</S.GamjaDiv>
          </C.ModalBody>

          <C.ModalFooter>
            <C.Button colorScheme='teal' mr={3} onClick={onClose}>
              Close
            </C.Button>
            <C.Button variant='ghost'>Secondary Action</C.Button>
          </C.ModalFooter>
        </C.ModalContent>
      </C.Modal>
    </>
  );
}
