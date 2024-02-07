import { Button, Form, Input } from 'antd';
import { useState } from 'react';

const Register = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const register = async () => {
    /*   try {
         const response = await fetch('http://localhost:4000/api/register', {
           method: 'POST',
           headers: {
             'Content-Type': 'application/json',
           },
           body: JSON.stringify(userData),
         });
         const data = await response.json();
         console.log(data);
       } catch (error) {
         console.error(error);
       }
   */
    try {
      const response = await fetch('http://localhost:3000/api/oauth/test', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      {/*
      todo make this generic
*/}
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Button onClick={() => register()} type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
