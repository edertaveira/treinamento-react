import React, { useEffect, useState } from "react";
import { Form, Select, Button } from "antd";
import axios from "axios";
import { endpoint } from "../common/contantes";
import { useHistory } from "react-router-dom";

const Home = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [paises, setPaises] = useState([]);

  const history = useHistory();

  async function getPaises() {
    setLoading(true);
    const res = await axios.get(`${endpoint}/cases`);
    if (res.status === 200) {
      setPaises(Object.keys(res.data));
    }
    setLoading(false);
  }

  function selecionarPais() {
    form.validateFields().then((values) => {
      history.push(`/${values.pais}`);
    });
  }

  function onFinish(values) {
    console.log(values);
    history.push(`/${values.pais}`);
  }

  useEffect(() => {
    getPaises();
  }, []);

  return (
    <div>
      <Form initialValues={{ pais: "Brazil" }} onFinish={onFinish} form={form}>
        <Form.Item name="pais" rules={[{ required: true, message: "Campo Obrigatório!" }]}>
          <Select onChange={selecionarPais} placeholder="Selecione o País" loading={loading}>
            {paises.map((pais) => (
              <Select.Option key={pais} value={pais}>
                {pais}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Button htmlType="submit">Selecionar</Button>
      </Form>
    </div>
  );
};

export default Home;
