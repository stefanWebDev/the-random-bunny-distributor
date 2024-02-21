import { Button, Form, Input } from 'antd';

const GiveBunny = () => {
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
        <Form.Item
          label="name"
          name="name"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input onChange={(e) => console.log()} />
        </Form.Item>

        <Form.Item
          label="description"
          name="description"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input onChange={(e) => console.log()} />
        </Form.Item>

        <Form.Item
          label="email"
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input onChange={(e) => console.log()} />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Button type="primary" htmlType="submit">
            Donate
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default GiveBunny;
