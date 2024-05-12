import { Grid } from '@chakra-ui/react';


import CardIcon from './CardIcon';

export default function CardList({cards}) {
    return (
    <Grid templateColumns="repeat(3, 1fr)" gap={4}>
        {cards?.map((card) => (
            <CardIcon key={card.id} card={card} />
        ))} 
        </Grid>
);
}