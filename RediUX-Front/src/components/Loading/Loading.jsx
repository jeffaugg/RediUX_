import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../assets/loading.json';
import { styled } from '@mui/material';
import { useEffect, useState } from'react';

const Container = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  width: '100vw',
});

const Loading = () => {
  const [isLoading, setIsLoading] = useState(true);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return (
      <Container>
        <Lottie options={defaultOptions} height={200} width={200} />
      </Container>
    );
  }

  return null;
};

export default Loading;