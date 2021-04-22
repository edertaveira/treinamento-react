import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { favoritarAction, removerFavoritoAction } from "./store/actions/commonActions";
import { Button, Card, Col, Form, Input, List, Row, Tabs } from "antd";
import { useState } from "react";
import axios from "axios";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const endpoint = "https://api.github.com";
const { TabPane } = Tabs;

function App() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [q, setQ] = useState("");
  const [totalCount, setTotalCount] = useState(0);

  const dispatch = useDispatch();
  const { favoritos } = useSelector((s) => s.common);

  async function search(query, per_page = 30, page = 1) {
    setLoading(true);
    const res = await axios.get(`${endpoint}/search/repositories?q=topic:${query}&per_page=${per_page}&page=${page}`);
    if (res.status === 200) {
      console.log(res.data);
      setList(res.data.items);
      setTotalCount(res.data.total_count);
    }
    setLoading(false);
  }

  async function onFinish(values) {
    search(values.query);
    setQ(values.query);
  }

  function changePage(page, pageSize) {
    search(q, pageSize, page);
  }

  function favoritar(repository) {
    dispatch(favoritarAction(repository));
  }

  function removerFavorito(repository) {
    dispatch(removerFavoritoAction(repository));
  }

  const itemCard = (item) => {
    return (
      <Card
        actions={[
          favoritos.find((it) => it.id === item.id) ? (
            <FaHeart onClick={() => removerFavorito(item)} />
          ) : (
            <FaRegHeart onClick={() => favoritar(item)} />
          ),
        ]}
        cover={<img alt="example" src={item.owner.avatar_url} />}
      >
        <h3>
          <a href={item.html_url} target="_blank">
            {item.name}
          </a>
        </h3>
        <p>
          <a href={item.owner.html_url} target="_blank">
            {item.owner.login}
          </a>
        </p>
      </Card>
    );
  };

  return (
    <div className="App">
      <Tabs defaultActiveKey="1" type="card">
        <TabPane tab="Buscar" key="1">
          <Form onFinish={onFinish} form={form}>
            <Row gutter={16}>
              <Col sm={20}>
                <Form.Item name="query" rules={[{ required: true, message: "Campo Obrigatório" }]}>
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
          <List
            loading={loading}
            grid={{ gutter: 16, column: 6 }}
            dataSource={list}
            pagination={{
              total: totalCount,
              pageSize: 30,
              onChange: changePage,
            }}
            renderItem={(item) => <List.Item>{itemCard(item)}</List.Item>}
          />
        </TabPane>
        <TabPane tab={`Favoritos (${favoritos.length})`} key="2">
          <List
            loading={loading}
            grid={{ gutter: 16, column: 6 }}
            dataSource={favoritos}
            renderItem={(item) => <List.Item>{itemCard(item)}</List.Item>}
          />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default App;
