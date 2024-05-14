import { Button, ButtonGroup } from '@chakra-ui/react';
import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  background-image: url('hwangdaram.jpg'); // url('flower2.gif');
  background-size: contain;
  /* background-size : 130% 100%; */
  /* background-repeat : no-repeat; */
  /* background-position:center; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TopContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* z-index : 10; */
  /* position : fixed; */
  padding-top: 30px;

  font-family: 'Gamja Flower', 'Noto Sans', 'Noto Sans KR';
  font-style: bold;
  font-weight: 500;
  font-size: 30px;
`;

export const BottomContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
  position: fixed;
  bottom: 30px;
  font-family: 'Gamja Flower', 'Noto Sans', 'Noto Sans KR';
  font-weight: 500;
  font-size: 40px;
`;

export const MainButton = styled.button`
  // 미사용중
  font-style: normal;
  font-weight: 500;
  font-size: 27px;
  cursor: pointer;
  width: 380px;
  height: 77px;
  border-radius: 6px;
  border: 0px;
  background: #07b8b8;
  color: white;

  :hover {
    background-color: #00a8a7;
  }
`;
export const CardListContianer = styled.div`
  padding: 20px;

  font-family: 'Gamja Flower', 'Noto Sans', 'Noto Sans KR';
  font-style: bold;
  font-weight: 500;
  font-size: 23px;
`;

export const CardIconContianer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: 'Gamja Flower', 'Noto Sans', 'Noto Sans KR';
  font-style: bold;
  font-weight: 500;
  font-size: 23px;
`;

export const CardIconName = styled.div`
  font-family: 'Gamja Flower', 'Noto Sans', 'Noto Sans KR';
  font-style: bold;
  font-weight: 500;
  font-size: 23px;
`;

export const GamjaDiv = styled.div`
  font-family: 'Gamja Flower', 'Noto Sans', 'Noto Sans KR';
  /* font-style: bold; */
  /* font-weight: bold; */
  font-size: 21px;
`;
