import { ChakraProvider } from '@chakra-ui/react';
import Router from './router';
import { useEffect } from 'react';
import { setMobileHeight } from './common/utils';

import './App.css';

function App() {
  useEffect(() => {
    setMobileHeight();

    window.addEventListener('resize', setMobileHeight);
    return () => window.removeEventListener('resize', setMobileHeight);
  }, []);

  return (
    <ChakraProvider>
      <Router />
    </ChakraProvider>
  );
}

export default App;
