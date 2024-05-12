import * as C from '@chakra-ui/react';

export default function CardIcon({card}) {
    const val = card.id % 8;
    const imageurl = 'mail' + val +'.png';
    return (
<div>
    <C.Image src = {imageurl}>
    </C.Image>
    <h1>{card.from}</h1>
</div>
);
}