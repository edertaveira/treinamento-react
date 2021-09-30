import React from "react";
import { Button, Col, Form, Input, Row } from "antd";

const FormSearch = ({ onFinish, form, loading }) => {
  return (
    <Form onFinish={onFinish} form={form}>
      <Row gutter={16}>
        <Col sm={20}>
          <Form.Item
            name="query"
            rules={[{ required: true, message: "Campo Obrigatório" }]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col sm={4}>
          <Button loading={loading} htmlType="submit">
            Buscar
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default FormSearch;
