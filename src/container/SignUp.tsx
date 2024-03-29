import React, { useEffect } from "react";

import { Form, Input, InputNumber, Button } from "antd";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actAuthSignUp } from "./module/action";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

export default function SignUp() {
  const dispatch = useDispatch();
  const onFinish = (values) => {
    dispatch(actAuthSignUp(values.user));
  };

  return (
    <>
      <>
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
          <Form.Item
            name={["user", "name"]}
            label="Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "email"]}
            label="Email"
            rules={[
              {
                type: "email",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item name={["user", "password"]} label="Password">
            <Input />
          </Form.Item>
          <Form.Item name={["user", "c_password"]} label="Register Password">
            <Input />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Link to="/">Home</Link>
          </Form.Item>
        </Form>
      </>
    </>
  );
}
