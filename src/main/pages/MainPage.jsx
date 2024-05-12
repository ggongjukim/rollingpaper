import * as C from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';
import * as S from './styles';
import CardList from './CardList';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function MainPage() {
  const [cards, setCards] = useState();

  const getCards = async () => {
    const { data } = await axios.get('http://localhost:8000/mails');
    setCards(data);
  };

  
  useEffect(() => {
    getCards();
  }, []);

  console.log(cards);

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
          fontSize={'27px'}
          fontStyle={'normal'}
        >
          스승의 날 편지 쓰기
        </C.Button>
      </S.BottomContainer>
    </S.Container>
  );
}
