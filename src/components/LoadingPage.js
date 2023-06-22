import React from 'react';
import { Spinner } from '@chakra-ui/react';

const LoadingPage = () => (
  <Spinner
    color='red'
    size='xl'
    emptyColor='#950101'
    thickness='4px'
    mr='auto'
    ml='auto'
    left='0'
    right='0'
    top='50vh'
    position='absolute'
  />
);

export default LoadingPage;
