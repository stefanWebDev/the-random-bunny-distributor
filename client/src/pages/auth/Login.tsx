import { Button, Form, Input } from 'antd';
import { useState } from 'react';

const Login = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  return (
    <div>
      <h1>Login</h1>
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
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
