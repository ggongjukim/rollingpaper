import { Grid } from '@chakra-ui/react';
import * as S from '../styles';

import CardIcon from './CardIcon';

export default function CardList({ cards }) {
  return (
    <S.CardListContianer>
      <Grid templateColumns='repeat(3, 1fr)' gap={4}>
        {cards?.map((card, idx) => (
          <CardIcon key={card._id} card={card} idx={idx} />
        ))}
      </Grid>
    </S.CardListContianer>
  );
}
