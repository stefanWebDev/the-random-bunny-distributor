import { Button, Form, Input } from 'antd';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const Login = () => {
  /*  const navigate = useNavigate();*/
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  //todo make generic
  const login = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/oauth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        //todo set error message
        console.error('failed to register ');
        return;
      }

      console.log(await response.json());
      /*      navigate('/');*/
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log(Cookies.get('sessionId'));
  }, []);

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
          <Button onClick={() => login()} type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
