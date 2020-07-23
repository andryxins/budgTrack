import React, { useEffect } from 'react';

type Props = {
  user: {} | null;
  history: any;
};

const HomePage: React.FC<Props> = ({ user, history }: Props) => {
  useEffect(() => {
    if (!user) return history.replace('/authorisation');
  }, [user]);

  return <p>HomePage</p>;
};

export default HomePage;
