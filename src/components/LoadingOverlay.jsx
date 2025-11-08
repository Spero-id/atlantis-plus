import React from 'react';
import { useLoading } from '../context/LoadingContext'; 
import PageLoader from './LoadingPage'; 

const LoadingOverlay = () => {
  const { isLoading } = useLoading();

  if (!isLoading) {
    return null;
  }

  return <LoadingPage />;
};

export default LoadingOverlay;