import * as C from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';

import { EmailIcon } from '@chakra-ui/icons';
import * as S from '../styles';
import { AudioPlay, CardList } from '../components';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useDisclosure } from '@chakra-ui/react';

export default function MainPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [cards, setCards] = useState();
  const contentRef = useRef(null);
  const nameRef = useRef(null);
  const toast = useToast();

  const getCards = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_FAST_API}/posts`);
    setCards(data);
  };

  const createCard = async () => {
    if (!nameRef.current.value || !contentRef.current?.value) {
      toast({
        title: '빈칸 확인!',
        description: '편지 내용과 빈칸을 모두 채우세요',
        status: 'info',
        duration: 9000,
        isClosable: true,
      });
      return;
    }

    const result = await axios
      .post(`${process.env.REACT_APP_FAST_API}/posts`, {
        name: nameRef.current?.value,
        content: contentRef.current?.value,
      })
      .then((res) => res)
      .then(() => getCards())
      .then(() =>
        toast({
          title: '편지 저장 완료!',
          description: '수정, 삭제 가능해요.',
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
      );
  };

  useEffect(() => {
    getCards();
  }, []);

  // console.log(cards);

  return (
    <S.Container>
      <S.TopContainer>
        <div>스승의 날 편지가 도착했어요!</div>
      </S.TopContainer>
      <CardList cards={cards} />
      <S.BottomContainer>
        <C.Button
          rightIcon={<EmailIcon />}
          colorScheme='teal'
          size={'lg'}
          fontSize={'2xl'}
          fontWeight={'normal'}
          onClick={onOpen}
        >
          스승의 날 편지 쓰기
        </C.Button>
        <AudioPlay/>
        </S.BottomContainer>

        <C.Modal
          initialFocusRef={contentRef}
          finalFocusRef={nameRef}
          isOpen={isOpen}
          onClose={onClose}
          size={'xs'}
          isCentered
        >
          <C.ModalOverlay />
          <C.ModalContent>
            <C.ModalHeader>
              <S.GamjaDiv>스승의 날 편지쓰기</S.GamjaDiv>
            </C.ModalHeader>
            <C.ModalCloseButton />
            <C.ModalBody pb={6}>
              <C.FormControl>
                <C.FormLabel>편지 내용</C.FormLabel>
                <C.Textarea
                  focusBorderColor={'#38B2AC'}
                  minHeight={'300px'}
                  ref={contentRef}
                  placeholder='용인 연수원의 추억, 회사 생활, 요즘 고민 ... 자유롭게!'
                />
              </C.FormControl>

              <C.FormControl mt={4}>
                <C.FormLabel>이름</C.FormLabel>
                <C.Input
                  focusBorderColor={'#38B2AC'}
                  ref={nameRef}
                  placeholder='누군지 알아볼 수 있게!'
                />
              </C.FormControl>
            </C.ModalBody>

            <C.ModalFooter>
              <C.Button
                colorScheme='teal'
                mr={3}
                fontSize={'xl'}
                fontWeight={'normal'}
                onClick={createCard}
              >
                저장하기
              </C.Button>
              <C.Button
                onClick={onClose}
                colorScheme='teal'
                mr={3}
                fontSize={'xl'}
                fontWeight={'normal'}
              >
                닫기
              </C.Button>
            </C.ModalFooter>
          </C.ModalContent>
        </C.Modal>
    </S.Container>
  );
}
