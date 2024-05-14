import * as C from '@chakra-ui/react';
import * as I from '@chakra-ui/icons';
import * as S from '../styles';
import { useDisclosure } from '@chakra-ui/react';
import { useState, useRef } from 'react';
import axios from 'axios';
import { useToast } from '@chakra-ui/react';


export default function CardIcon({ card, idx, reloadCards }) {
  const val = idx % 8;
  const imageurl = 'mail' + val + '.png';
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isEditing, setEditing] = useState(false);
  const contentRef = useRef(null);
  const nameRef = useRef(null);
  const toast = useToast();

  const updateCard = async () => {
    if (!nameRef.current.value || !contentRef.current?.value) {
      toast({
        description: '편지 내용과 이름 빈칸을 모두 채우세요',
        status: 'info',
        duration: 9000,
        isClosable: true,
      });
      return;
    }

    // console.log(card._id, contentRef.current?.value,nameRef.current?.value );

    const result = await axios
      .put(`${process.env.REACT_APP_FAST_API}/posts/${card._id}`, {
        name: nameRef.current?.value,
        content: contentRef.current?.value
      })
      .then((res) => res)
      .then(()=>reloadCards())
      .then(()=>onClose())
      .then(() =>
        toast({
          description: '편지 저장 완료!',
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
      );
  };

  
  const editHandler = () =>{
    setEditing(!isEditing);
  }

  const deleteHander = () =>{ // api 가 없네!
    if(confirm("정말 삭제할까요?")){
      // const result = await axios
      // .delete(`${process.env.REACT_APP_FAST_API}/posts/${card._id}`)
      alert("정상적으로 제출되었습니다.");
    }else{
      return;
    }
  }

  return (
    <>
      <S.CardIconContianer>
        <C.Image src={imageurl} onClick={onOpen}></C.Image>
        <S.CardIconName>
          {card.name.length < 5 ? card.name : card.name.slice(0, 4) + '...'}
        </S.CardIconName>
      </S.CardIconContianer>


      <C.Modal         
        initialFocusRef={contentRef}
        size={'xs'}  
        isOpen={isOpen} 
        onClose={onClose} 
        isCentered
      >
        <C.ModalOverlay />
        <C.ModalContent>
          <C.ModalHeader></C.ModalHeader>
          <C.ModalCloseButton />
          <C.ModalBody>
          
          { !isEditing ? 
            (<>
            <S.GamjaDiv style={{minHeight: '150px'}}>{card.content}</S.GamjaDiv>
            <S.GamjaDiv>{`From. ${card.name}`}</S.GamjaDiv>
            </>) 
            : (<><C.FormControl>
              <C.Textarea
                focusBorderColor={'#38B2AC'}
                minHeight={'300px'}
                ref={contentRef}
                defaultValue={card.content}
              />
            </C.FormControl>

            <C.FormControl mt={4}>
              <C.Input
                focusBorderColor={'#38B2AC'}
                ref={nameRef}
                defaultValue={card.name}
              />
            </C.FormControl></>)
          }

          </C.ModalBody>

          <C.ModalFooter>
            <S.GamjaDiv>
            { !isEditing ? (<>
            <C.Button rightIcon={<I.EditIcon />} colorScheme='teal' mr={3} onClick={editHandler} fontSize={'xl'} fontWeight={'normal'}>편집</C.Button>
            <C.Button rightIcon={<I.CloseIcon />} colorScheme='gray' onClick={onClose} fontSize={'xl'} fontWeight={'normal'}> 닫기 </C.Button></>
            ) : (
            <>
            <C.Button rightIcon={<I.CheckIcon />} colorScheme='teal' mr={3} onClick={updateCard} fontSize={'xl'} fontWeight={'normal'}>저장</C.Button>
            {/* <C.Button rightIcon={<I.DeleteIcon />} colorScheme='teal' mr={3} onClick={deleteHandler}>삭제</C.Button> */}
            <C.Button rightIcon={<I.CloseIcon />} colorScheme='gray' onClick={editHandler} fontSize={'xl'} fontWeight={'normal'}> 취소 </C.Button></>
            
           )}</S.GamjaDiv>
          </C.ModalFooter>
        </C.ModalContent>
      </C.Modal>
    </>
  );
}
