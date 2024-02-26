import { Button, Checkbox, Form } from 'antd';
import { useMutation } from 'react-query';
import axios from 'axios';
import { useState } from 'react';

const ReceiveBunny = () => {
  const [signedUp, setSignedUp] = useState(false);
  const mutation = useMutation(
    (isSignedUp: boolean) =>
      axios.post('/api/bunny/add-receiver', { isSignedUp }),
    {
      onSuccess: (data) => {
        console.log(data);
      },
      onError: (error) => {
        console.log(error);
      },
    },
  );

  return (
    <div>
      <h1>Receive a Bunny</h1>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <Form.Item name="receive">
          <Checkbox onChange={(e) => setSignedUp(e.target.checked)}>
            I would like to receive a bunny
          </Checkbox>
        </Form.Item>
        <Button
          onClick={() => mutation.mutate(signedUp)}
          type="primary"
          htmlType="submit"
        >
          Sign me up
        </Button>
      </Form>
    </div>
  );
};

export default ReceiveBunny;
