import React, { useState } from "react";
import { Form, List } from "antd";
import ItemCard from "./ItemCard";
import FormSearch from "./FormSearch";
import axios from "axios";
const endpoint = "https://api.github.com";

const Usuarios = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [q, setQ] = useState("");
  const [totalCount, setTotalCount] = useState(0);

  async function search(query, per_page = 30, page = 1) {
    setLoading(true);
    const res = await axios.get(
      `${endpoint}/search/users?q=user:${query}&per_page=${per_page}&page=${page}`
    );
    if (res.status === 200) {
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

  return (
    <>
      <FormSearch loading={loading} form={form} onFinish={onFinish} />
      <List
        loading={loading}
        grid={{ gutter: 16, column: 6 }}
        dataSource={list}
        pagination={{
          total: totalCount,
          pageSize: 30,
          onChange: changePage,
        }}
        renderItem={(item) => (
          <List.Item>
            <ItemCard item={item} />
          </List.Item>
        )}
      />
    </>
  );
};

export default Usuarios;
