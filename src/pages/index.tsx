import React from 'react';

import { useRouter } from 'next/router';

import App from './_app';

const Index = () => {
  const router = useRouter();

  React.useEffect(() => {
    router.push('/auth/login');
  }, []);

  return App;
};

export default Index;
