import { useEffect, useRef, useState } from 'react';
import * as M from '@mui/icons-material';
import * as C from '@chakra-ui/react';

export default function AudioPlay() {
  const [isPlay, setPlay] = useState();
  const audioEl = useRef(null);

  const playHandler = () => {
    setPlay(!isPlay);

  };

  useEffect(() => {

    if (isPlay) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  }, [isPlay]);

  return (
    <>
      <C.IconButton
        // isRound={true}
        // variant='solid'
        // variant='unstyled'
        size = {'lg'}
        aria-label='AudioPlay'
        icon={isPlay ? <M.MusicNoteRounded fontSize='large' /> : <M.MusicOffRounded fontSize='large'/>}
        onClick={playHandler}
      />
      <audio loop src={`teachersday.wav`} ref={audioEl}></audio>
    </>
  );
}
