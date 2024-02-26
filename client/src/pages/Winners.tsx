import { useMutation } from 'react-query';
import axios from 'axios';
import { useEffect, useState } from 'react';

interface WinnerData {
  data: {
    email?: string;
    error?: string;
  };
}

const Winners = () => {
  const [donorMail, setDonorMail] = useState<string | undefined>('');

  const mutation = useMutation(() => axios.get('/api/bunny/winner'), {
    onSuccess: (res: WinnerData) => {
      if (res.data.error) {
        console.log(res.data.error);
        return;
      }

      setDonorMail(res.data.email);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  useEffect(() => {
    mutation.mutate();
  }, []);

  return (
    <div>
      <h1>Bunny</h1>
      {donorMail ? (
        <h2>You have won a bunny! Contact this mail: {donorMail}</h2>
      ) : (
        <h2>No bunny for you</h2>
      )}
    </div>
  );
};

export default Winners;
