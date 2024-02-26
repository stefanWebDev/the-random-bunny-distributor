import { Button, Form, Input } from 'antd';
import { useState } from 'react';
import { useMutation } from 'react-query';
import axios from 'axios';

interface BunnyData {
  name: string;
  description: string;
  email: string;
}

const DonateBunny = () => {
  const [bunnyData, setBunnyData] = useState({
    name: '',
    description: '',
    email: '',
  });
  const mutation = useMutation(
    (newData: BunnyData) => axios.post('/api/bunny/add', newData),
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
      <h1>Donate a Bunny</h1>

      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <Form.Item label="name" name="name">
          <Input
            onChange={(e) =>
              setBunnyData((prevState) => {
                return { ...prevState, name: e.target.value };
              })
            }
          />
        </Form.Item>

        <Form.Item label="description" name="description">
          <Input
            onChange={(e) =>
              setBunnyData((prevState) => {
                return { ...prevState, description: e.target.value };
              })
            }
          />{' '}
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Button
            onClick={() => mutation.mutate(bunnyData)}
            type="primary"
            htmlType="submit"
          >
            Donate
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default DonateBunny;
